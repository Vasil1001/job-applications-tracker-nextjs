import { Job, TypedColumn } from "@/typings"
import React from "react"
import { Draggable, Droppable } from "react-beautiful-dnd"
import JobCard from "./JobCard"
import { PlusCircleIcon } from "@heroicons/react/24/solid"
import { useBoardStore } from "@/store/BoardStore"
import { useModalStore } from "@/store/ModalStore"

type Props = {
  id: TypedColumn
  jobs: Job[]
  index: number
}

export default function Column({ id, jobs, index }: Props) {
  const [searchString, setNewJobType] = useBoardStore((state) => [
    state.searchString,
    state.setNewJobType,
  ])
  const openModal = useModalStore((state) => state.openModal)

  const handleAddJob = () => {
    setNewJobType(id)
    openModal()
  }
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
                    : "bg-white-100 border shadow-md border-gray-300 max-h-96 no-scrollbar overflow-y-auto "
                }`}
              >
                <h2 className="flex justify-between font-bold text-xl">
                  {id}
                  <span className="text-gray-600 bg-zinc-200 font-normal rounded-md px-2 py-1 text-sm">
                    {!searchString
                      ? jobs.length
                      : jobs.filter((job) =>
                          job.title
                            .toLowerCase()
                            .includes(searchString.toLowerCase())
                        ).length}
                  </span>
                </h2>

                <div className="space-y-3">
                  {/* <button className="text-emerald-500 hover:text-green-600">
                    <PlusCircleIcon className="h-10 w-10" />
                  </button> */}
                  <button
                    onClick={handleAddJob}
                    className="items-center p-3 bg-zinc-50 hover:border-dashed hover:bg-zinc-100 hover:border-zinc-400 border-dashed border-2 border-zinc-300 w-full rounded-md space-y-2 mt-3 drop-shadow-sm"
                  >
                    <p className="truncate ">Add new</p>
                  </button>
                  {jobs.map((job, index) => {
                    if (
                      searchString &&
                      !job.title
                        .toLowerCase()
                        .includes(searchString.toLowerCase())
                    )
                      return null

                    return (
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
                    )
                  })}
                  {provided.placeholder}

                  {/* <div className="flex items-end justify-end p-2">
                    <button className="text-emerald-500 hover:text-green-600">
                      <PlusCircleIcon className="h-10 w-10" />
                    </button>
                  </div> */}
                </div>
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  )
}
