import React, { useEffect, useRef } from "react";
import { useDrag } from "react-dnd";
import { ROW } from "./constants";
import Column from "./Column";

const style = { marginBottom: "70px" };

var addressArray = [];
const Row = ({ data, components, handleDrop, path, addressFromRow }) => {
  const [address, setAddress] = React.useState("");
  const ref = useRef(null);

  const [{ isDragging }, drag] = useDrag({
    item: {
      type: ROW,
      id: data.id,
      children: data.children,
      path,
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;
  drag(ref);

  useEffect(() => {
    //addressArray.push([path, address]);
    addressArray.push({ row: path, args: address });
    console.log(addressArray);
  }, [address]);

  const addressFromComponent = (addressComponent) => {
    setAddress(addressComponent);
  };

  const renderColumn = (column, currentPath) => {
    return (
      <Column
        key={column.id}
        data={column}
        components={components}
        handleDrop={handleDrop}
        path={currentPath}
        addressFromComponent={addressFromComponent}
      />
    );
  };

  return (
    <div ref={ref} style={{ ...style, opacity }} className="base draggable row">
      {addressFromRow(addressArray)}
      <div className="columns">
        {data.children.map((column, index) => {
          const currentPath = `${path}-${index}`;

          return (
            <React.Fragment key={column.id}>
              {renderColumn(column, currentPath)}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};
export default Row;
