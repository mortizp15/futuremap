
import Link from "next/link";
import { IoPlanetSharp } from "react-icons/io5";

export const MenuNav = () => {
  return (
  <nav className="flex items-center w-full px-10 py-8 justify-between">
    <Link href="/" className="flex gap-3">
      <IoPlanetSharp className="text-[#0E70FF] text-xl"/><p className="font-bold text-xl text-[#333]">FutureMap</p>
    </Link>
    <Link href="#">
      <p className="text-[#333]">About</p>
    </Link>
  </nav>
  )
};
