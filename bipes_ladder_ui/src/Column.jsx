import React, { useRef } from "react";
import { useDrag } from "react-dnd";
import { COLUMN } from "./constants";
import Component from "./Component";
import DropZone from "./DropZone"

const style = {};

let rowPath;

const Column = ({
  data,
  components,
  handleDrop,
  path,
  addressFromComponent,
}) => {
  const ref = useRef(null);

  const [{ isDragging }, drag] = useDrag({
    item: {
      type: COLUMN,
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

  const renderComponent = (component, currentPath) => {
    rowPath = currentPath;
    return (
      <Component
        key={component.id}
        data={data}
        componentData={component}
        components={components}
        path={currentPath}
        addressFromComponent={addressFromComponent}
        handleDrop={handleDrop}
      />
    );
  };

  return (
    <div
      ref={ref}
      style={{ ...style, opacity }}
      className="base draggable column"
    >
      {data.children.map((component, index) => {
        const currentPath = `${path}-${index}`;
        return (
          <React.Fragment key={component.id}>
            <DropZone
              data={{
                path: `${path}-${data.children.length}`,
                childrenCount: data.children.length,
                drawLine: false,
              }}
              onDrop={handleDrop}
              isLast
            />

            {renderComponent(component, currentPath)}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Column;
