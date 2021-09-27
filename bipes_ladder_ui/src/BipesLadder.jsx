import React, { useState, useCallback, useEffect } from "react";

import DropZone from "./DropZone";
import TrashDropZone from "./TrashDropZone";

import SideBarItem from "./SideBarItem";
import Row from "./Row";
import initialData from "./initial-data";
import {
  handleMoveWithinParent,
  handleMoveToDifferentParent,
  handleMoveSidebarComponentIntoParent,
  handleRemoveItemFromLayout,
  parseJSON,
  createJSON,
} from "./helpers";

import {
  SIDEBAR_ITEMS,
  SIDEBAR_ITEMS_OTHER,
  SIDEBAR_ITEM,
  ITEMS_CHANGED,
  COMPONENT,
  COLUMN,
  ITEM_CHANGED,
  STANDARD_COMPONENT,
} from "./constants";
import shortid from "shortid";

import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import NavigationIcon from "@material-ui/icons/Navigation";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import { Component } from "react";

import Column, { parallelLines } from "./Column";

function Container() {
  const initialLayout = initialData.layout;
  const initialComponents = initialData.components;
  const [layout, setLayout] = useState(initialLayout);
  const [components, setComponents] = useState(initialComponents);
  const [address, setAddress] = useState([]);
  var addressArray = [];

  const addressFromRow = (addresses) => {
    //addressArray.push(addresses[0]);
    setAddress(addresses);
    console.log(address);
  };

  const handleDropToTrashBin = useCallback(
    (dropZone, item) => {
      console.log(item.path);
      const splitItemPath = item.path.split("-");
      setLayout(handleRemoveItemFromLayout(layout, splitItemPath));
      address.map((row, index) => {
        console.log(row);
        if (row.args.path == item.path) {
          address.splice(index);
        }
      });
    },
    [layout]
  );

  const handleDrop = useCallback(
    (dropZone, item) => {
      const splitDropZonePath = dropZone.path.split("-");

      const pathToDropZone = splitDropZonePath.slice(0, -1).join("-");
      console.log(splitDropZonePath);

      const newItem = { id: shortid.generate(), type: item.type };
      if (item.type === COMPONENT) {
        newItem.children = item.children;
      }

      // sidebar into
      if (item.type === SIDEBAR_ITEM) {
        // 1. Move sidebar item into page
        const newComponent = {
          id: shortid.generate(),
          ...item.component,
        };
        const newItem = {
          id: newComponent.id,
          type: COMPONENT,
          row: splitDropZonePath[2],
          column: splitDropZonePath[1],
        };
        setComponents({
          ...components,
          [newComponent.id]: newComponent,
        });
        setLayout(
          handleMoveSidebarComponentIntoParent(
            layout,
            splitDropZonePath,
            newItem
          )
        );
        return;
      }

      // move down here since sidebar items dont have path
      const splitItemPath = item.path.split("-");
      const pathToItem = splitItemPath.slice(0, -1).join("-");

      // 2. Pure move (no create)
      if (splitItemPath.length === splitDropZonePath.length) {
        // 2.a. move within parent
        if (pathToItem === pathToDropZone) {
          setLayout(
            handleMoveWithinParent(layout, splitDropZonePath, splitItemPath)
          );
          return;
        }

        // 2.b. OR move different parent
        // TODO FIX columns. item includes children
        setLayout(
          handleMoveToDifferentParent(
            layout,
            splitDropZonePath,
            splitItemPath,
            newItem
          )
        );
        return;
      }

      // 3. Move + Create
      setLayout(
        handleMoveToDifferentParent(
          layout,
          splitDropZonePath,
          splitItemPath,
          newItem
        )
      );
    },
    [layout, components]
  );

  const renderRow = (row, currentPath) => {
    return (
      <Row
        key={row.id}
        data={row}
        handleDrop={handleDrop}
        components={components}
        path={currentPath}
        addressFromRow={addressFromRow}
      />
    );
  };

  function checkParallelLines(row) {
    const linePairs = [];
    var initialLine = 0;
    var parallelLinesOrdered = [];
    console.log(parallelLines);
    parallelLines[row].map((path, index) => {
      if (path != "") {
        const splitItemPath = path.split("-");
        const pathToItem = splitItemPath[1];
        parallelLinesOrdered.push(Number(pathToItem));
        parallelLinesOrdered.sort(function (a, b) {
          return a - b;
        });
        console.log(parallelLinesOrdered);
      }
    });

    parallelLinesOrdered.map((pathOrdererd, index) => {
      if (pathOrdererd > initialLine) {
        linePairs.push([initialLine, pathOrdererd]);
        initialLine = pathOrdererd;
      }
    });
    return linePairs;
  }

  function splitPath(path) {
    var splittedPath = path.split("-");
    if (path == "") return -1;
    return {
      line: splittedPath[0],
      column: splittedPath[1],
      row: splittedPath[2],
    };
  }

  function joinPath(row, column, line) {
    return line + "-" + column + "-" + row;
  }

  function operation(op, firstComponent, secondComponent) {
    if (firstComponent.row == -1) return secondComponent;
    if (secondComponent.row == -1) return firstComponent;
    const row = firstComponent.row;
    const address =
      "(" +
      firstComponent.args.address +
      op +
      secondComponent.args.address +
      ")";
    const splittedPathFirstComponent = splitPath(firstComponent.args.path);
    const splittedPathSecondComponent = splitPath(secondComponent.args.path);
    const path = joinPath(
      Math.min(
        splittedPathFirstComponent.row,
        splittedPathSecondComponent.row
      ),
      Math.min(
        splittedPathFirstComponent.column,
        splittedPathSecondComponent.column
      ),
      splittedPathFirstComponent.line
    );
    const type = op + "_operation";
    const newComponent = {
      row: row,
      args: {
        address: address,
        path: path,
        type: type,
      },
    };
    return newComponent;
  }

  function sortAddressByPath(address, row) {
    var newAddress = new Array(2)
      .fill(STANDARD_COMPONENT)
      .map(() => new Array(13).fill(STANDARD_COMPONENT));
    console.info(newAddress);
    let line = [];
    address.map((component, index) => {
      if (component.args != "" && component.row == row) {
        const row = splitPath(component.args.path).row;
        const col = splitPath(component.args.path).column;
        console.log(row, col);
        newAddress[row][col] = component;
      }
    });

    return newAddress;
  }

  function getExpression(linePairs, row) {
    let addressOrdered = sortAddressByPath(address, row);
    let expression = STANDARD_COMPONENT;
    let componentsIntoLinePair = [];

    if (linePairs.length > 0) {
      console.log("Parallel Lines", linePairs, row);
      linePairs.map((pair, index) => {
        componentsIntoLinePair = [];
        for (let row = 0; row < 2; row++) {
          expression = STANDARD_COMPONENT;
          for (let col = pair[0]; col < pair[1]; col++) {
            if (addressOrdered[row][col].row == -1) break;
            console.log(row, col);
            expression = operation("*", addressOrdered[row][col], expression);

            addressOrdered[row][col] = STANDARD_COMPONENT;
            const newPath = expression.args.path;
            addressOrdered[splitPath(newPath).row][splitPath(newPath).column] =
              expression;
          }
          componentsIntoLinePair.push(expression);
          console.log(componentsIntoLinePair);
        }

        expression = STANDARD_COMPONENT;
        componentsIntoLinePair.map((component, index) => {
          expression = operation("+", component, expression);
        });
        console.log(expression);
        const newPath = expression.args.path;
        console.log(newPath, "teste");
        if (splitPath(newPath) != -1) {
          const row = splitPath(newPath).row;
          const col = splitPath(newPath).column;

          addressOrdered[col][row] = expression;
          console.log(addressOrdered);
        }
      });
    }
    
    expression = STANDARD_COMPONENT;
    addressOrdered[0].map((component, index) => {
      console.log(component, expression);
      expression = operation("*", component, expression);
    });
    return expression.args.address;
  }

  const generateCode = useCallback(() => {
    let finalExpression = [];

    layout.map((row, rowIndex) => {
      var linePairs = checkParallelLines(rowIndex);
      console.log(linePairs);
      let obj = {};
      obj.row = rowIndex;
      obj.expression = getExpression(linePairs, rowIndex);
      finalExpression.push(obj);
    });
    alert(createJSON(finalExpression));
  });

  const addnewLine = useCallback(() => {
    var itens = [
      components.lineComponent,
      components.lineComponent,
      components.lineComponent,
      components.lineComponent,
      components.lineComponent,
      components.lineComponent,
      components.lineComponent,
      components.lineComponent,
      components.lineComponent,
      components.lineComponent,
      components.lineComponent,
      components.lineComponent,
      components.openedContactComponent,
    ];

    let newLayout = handleMoveSidebarComponentIntoParent(
      layout,
      [layout.length],
      components.coilComponent
    );
    setLayout(newLayout);

    itens.map((item, index) => {
      let nextComponentLayout = handleMoveSidebarComponentIntoParent(
        newLayout,
        [layout.length, 0],
        item
      );
      setLayout(nextComponentLayout);
      newLayout = nextComponentLayout;
    });
  });

  //return <React.Fragment key={row.id}>{renderRow(row, 1)}</React.Fragment>;

  // dont use index for key when mapping over items
  // causes this issue - https://github.com/react-dnd/react-dnd/issues/342
  return (
    <div className="body">
      <div class="head_top">
        <div style={{ textAlign: "right", float: "right" }}>
          <img src="./images/if_logo.png" width="70"></img>
        </div>
        <h2>Bipes Ladder</h2>
      </div>
      <div class="inner_body">
        <div className="sideBar">
          <h3>Contatos</h3>
          {Object.values(SIDEBAR_ITEMS).map((sideBarItem, index) => (
            <SideBarItem key={sideBarItem.id} data={sideBarItem} />
          ))}
          <h3>Outros</h3>
          {Object.values(SIDEBAR_ITEMS_OTHER).map((sideBarItem, index) => (
            <SideBarItem key={sideBarItem.id} data={sideBarItem} />
          ))}
        </div>
        <div className="pageContainer">
          <div className="page">
            <div class="menu">
              <Fab aria-label="add" style={{ margin: "2px" }}>
                <Button color="primary" onClick={generateCode}>
                  <PlayCircleOutlineIcon />
                </Button>
              </Fab>
              <Fab aria-label="add" style={{ margin: "2px" }}>
                <Button color="primary" onClick={addnewLine}>
                  <AddIcon />
                </Button>
              </Fab>
            </div>

            {layout.map((row, index) => {
              const currentPath = `${index}`;

              return (
                <React.Fragment key={row.id}>
                  <div
                    class="style_modal"
                    style={{
                      border: "1px solid #000",
                      marginBottom: "10px",
                      padding: "5px",
                    }}
                  >
                    Linha {layout.length}
                  </div>
                  {renderRow(row, currentPath)}
                </React.Fragment>
              );
            })}
          </div>

          <TrashDropZone
            data={{
              layout,
            }}
            onDrop={handleDropToTrashBin}
          />
          <div className="pageTest"></div>
        </div>
      </div>
    </div>
  );
}
export default Container;
