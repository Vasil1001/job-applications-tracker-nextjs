"use client";
import { Job, TypedColumn } from "@/typings";
import React from "react";
import { XCircleIcon } from "@heroicons/react/24/solid";

import {
  DraggableProvidedDragHandleProps,
  DraggableProvidedDraggableProps,
} from "react-beautiful-dnd";
import { useBoardStore } from "@/store/BoardStore";

type Props = {
  job: Job;
  index: number;
  id: TypedColumn;
  innerRef: (element: HTMLElement | null) => void;
  draggableProps: DraggableProvidedDraggableProps;
  dragHandleProps: DraggableProvidedDragHandleProps | null | undefined;
};

export default function JobCard({
  job,
  index,
  id,
  innerRef,
  draggableProps,
  dragHandleProps,
}: Props) {

  const deleteTask = useBoardStore((state) => state.deleteTask);
  return (
    <div
      className="bg-zinc-100 border border-gray-300 rounded-md space-y-2 mt-5"
      {...draggableProps}
      {...dragHandleProps}
      ref={innerRef}
    >
      <div className="flex justify-between items-center p-3 text-baseline ">
        <div className="flex flex-col overflow-hidden">
        <p className="text-sm font-semibold ">{job.employer}</p>
          <p className="truncate overflow-hidden ">{job.title}</p>
        </div>

        <button className="text-gray-500 hover:text-gray-600">
          <XCircleIcon onClick={() => deleteTask(index, job, id)} className="ml-3 h-7 w-7" />
        </button>
      </div>
    </div>
  );
}
