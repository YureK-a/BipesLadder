import React, { useRef } from "react";
import { useDrag } from "react-dnd";
import { COLUMN } from "./constants";
import DropZone from "./DropZone";
import Component from "./Component";
import zIndex from "@material-ui/core/styles/zIndex";

const style = {};
const parallelLines = [];
const Column = ({ data, components, handleDrop, path }) => {
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
    return (
      <Component
        key={component.id}
        data={component}
        components={components}
        path={currentPath}
      />
    );
  };

  const style_vertical_div = {
    backgroundColor: "#dee0de",
    width: "3px",
    position:"absolute",
    height: "110px",
    marginTop: "68px",
    marginLeft: "-3px",
    
    
  };

  function showLine(path){
    console.log(path);
    if(checkIfwasSelected(path)){
      document.getElementById("parallel_line-"+path).style.backgroundColor="#dee0de";  
      parallelLines.splice(parallelLines.indexOf(path));
    }else{
      document.getElementById("parallel_line-"+path).style.backgroundColor="Black";  
      parallelLines.push(path);
      
    }
    
    
  }

  function checkIfwasSelected(path){
    return parallelLines.includes(path);
  }

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
                    path: currentPath,
                    childrenCount: data.children.length,
                    drawLine: false,
                  }}
                  onDrop={handleDrop}
                />
                
                {renderComponent(component, currentPath)}
                
               
            
          </React.Fragment>
        );
      })}
      <DropZone
        data={{
          path: `${path}-${data.children.length}`,
          childrenCount: data.children.length,
          drawLine: false,
        }}
        onDrop={handleDrop}
        isLast
      />
      <div id={"parallel_line-"+path} style={style_vertical_div} onClick={() => showLine(path)}></div>
    </div>
  );
};
export default Column;
