import { databases } from "@/appwrite"
import { getAllJobsList } from "@/lib/getAllJobsList"
import { useJobStore } from "@/store/JobsListStore"
import { Job } from "@/typings"
import React, { useEffect, useState } from "react"
import {BsFileText} from "react-icons/bs"
import {AiOutlineNumber} from "react-icons/ai"

type Props = {}

export default function JobsList({}: Props) {
  const [job, getJobsList, setJobsState] = useJobStore((state) => [
    state.job,
    state.getJobsList,
    state.setJobsState,
  ])
  const [list, setList] = useState<any>([])

  const getAllJobsListLocal = async () => {
    const data = await databases.listDocuments(
      process.env.NEXT_PUBLIC_DATABASE_ID!,
      process.env.NEXT_PUBLIC_JOBS_COLLECTION_ID!
    )
    const jobs = data.documents
    console.log("TABLE OF ALL JOBSee:", jobs)
    setList(jobs)
    return jobs
  }

  const colorVariants: any = {
    Applied: "rounded-md px-2 text-white bg-amber-500 font-medium",
    Interviewing: "rounded-md px-2 text-white bg-blue-500 font-medium ",
    Rejected: "rounded-md px-2 text-white bg-red-500 font-medium",
  }

  useEffect(() => {
    getAllJobsListLocal()
    // console.log("TABLE OF ALL JOBS:", getJobsList())
  }, [getJobsList])

  return (
    <div className="min-w-full flex flex-col flex-1">
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="rounded-lg border shadow-sm overflow-hidden">
              <table className="min-w-full  rounded-lg text-left text-sm font-light">
                <thead className="  font-medium bg-zinc-50 dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="flex justify-center px-3 py-4">
                      <AiOutlineNumber/>
                    </th>
                    <th scope="col" className="px-4 py-4">
                      Job Title
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Employer
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {list.map((job: any, index: number) => (
                    <tr
                      key={index}
                      className="border-y dark:border-neutral-500 hover:bg-zinc-100"
                    >
                  <td className="flex bg-zinc-50 justify-center whitespace-nowrap px-3 py-2.5 align-center font-medium">
                        {index + 1}
                      </td>
                      <td
                        className={`${job.url ? "cursor-pointer underline " : ""} 
                        whitespace-nowrap font-medium px-6 py-2.5 border-l`}
                      >
                        {job.url ? (<div className = "flex gap-1 align-center"><BsFileText size={18}/> {job.title}  </div>): job.title}
                      </td>
                      <td className="whitespace-nowrap px-6 py-2.5 ">
                        {job.employer}
                      </td>
                      <td
                        className={`whitespace-nowrap flex justify-center px-4 `}
                      >
                        <span
                          className={`${
                            colorVariants[job.status]
                          } flex justify-center whitespace-nowrap px-2 py-0.5 text-xs  `}
                        >
                          {job.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* asd */}
    </div>
  )
}
