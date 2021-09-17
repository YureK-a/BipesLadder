import React from "react";
import { useDrag } from "react-dnd";

const SideBarItem = ({ data }) => {
  const [{ opacity }, drag] = useDrag({
    item: data,
    collect: monitor => ({
      opacity: monitor.isDragging() ? 0.4 : 1
    })
  });

  var svg_elements = ['M0 30 L30 30 L30 -100 L30 100','M50 30 L50 -100 L50 100 L50 30 L80 30'];
  if (data.component.content == 'opened_contact'){
    svg_elements = ['M0 30 L30 30 L30 -100 L30 100','M50 30 L50 -100 L50 100 L50 30 L80 30'];
  }else{
    if(data.component.content == 'closed_contact'){
      svg_elements = ['M0 30 L30 30 L30 -100 L30 100',' M20 -100 L50 100','M50 30 L50 -100 L50 100 L50 30 L80 30'];
    }
    else{
      if(data.component.content == 'coil'){
        svg_elements = ['M0 30 L30 30 L30 50 L50 50 L50 10 L30 10 L30 30 M50 30 L80 30']
      }
      else{
        if(data.component.content == 'line'){
          svg_elements = ['M0 30 L80 30']
        }

      }
    }
  }
   
  return (
    <div className="sideBarItem" ref={drag} style={{ opacity }}>
       <svg id="open_contact" height="60" width="80">
        <g fill="none" stroke="black">
          {svg_elements.map(function(svg_element, index){
            return <path stroke-width="3" d={svg_element} fill="none" />
          })}
        </g>
      </svg>
    </div>
  );
};
export default SideBarItem;
