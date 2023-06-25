import Board from "@/components/Board";
import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen max-w-screen flex-col justify-between mx-auto  inter">
      <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#eeeeef] to-[#efefef] rounded-md filter blur-2xl opacity-40 -z-50'>
      </div>      {/* Header Component */}
      <Header />


      {/* Board dnd Component */}
      <Board />
      
    </main>
  );
}
