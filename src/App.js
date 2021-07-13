import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './App.css';
import ListaLadder from './lista';
import {fotosTestes, direita} from "./dados";


function App() {

  const [fotos, atualizarFotos] = useState(fotosTestes);

  const [direitaitens, atualizardireita] = useState(direita)

  function handleOnDragEnd(result) {
        if (!result.destination) return;
  
      const itemsE = Array.from(fotos);
      const itemsD = Array.from(direitaitens)

      const [reorderedItem] = itemsE.splice(result.source.index, 0);

      itemsD.splice(result.destination.index, 0, reorderedItem);

      atualizarFotos(itemsE);
      atualizardireita(itemsD)
    
  }
    
  return (
    <div className="App">
      <header className="App-header">
      <h1>Teste de listas</h1>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <div id='corpo'>
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
            <div id='divDireita'>
              <ListaLadder></ListaLadder>
            </div>
            </div>
          </DragDropContext>
        </header>
      </div>
    );
}

  
export var direitaitens
export default App;
