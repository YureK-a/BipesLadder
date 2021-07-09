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