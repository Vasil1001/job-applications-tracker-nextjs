import { getAllJobsList } from "@/lib/getAllJobsList";
import { getJobsGroupedByColumn } from "@/lib/getJobsGroupedByColumn";
import { Board, Column, TypedColumn } from "@/typings";
import { create } from "zustand";

interface BoardState {
  board: Board;
  getBoard: () => void;
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
  setBoardState: (board: Board) => set({ board }),
  // getJobsList: async () => {
  //   const board = await getAllJobsList();
  //   set({ board });
  // },
}));
