import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './App.css';
import ListaLadder from './lista';


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

function App() {

  const [fotos, atualizarFotos] = useState(fotosTestes);
  
  function handleOnDragEnd(result) {
        if (!result.destination) return;
  
      const items = Array.from(fotos);
      const [reorderedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, reorderedItem);
  
      atualizarFotos(items);
  }
    
  return (
    <div className="App">
      <header className="App-header">
      <h1>Teste de listas</h1>
        <DragDropContext onDragEnd={handleOnDragEnd}>
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
            <ListaLadder></ListaLadder>
        </DragDropContext>
      </header>
    </div>
  );
}

export default App;
