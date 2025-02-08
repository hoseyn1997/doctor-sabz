"use client";
import { useEffect } from "react";
import { Icons } from "./common/Icons/Icons";
import Link from "next/link";

export default function Navbar() {
  useEffect(() => {
    console.log(window.screen.width);
  }, []);
  return (
    <header className="hidden lg:flex absolute top-0 max-w-screen-container mx-auto left-0 right-0 h-[72px] justify-between items-center px-3">
      <div className="flex items-center gap-1 justify-center">
        <Icons.Logo className="w-10 h-8" />
        <p className="text-green-400 font-bold text-2xl">Dr-Sabz</p>
      </div>
      <div className="flex justify-center items-center h-[72px] text-[16px]">
        <Link
          href="/"
          className="text-orange-400 bg-gray-100 h-[72px] justify-self-center flex justify-center items-center px-5"
        >
          Home
        </Link>
        <Link
          href={"/product/product_name"}
          className="h-[72px] px-5 flex justify-center items-center"
        >
          Courses
        </Link>
        <Link
          href={"/blog/blog_name"}
          className="h-[72px] px-5 flex justify-center items-center"
        >
          Blog
        </Link>
        <Link
          href={"/"}
          className="flex justify-center items-center h-[72px] px-5"
        >
          <span>Page</span>
          <Icons.ArrownDown className="w-4 h-4" />
        </Link>
        <Link
          href={"/"}
          className="h-[72px] px-5 flex justify-center items-center"
        >
          LearnPress Add-On
        </Link>
        <Link
          href={"/"}
          className="h-[72px] px-5 flex justify-center items-center"
        >
          Premium Theme
        </Link>
      </div>
      <div className="flex items-center justify-center gap-5 text-[16px]">
        <span>Login / Register</span>
        <Icons.Search className="w-10 h-10 ring-2 p-2 rounded-full ring-green-400" />
      </div>
    </header>
  );
}
