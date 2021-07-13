import { Droppable, Draggable} from 'react-beautiful-dnd'
import React, { useState } from 'react';
import ReactDOM, { render } from 'react-dom'

const fotosTestes = [
  {
    id: 'teste',
    name: 'Imagem 1',
    thumb: '/images/paratestes.png'
  },
  {
    id: 'teste2',
    name: 'Imagem 2',
    thumb: '/images/paratestes.png'
  },
  {
    id: 'teste3',
    name: 'Imagem 3',
    thumb: '/images/paratestes.png'
  },
  {
    id: 'teste4',
    name: 'Imagem 4',
    thumb: '/images/paratestes.png'
  }
]

const [fotos, atualizarFotos] = useState(fotosTestes);
  
  function handleOnDragEnd(result) {
        if (!result.destination) return;
  
      const items = Array.from(fotos);
      const [reorderedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, reorderedItem);
  
      atualizarFotos(items);
  }

  
export default class ListaLadder extends React.Component {
  render() {
      return (
<div id="divDaLista">
              <Droppable droppableId="fotos">
                {(provided) => (
                  <ul className="listaDeFotos" {...provided.droppableProps} ref={provided.innerRef}>
                    {fotos.map(({id, name, thumb}, index) => {
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
      )}}