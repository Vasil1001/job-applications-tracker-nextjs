import Board from "@/components/Board";
import Header from "@/components/Header";
import Image from "next/image";
import { DragDropContext } from 'react-beautiful-dnd';

export default function Home() {
  return (
    <main className="flex min-h-screen max-w-screen flex-col justify-between mx-auto ">
      {/* Header Component */}
      <Header />


      {/* Board dnd Component */}
      <Board />
    </main>
  );
}
