"use client";
import { useBoardStore } from "@/store/BoardStore";
import React, { useEffect } from "react";
import { DragDropContext, DropResult, Droppable } from "react-beautiful-dnd";
import Column from "./Column";

export default function Board() {
  const [board, getBoard] = useBoardStore((state) => [
    state.board,
    state.getBoard,
  ]);

  // const getJobsList = useBoardStore((state) => state.getJobsList);

  useEffect(() => {
    getBoard();
  }, [getBoard]);

  const handleOnDragEnd = (result: DropResult) => {};
  // This step is needed
  
  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="board" direction="horizontal" type="column">
        {(provided) => (
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto w-full"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            { 
            Array.from(board.columns).map(([id, column], index) => (
              <Column key={id} id={id} jobs={column.jobs} index={index} />
            ))
            }
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
