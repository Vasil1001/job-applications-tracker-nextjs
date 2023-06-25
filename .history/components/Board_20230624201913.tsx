import React from 'react'
import { DragDropContext } from 'react-beautiful-dnd';

export default function Board() {
  return (
    <DragDropContext>
      <Droppable droppableId="board">
      
      </Droppable>
    </DragDropContext>
  )
}
