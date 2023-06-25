import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      {/* Header Component */}
    <Header/>

      {/* Board dnd Component */}
      <h1>
        Job Application tracker + shadcn + zustand + dnd + TanStack Table +
        Appwrite Cloud + TypeScript
      </h1>
    </main>
  );
}
