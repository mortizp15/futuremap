import { MenuNav } from "@/components/manunav";
import Link from "next/link";

export default function Home() {
  return (
    <main className="absolute top-0 z-[-2] h-screen w-screen bg-white ">
      <MenuNav />
    </main>
  );
}
