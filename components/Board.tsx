"use client"
import { useBoardStore } from "@/store/BoardStore"
import { Column } from "@/typings"
import React, { useEffect } from "react"
import { DragDropContext, DropResult, Droppable } from "react-beautiful-dnd"
import ColumnComp from "./Column"


export default function Board() {
  const [board, getBoard, setBoardState, updateJobInDB] = useBoardStore(
    (state) => [
      state.board,
      state.getBoard,
      state.setBoardState,
      state.updateJobInDB,
    ]
  )

  // const getJobsList = useBoardStore((state) => state.getJobsList);

  useEffect(() => {
    getBoard()
  }, [getBoard])

  const handleOnDragEnd = (result: DropResult) => {
    const { destination, source, type } = result
    // check if card dropped outside the board
    if (!destination) return

    // Handle a column drag
    if (type === "column") {
      const entries = Array.from(board.columns.entries())
      const [removed] = entries.splice(source.index, 1)
      entries.splice(destination.index, 0, removed)

      const rearrangedColumns = new Map(entries)
      setBoardState({
        ...board,
        columns: rearrangedColumns,
      })
    }

    // Handle a job card drag
    const columns = Array.from(board.columns)
    const startColIndex = columns[Number(source.droppableId)]
    const finishColIndex = columns[Number(destination.droppableId)]

    const startCol: Column = {
      id: startColIndex[0],
      jobs: startColIndex[1].jobs,
    }
    const finishCol: Column = {
      id: finishColIndex[0],
      jobs: finishColIndex[1].jobs,
    }

    if (!startCol || !finishCol) return // if no destination or start

    if (source.index === destination.index && startCol === finishCol) return

    const newJobs = startCol.jobs
    const [jobMoved] = newJobs.splice(source.index, 1)

    // ? IF Drag in the same column
    if (startCol.id === finishCol.id) {
      newJobs.splice(destination.index, 0, jobMoved)
      const newCol = {
        id: startCol.id,
        jobs: newJobs,
      }
      const newColumns = new Map(board.columns)
      newColumns.set(startCol.id, newCol)
      setBoardState({ ...board, columns: newColumns })
    } else {
      // ? IF  Drag to a different column
      const finishJobs = Array.from(finishCol.jobs)
      finishJobs.splice(destination.index, 0, jobMoved)

      const newColumns = new Map(board.columns)
      const newCol = {
        id: startCol.id,
        jobs: newJobs,
      }
      console.log(startCol)
      console.log(finishCol)

      newColumns.set(startCol.id, newCol)
      newColumns.set(finishCol.id, {
        id: finishCol.id,
        jobs: finishJobs,
      })

      // Update in DB
      updateJobInDB(jobMoved, finishCol.id)
      setBoardState({ ...board, columns: newColumns })
    }
  }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="board" direction="horizontal" type="column">
        {(provided) => (
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto w-full"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {Array.from(board.columns).map(([id, column], index) => (
              <ColumnComp key={id} id={id} jobs={column.jobs} index={index} />
            ))}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}
