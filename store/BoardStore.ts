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
  // getJobsList: () => void;
}

export const useBoardStore = create<BoardState>((set, get) => ({
  board: {
    columns: new Map<TypedColumn, Column>(),
  },

  getBoard: async () => {
    const board = await getJobsGroupedByColumn();
    set({ board });
  },
  setBoardState: (board) => set({ board }),

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
