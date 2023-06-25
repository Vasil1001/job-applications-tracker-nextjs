"use client";
import { Job, TypedColumn } from "@/typings";
import React from "react";
import { XCircleIcon } from "@heroicons/react/24/solid";

import {
  DraggableProvidedDragHandleProps,
  DraggableProvidedDraggableProps,
} from "react-beautiful-dnd";

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
  return (
    <div
      className="bg-white rounded-md space-y-2 drop-shadow-md"
      {...draggableProps}
      {...dragHandleProps}
      ref={innerRef}
    >
      <div className="flex justify-between items-center p-5">
        <p className="truncate ">{job.title}</p>
        <button className="text-gray-500 hover:text-gray-600">
          <XCircleIcon className="ml-5 h-8 w-8" />
        </button>
      </div>
    </div>
  );
}
