"use client"
import { Job, TypedColumn } from "@/typings"
import React from "react"
import { XCircleIcon } from "@heroicons/react/24/solid"

import {
  DraggableProvidedDragHandleProps,
  DraggableProvidedDraggableProps,
} from "react-beautiful-dnd"
import { useBoardStore } from "@/store/BoardStore"

type Props = {
  job: Job
  index: number
  id: TypedColumn
  innerRef: (element: HTMLElement | null) => void
  draggableProps: DraggableProvidedDraggableProps
  dragHandleProps: DraggableProvidedDragHandleProps | null | undefined
}

export default function JobCard({
  job,
  index,
  id,
  innerRef,
  draggableProps,
  dragHandleProps,
}: Props) {
  const deleteJob = useBoardStore((state) => state.deleteJob)
  return (
    <div
      className="bg-white border shadow-sm drop-shadow-sm hover:bg-zinc-50 border-gray-300 rounded-md space-y-2 mt-5"
      {...draggableProps}
      {...dragHandleProps}
      ref={innerRef}
    >
      <div className="flex justify-between items-center p-3 py-2 text-baseline ">
        <div className="flex flex-col overflow-hidden">
          <p className="text-sm font-semibold ">{job.employer}</p>
      <p className="truncate text-sm overflow-hidden ">{job.title}</p>
        </div>

        <button className="text-gray-500 hover:text-gray-600">
          <XCircleIcon
            onClick={() => deleteJob(index, job, id)}
            className="ml-3 h-7 w-7"
          />
        </button>
      </div>
    </div>
  )
}
