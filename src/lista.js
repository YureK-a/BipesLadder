import { Droppable, Draggable} from 'react-beautiful-dnd'
import React, { useState } from 'react';
import ReactDOM, { render } from 'react-dom'


export default class ListaLadder extends React.Component {
    render() {
        return (
            <div id="listadadireita">
            <Droppable droppableId='idDlistadadireita'>
               {(provided) => (
                 <ul {...provided.droppableProps} innerRef={provided.innerRef}>
                   <Draggable draggableId='id1' index='1'>
                     {(provided) => (
                      <li {...provided.draggableProps} {...provided.dragHandleProps} innerRef={provided.innerRef}>
                      <p>Foto 1</p>
                      </li>
                   )}
                   
                   </Draggable>
                   <li>
                    <p>Foto 2</p>
                  </li>
                  {provided.placeholder}
                </ul>
              )}
             </Droppable>
          </div>
        )
    }
}
