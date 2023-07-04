import { databases } from "@/appwrite"
import { getAllJobsList } from "@/lib/getAllJobsList"
import { getJobsGroupedByColumn } from "@/lib/getJobsGroupedByColumn"
import { Board, Column, TypedColumn, Job } from "@/typings"
import { ID } from "appwrite"
import { create } from "zustand"

interface JobsState {
  job: Job
  getJobsList: () => void
  setJobsState: (job: Job) => void

  // getBoard: () => void
  // setBoardState: (board: Board) => void

  // newJobInput: string
  // setNewJobInput: (newJobInput: string) => void

  // newJobType: TypedColumn
  // setNewJobType: (columnId: TypedColumn) => void

  // addJob: (job: string, columnId: TypedColumn) => void
  // deleteJob: (jobIndex: number, jobId: Job, id: TypedColumn) => void
  // updateJobInDB: (job: Job, columnId: TypedColumn) => void

  // searchString: string
  // setSearchString: (searchString: string) => void
}

export const useJobStore = create<JobsState>((set, get) => ({
  job: {
    $id: "",
    $createdAt: "",
    title: "",
    status: "Applied",
    url: "",
    description: "",
    employer: "",
  },
  // searchString: "",
  // setSearchString: (searchString) => set({ searchString }),

  // newJobInput: "",
  // setNewJobInput: (newJobInput) => set({ newJobInput }),

  // newJobType: "Applied",
  // setNewJobType: (newJobType) => set({ newJobType }),

  getJobsList: async () => {
    const job = await getAllJobsList()
    return job
  },
  setJobsState: (job) => set({ job }),
}))
