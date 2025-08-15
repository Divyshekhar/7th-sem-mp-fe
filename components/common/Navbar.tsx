"use client";
import NavLink from "next/link";
import { FileText } from "lucide-react";
import { useUser } from "@/app/[context]/UserContext";

export default function Header() {
  const user = useUser();

  return (
    <div className="bg-gradient-to-br from-emerald-300 via-green-370 to-teal-300">
    <nav className="container flex items-center justify-between py-4 lg:px-8 px-2 mx-auto ">
      <div className="flex lg:flex-1">
        <NavLink href="/" className="flex items-center gap-1">
          <FileText className="w-5 h-5 lg:w-8 lg:h-8 text-gray-900 hover:rotate-12 transform transition duration-200 ease-in-out" />
          <span className="font-extrabold lg:text-xl text-gray-900">Questify</span>
        </NavLink>
      </div>

      {!user ? (
        <div className="flex justify-center gap-4 lg:gap-12 items-center border-2 p-3 shadow-xl rounded-2xl transition-transform duration-200 hover:scale-105">
          <NavLink href="/dashboard">
            <span className="text-[14px]">
                Your Questions
              </span>
            </NavLink>
        </div>
      ) : (
        <div className="pt-1">
         <NavLink href="/login"> Sign In </NavLink>
        </div>
      )}
    </nav>
    </div>
  );
}
