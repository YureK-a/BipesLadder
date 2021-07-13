import { Droppable, Draggable} from 'react-beautiful-dnd'
import React, { useState } from 'react';
import {direitaitens} from "./App";

const direitaitenszinhos = direitaitens 

const testes = [
  {
    id: 'testando1',
    name: 'Imagem 1',
    thumb: '/images/paratestes.png'
  },
  {
    id: 'testando2',
    name: 'Imagem 2',
    thumb: '/images/paratestes.png'
  },
  {
    id: 'testando3',
    name: 'Imagem 3',
    thumb: '/images/paratestes.png'
  }
]

export default class ListaLadder extends React.Component {
    render() {
        return (
            <div id="listadadireita">
            <Droppable droppableId='idDlistadadireita'>
              {(provided) => (
                <ul className="direitaFotos" {...provided.droppableProps} ref={provided.innerRef}>
                  {direitaitenszinhos.map(({id, name, thumb}, index) => {
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
