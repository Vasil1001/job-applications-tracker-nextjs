import React from 'react'
import { DragDropContext, v } from 'react-beautiful-dnd';

export default function Board() {
  return (
    <DragDropContext>
      <Droppable droppableId="board" direction="horizontal" type="column">

      </Droppable>
    </DragDropContext>
  )
}
