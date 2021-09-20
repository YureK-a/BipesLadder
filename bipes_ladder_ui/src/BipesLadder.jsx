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
} from "./helpers";

import {
  SIDEBAR_ITEMS,
  SIDEBAR_ITEMS_OTHER,
  SIDEBAR_ITEM,
  ITEMS_CHANGED,
  COMPONENT,
  COLUMN,
  ITEM_CHANGED,
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

function Container() {
  const initialLayout = initialData.layout;
  const initialComponents = initialData.components;
  const [layout, setLayout] = useState(initialLayout);
  const [components, setComponents] = useState(initialComponents);
  const firstTime = true;

  const handleDropToTrashBin = useCallback(
    (dropZone, item) => {
      const splitItemPath = item.path.split("-");
      setLayout(handleRemoveItemFromLayout(layout, splitItemPath));
    },
    [layout]
  );

  const handleDropNewLine = useCallback((dropZone, item) => {
    console.log("dropZone", dropZone);
    console.log("item", item);
  });

  const handleDrop = useCallback(
    (dropZone, item) => {
      console.log("dropZone", dropZone);

      const splitDropZonePath = dropZone.path.split("-");

      const pathToDropZone = splitDropZonePath.slice(0, -1).join("-");

      const newItem = { id: item.id, type: item.type };
      if (item.type === COLUMN) {
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

      console.log(splitItemPath);

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
      />
    );
  };

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
      console.log(index);
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
                <Button
                  color="primary"
                  onClick={() => {
                    alert("ok");
                  }}
                >
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
          <div className="pageTest">
           
          </div>
        </div>
      </div>
    </div>
  );
}
export default Container;
