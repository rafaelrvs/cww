import React from "react";
import Image from "next/image";
import Logo from "@/app/image/logoCWW.png";
import { House,CalendarDays,BriefcaseBusiness } from "lucide-react";

const NavBar = () => {
  return (
    <nav className="w-50 h-dvh">
      <div className="flex justify-center  items-center p-5">
        <Image src={Logo} alt="Logo da Empresa" width={60} height={150} />
        <h1 className="text-[1.5rem]">CWW</h1>
      </div>
      <div className="flex flex-row-reverse justify-between p-2 hover:bg-gray-700  cursor-pointer duration-400 ease-in">
        <p>Home</p>
        <House />
      </div>
      <div className="flex flex-row-reverse justify-between p-2 hover:bg-gray-700  cursor-pointer duration-400 ease-in">
        <p>Calendario</p>
        <CalendarDays />
      </div>
      <div className="flex flex-row-reverse justify-between p-2 hover:bg-gray-700  cursor-pointer duration-400 ease-in">
        <p>CowTratação</p>
        <BriefcaseBusiness />
      </div>

    </nav>
  );
};

export default NavBar;
