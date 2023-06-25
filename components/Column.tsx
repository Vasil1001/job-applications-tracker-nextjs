import { Job, TypedColumn } from "@/typings";
import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import JobCard from "./JobCard";
import { PlusCircleIcon } from "@heroicons/react/24/solid";

type Props = {
  id: TypedColumn;
  jobs: Job[];
  index: number;
};

export default function Column({ id, jobs, index }: Props) {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Droppable droppableId={index.toString()} type="card">
            {(provided, snapshot) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className={`p-4 rounded-lg shadow-sm ${
                  snapshot.isDraggingOver
                    ? "bg-emerald-400/70"
                    : "bg-white border border-gray-300"
                }`}
              >
                <h2 className="flex justify-between font-bold text-xl">
                  {id}
                  <span className="text-gray-600 bg-zinc-200 font-normal rounded-md px-2 py-1 text-sm">
                    {jobs.length}
                  </span>
                </h2>

                <div className="space-y-2">
                  {jobs.map((job, index) => (
                    <Draggable
                      key={job.$id}
                      draggableId={job.$id}
                      index={index}
                    >
                      {(provided) => (
                        <JobCard
                          job={job}
                          index={index}
                          id={id}
                          innerRef={provided.innerRef}
                          draggableProps={provided.draggableProps}
                          dragHandleProps={provided.dragHandleProps}
                        />
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}

                  <div className="flex items-end justify-end p-2">
                    <button className="text-emerald-500 hover:text-green-600">
                      <PlusCircleIcon className="h-10 w-10" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
}
