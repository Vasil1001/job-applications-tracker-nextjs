"use client";
import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useModalStore } from "@/store/ModalStore";
import TaskTypeRadioGroup from "./TaskTypeRadioGroup";

export default function Modal() {
  const [isOpen, closeModal] = useModalStore((state) => [
    state.isOpen,
    state.closeModal,
  ]);
  return (
    // Use the `Transition` component at the root level
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="form" className="relative z-10 " onClose={closeModal}>
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
                <TaskTypeRadioGroup />

                {/* <div className="mt-2">
                  <button
                    type="button"
                    onClick={() => {
                      imagePickerRef.current?.click();
                    }}
                    className="w-full border border-gray-300 rounded-md outline-none p-5 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  >
                    <PhotoIcon className="h-6 w-6 mr-2 inline-block" />
                    Upload Image
                  </button>
                  {image && (
                    <Image
                      alt="Uploaded Image"
                      width={200}
                      height={200}
                      className="w-full h-44 object-cover mt-2 filter hover:grayscale transition-all duration-150 cursor-not-allowed"
                      src={URL.createObjectURL(image)}
                      onClick={() => {
                        setImage(null);
                      }}
                    />
                  )}
                  <input
                    type="file"
                    ref={imagePickerRef}
                    hidden
                    onChange={(e) => {
                      if (!e.target.files![0].type.startsWith("image/")) return;
                      setImage(e.target.files![0]);
                    }}
                  />
                </div> */}
                <div className="mt-4n">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:bg-gray-100 disabled:text-gray-300 disabled:cursor-not-allowed"
                  >
                    Add Job Application
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}