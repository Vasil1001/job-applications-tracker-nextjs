"use client"
import { useBoardStore } from "@/store/BoardStore"
import { RadioGroup } from "@headlessui/react"
import { CheckCircleIcon } from "@heroicons/react/24/solid"
import React from "react"

const types = [
  {
    id: "Applied",
    name: "Applied",
    description: "I have applied for this position",
    color: "bg-green-500",
  },
  {
    id: "Interviewing",
    name: "Interviewing",
    description: "In the process of interviewing for this position",
    color: "bg-blue-500",
  },
  {
    id: "Rejected",
    name: "Rejected",
    description: "Was not selected for position",
    color: "bg-red-500",
  },
]
export default function JobTypeRadioGroup() {
  const [setNewJobType, newJobType] = useBoardStore((state) => [
    state.setNewJobType,
    state.newJobType,
  ])

  return (
    <div className="w-full pb-5 pt-2">
      <div className="mx-auto w-full max-w-md ">
        <RadioGroup
          value={newJobType}
          onChange={(e) => {
            setNewJobType(e)
          }}
        >
          <div className="space-y-4">
            {types.map((type) => (
              <RadioGroup.Option
                key={type.id}
                value={type.id}
                className={({ active, checked }) => `
                    ${
                      active
                        ? "ring ring-white ring-opacity-60 ring-offset-2 ring-offset-black"
                        : ""
                    }
                    ${
                      checked
                        ? `${type.color}   bg-opacity-75 ring ring-white ring-offset-2 ring-offset-black text-white`
                        : "bg-white border border-gray-200 "
                    }
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md drop-shadow-sm focus:outline-none
                    `}
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center">
                        <div className="text-sm">
                          <RadioGroup.Label
                            as="p"
                            className={`font-bold  ${
                              checked
                                ? "text-white font-extrabold"
                                : "text-gray-900"
                            }`}
                          >
                            {type.name}
                          </RadioGroup.Label>
                          <RadioGroup.Description
                            as="span"
                            className={`inline ${
                              checked ? "text-white" : "text-gray-500"
                            }`}
                          >
                            <span>{type.description}</span>
                          </RadioGroup.Description>
                        </div>
                      </div>
                      {checked && (
                        <div className="shrink-0 text-white">
                          <CheckCircleIcon className="h-6 w-6" />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  )
}
