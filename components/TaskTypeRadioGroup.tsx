"use client";
import { useBoardStore } from "@/store/BoardStore";
import { RadioGroup } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import React from "react";

const types = [
  {
    id: "Applied",
    name: "Applied",
    description: "A job has been applied to",
    color: "bg-red-500",
  },
  {
    id: "Interviewing",
    name: "Interviewing",
    description: "In the process of interviewing for this position",
    color: "bg-yellow-500",
  },
  {
    id: "Rejected",
    name: "Rejected",
    description: "Rejected from position",
    color: "bg-green-500",
  },
];
export default function JobTypeRadioGroup() {
  const [setNewJobType, newJobType] = useBoardStore((state) => [
    state.setNewJobType,
    state.newJobType,
  ]);
  return (
    <div className="w-full py-5">
      <div className="mx-auto w-full max-w-md">
        <RadioGroup
          value={newJobType}
          onChange={(e) => {
            setNewJobType(e);
          }}
        >
          <div className="space-y-2">
            {types.map((type) => (
              <RadioGroup.Option
                key={type.id}
                value={type.id}
                className={({ active, checked }) => `
                    ${
                      active
                        ? "ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300"
                        : ""
                    }
                    ${
                      checked
                        ? `${type.color} bg-opacity-75 text-white`
                        : "bg-white"
                    }
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none
                    `}
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center">
                        <div className="text-sm">
                          <RadioGroup.Label
                            as="p"
                            className={`font-medium ${
                              checked ? "text-white" : "text-gray-900"
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
  );
}