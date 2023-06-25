import Board from "@/components/Board";
import Dashboard from "@/components/Dashboard";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen max-w-screen flex-col justify-between mx-auto  inter">
      {/* Dashboard Component */}
      <Dashboard />

    </main>
  );
}
