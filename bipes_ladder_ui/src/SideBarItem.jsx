import React from "react";
import { useDrag } from "react-dnd";

const SideBarItem = ({ data }) => {
  const [{ opacity }, drag] = useDrag({
    item: data,
    collect: monitor => ({
      opacity: monitor.isDragging() ? 0.4 : 1
    })
  });

  
  return (
    <div className="sideBarItem" ref={drag} style={{ opacity }}>
       <svg height="60" width="120">
         
        <g fill="none" stroke={data.component.color}>
          {data.component.svg.map(function(svg_element, index){
            return <path stroke-width="3" d={svg_element} fill="none" />
          })}
        </g>
      </svg>
    </div>
  );
};
export default SideBarItem;
