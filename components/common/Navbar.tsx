"use client";
import NavLink from "next/link";
import { FileText } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Header() {
  const [signedIn, setSignedIn] = useState(false);
  const router = useRouter();

  return (
    <div className="bg-gradient-to-br from-emerald-300 via-green-370 to-teal-300">
    <nav className="container flex items-center justify-between py-4 lg:px-8 px-2 mx-auto ">
      <div className="flex lg:flex-1">
        <NavLink href="/" className="flex items-center gap-1">
          <FileText className="w-5 h-5 lg:w-8 lg:h-8 text-gray-900 hover:rotate-12 transform transition duration-200 ease-in-out" />
          <span className="font-extrabold lg:text-xl text-gray-900">Questify</span>
        </NavLink>
      </div>

      {signedIn ? (
        <div className="flex justify-center gap-4 lg:gap-12 items-center">
          <NavLink href="/dashboard">Your Questions</NavLink>
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
