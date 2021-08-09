import { Droppable, Draggable} from 'react-beautiful-dnd'
import React from 'react';
import {direitaitens} from "./App";

function listasE() {
  for (let numeroDeListas = 0; numeroDeListas < 4; numeroDeListas++) {
      return (
          <div id="listadadireita">
          <Droppable droppableId={numeroDeListas}>
            {(provided) => (
              <ul className="direitaFotos" {...provided.droppableProps} ref={provided.innerRef}>
                {direitaitens.map(({id, name, thumb}, index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                        {(provided) => (
                          <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                            <div className="fotos-thumb">
                              <img src={thumb} alt={` ${name} Thumb`} />
                            </div>
                          </li>
                        )}
                      </Draggable>
                    );
                  })}
                  {provided.placeholder}
                </ul>
              )}
           </Droppable>
        </div>
      )
  }
}

export default class ListaLadder extends React.Component {
    render() {
        return(
          listasE()
        )
    }
}
