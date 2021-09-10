import React, { useRef } from "react";
import { useDrag } from "react-dnd";
import { COMPONENT } from "./constants";

const style = {
  //border: "1px dashed black",
  cursor: "move",
  textAlign: "center",
  

};
const Component = ({ data, components, path }) => {
  const ref = useRef(null);

  const [{ isDragging }, drag] = useDrag({
    item: { type: COMPONENT, id: data.id, path },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;
  drag(ref);

  const component = components[data.id];

  var svg_elements = ['M0 30 L30 30 L30 -100 L30 100','M50 30 L50 -100 L50 100 L50 30 L80 30'];
  if (component.content == 'opened_contact'){
    svg_elements = ['M0 30 L40 30 L40 -100 L40 100','M80 30 L80 -100 L80 100 L80 30 L120 30'];
  }else{
    if(component.content == 'closed_contact'){
      svg_elements = ['M0 30 L40 30 L40 -100 L40 100','M20 -100 L80 100','M80 30 L80 -100 L80 100 L80 30 L120 30'];
    }
    else{
      if(component.content == 'coil'){
        svg_elements = ['M0 30 L40 30 L40 50 L80 50 L80 10 L40 10 L40 30 M80 30 L120 30']
      }
    }
  }

  return (
    <div
      ref={ref}
      style={{ ...style, opacity }}

    >
      <div>{component.type}</div>
      <svg height="60" width="120">
        <g fill="none" stroke="black">
        {svg_elements.map(function(svg_element, index){
            return <path stroke-width="3" d={svg_element} fill="none" />
          })}
        </g>
      </svg>
     
    </div>
  );
};
export default Component;
