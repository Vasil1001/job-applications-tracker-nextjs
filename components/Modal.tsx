"use client"
import { useState, Fragment, FormEvent } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { useModalStore } from "@/store/ModalStore"
import TaskTypeRadioGroup from "./TaskTypeRadioGroup"
import { useBoardStore } from "@/store/BoardStore"

export default function Modal() {
  const [addJob, newJobInput, setNewJobInput, newJobType] = useBoardStore(
    (state) => [
      state.addJob,
      state.newJobInput,
      state.setNewJobInput,
      state.newJobType,
    ]
  )

  const [isOpen, closeModal] = useModalStore((state) => [
    state.isOpen,
    state.closeModal,
  ])

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!newJobInput) return
    addJob(newJobInput, newJobType)
    closeModal()
  }

  return (
    // Use the `Transition` component at the root level
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="form"
        className="relative z-10 "
        onClose={closeModal}
        onSubmit={handleSubmit}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>
        <div className="fixed inset-0 flex items-center justify-center overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-lg border border-gray-400 bg-white p-5 text-left align-middle shadow-sm transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg leading-6 font-bold text-gray-900 pb-1"
                >
                  Add Job application details
                </Dialog.Title>
                <div className="mt-2 gap-2">
                  <input
                    type="text"
                    className="w-full h-full py-2.5 px-4 mb-4 border shadow-sm focus-visible:outline-none focus-visible:ring-1 focus:ring-gray-400 text-black bg-white border-gray-300 rounded-md hover:border-gray-400 placeholder:text-gray-400 focus:placeholder:text-gray-500"
                    placeholder="Job title"
                    value={newJobInput}
                    onChange={(e) => setNewJobInput(e.target.value)}
                  />
                  <input
                    type="text"
                    className="w-full h-full py-2.5 px-4 mb-4 border shadow-sm focus-visible:outline-none focus-visible:ring-1 focus:ring-gray-400 text-black bg-white border-gray-300 rounded-md hover:border-gray-400 placeholder:text-gray-400 focus:placeholder:text-gray-500"
                    placeholder="Employer"
                  />
                  <input
                    type="text"
                    className="w-full h-full py-2.5 px-4 mb-4 border shadow-sm focus-visible:outline-none focus-visible:ring-1 focus:ring-gray-400 text-black bg-white border-gray-300 rounded-md hover:border-gray-400 placeholder:text-gray-400 focus:placeholder:text-gray-500"
                    placeholder="Job Link"
                  />
                </div>
                <hr />
                <h1 className=" pt-2 font-bold">Select status</h1>
                <TaskTypeRadioGroup />

                <hr />
                <h1 className=" py-2 font-bold">Optional Description</h1>
                <textarea
                  className="w-full h-full py-2.5 px-4 mb-3 border shadow-sm focus-visible:outline-none focus-visible:ring-1 focus:ring-gray-400 text-black bg-white border-gray-300 rounded-md hover:border-gray-400 placeholder:text-gray-400 focus:placeholder:text-gray-500"
                  placeholder="Job Description"
                />
                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={!newJobInput}
                    className="inline-flex justify-center rounded-md border border-transparent bg-black px-4 py-2 text-sm font-medium text-white hover:bg-blue-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:bg-gray-100 disabled:text-gray-300 disabled:cursor-not-allowed"
                  >
                    Add Job
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
