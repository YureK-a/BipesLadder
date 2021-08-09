import React, { Children, useRef, useState } from 'react'
import ReactDOM, { render } from 'react-dom'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import './App.css'
import {fotosTestes, direita} from "./dados";

//biblio do ID
import { uuid } from 'uuidv4';


const reorder = (itensD, startIndex, endIndex) => {
  const result = Array.from(itensD);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
}


class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      fotos: Array.from(fotosTestes),
      itensD: Array.from(direita)
    };

    this.onDragEnd = this.onDragEnd.bind(this);

    this.adicionarContato = this.adicionarContato.bind(this);

  
  }

/** 
//função para organizar a lista
  onDragEnd(result, itensD) {
    var {source, destination} = result;
    var sourceClone, destinationClone;

    if (!destination) {
      return
    }
    
    if (source.droppableId == destination.droppableId) {
      return
    } else {
      sourceClone = Array.from(this.state[source.droppableId]);
      destinationClone = Array.from(this.state[destination.droppableId]);
    }
    
    var [removed] = sourceClone.splice(source.index, 1);
    destinationClone.splice(destination.index, 0, removed);

    result = {};
    result[source.droppableId] = sourceClone;
    result[destination.droppableId] = destinationClone;

    this.setState(result);
  }
    */

  onDragEnd(result) {
    // dropped outside the list



    if (!result.destination) {
      return;
    } 

    const itensD = reorder(
      this.state.itensD,
      result.source.index,
      result.destination.index
    );

    this.setState({
      itensD,
    });
  }


//função para gerar contatos
  adicionarContato = (name, itensD) => {

    itensD = Array.from(direita)

    let idTemp = uuid()

    if (name === 'Contato Aberto') {
      direita.push({
        id: `a${idTemp}`,
        name: name,
        thumb: '/imagens/contatoaberto.jpeg'
        })
    } else 
    if (name === 'Contato Fechado') {
      direita.push({
        id: `f${idTemp}`,
        name: 'Contato Fechado',
        thumb: '/imagens/contatofechado.jpeg'
        })
    }
  
    console.log('testeA')

    this.setState((prevState) => ({
  itensD : Array.from(direita)
}))
  }
  
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Teste de listas</h1>
        </header>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <div id='corpo'>
            <div id="divDosBotoes">
                  <div id='listaEsquerda'> 
                    <div>
                      <div className="fotos-thumb" onClick={() => this.adicionarContato('Contato Aberto')}>
                        <img src='/imagens/contatoaberto.jpeg' alt='contato aberto'></img>
                      </div>
                    </div>
                    <div>
                      <div className="fotos-thumb" onClick={() => this.adicionarContato('Contato Fechado')}>
                        <img src='/imagens/contatofechado.jpeg' alt='contato fechado'></img>
                      </div>
                    </div>
                  </div>
            </div>
            <div id='divDireita'>
              <div id="lista1DaDireita">
                <Droppable droppableId='itens'>
                  {(provided) => (
                    <div className="direitaFotos" {...provided.droppableProps} ref={provided.innerRef}>
                      {this.state.itensD.map(({id, name, thumb}, index) => {
                        return (
                          <Draggable key={id} draggableId={id} index={index}>
                              {(provided) => (
                                <div className="direitaFotosDiv" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                  <div className="fotos-thumb">
                                    <img src={thumb} ></img>
                                  </div>
                                </div>
                              )}
                          </Draggable>
                        );
                      })}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
            </div>       
            <br></br>
            <div id='divDoLixo'>
              <Droppable droppableId='lixo'>
                {(provided) => (
                  <div id='lixoID' {...provided.droppableProps} ref={provided.innerRef}>
                    <img src='/imagens/lixinho.png' alt='lixinhoFoto'></img>
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          </div>
        </DragDropContext>
      </div>
    );
  }
}


export default App;