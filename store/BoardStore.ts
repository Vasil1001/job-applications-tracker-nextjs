import { databases } from "@/appwrite";
import { getAllJobsList } from "@/lib/getAllJobsList";
import { getJobsGroupedByColumn } from "@/lib/getJobsGroupedByColumn";
import { Board, Column, TypedColumn, Job } from "@/typings";
import { create } from "zustand";

interface BoardState {
  board: Board;
  getBoard: () => void;
  setBoardState: (board: Board) => void;
  updateJobInDB: (job: Job, columnId: TypedColumn) => void;

  newJobInput: string;
  setNewJobInput: (newJobInput: string) => void;

  newJobType: string;
  setNewJobType: (columnId: TypedColumn) => void;

  deleteJob: (jobIndex: number, jobId: Job, id: TypedColumn) => void;
  // getJobsList: () => void;
  searchString: string;
  setSearchString: (searchString: string) => void;
}

export const useBoardStore = create<BoardState>((set, get) => ({
  board: {
    columns: new Map<TypedColumn, Column>(),
  },

  searchString: "",
  setSearchString: (searchString) => set({ searchString }),

  newJobInput: "",
  setNewJobInput: (newJobInput) => set({ newJobInput }),

  newJobType: "Applied",
  setNewJobType: (newJobType) => set({ newJobType }),

  getBoard: async () => {
    const board = await getJobsGroupedByColumn();
    set({ board });
  },
  setBoardState: (board) => set({ board }),

  deleteJob: async (jobIndex: number, job: Job, id: TypedColumn) => {
    const newColumns = new Map(get().board.columns);
    // ? Delete Job id from newCol
    newColumns.get(id)?.jobs.splice(jobIndex, 1);

    set({ board: { columns: newColumns } });

    await databases.deleteDocument(
      process.env.NEXT_PUBLIC_DATABASE_ID!,
      process.env.NEXT_PUBLIC_JOBS_COLLECTION_ID!,
      job.$id
    );
  },
  updateJobInDB: async (job, columnId) => {
    await databases.updateDocument(
      process.env.NEXT_PUBLIC_DATABASE_ID!,
      process.env.NEXT_PUBLIC_JOBS_COLLECTION_ID!,
      job.$id,
      {
        title: job.title,
        status: columnId,
      }
    );
  },
  // getJobsList: async () => {
  //   const board = await getAllJobsList();
  //   set({ board });
  // },
}));
