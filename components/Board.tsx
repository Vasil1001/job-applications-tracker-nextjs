"use client";
import { useBoardStore } from "@/store/BoardStore";
import React, { useEffect } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

export default function Board() {
  const getBoard = useBoardStore((state) => state.getBoard);
  const getJobsList = useBoardStore((state) => state.getJobsList)

  useEffect(() => {
    getBoard();
  }, [getBoard]);
  
  
  return (
    <h1>hello</h1>

    // <DragDropContext>
    //   <Droppable droppableId="board" direction="horizontal" type="column">
    //     {(provided) => <div>{/* Render all columns */}</div>}
    //   </Droppable>
    // </DragDropContext>
  );
}
