"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Icons } from "./Icons/Icons";

export default function Navbar() {
  const [sideBar, setSideBar] = useState(false);
  const side_bar = useRef<HTMLDivElement>(null);
  const shadowPage = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sideBar) {
      side_bar.current?.classList.remove("-right-64");
      side_bar.current?.classList.add("right-0");

      shadowPage.current?.classList.remove("hidden");
      shadowPage.current?.classList.add("opacity-50");
      shadowPage.current?.classList.remove("opacity-0");
      setTimeout(() => {
        shadowPage.current?.classList.add("block");
      }, 200);
    } else {
      side_bar.current?.classList.add("-right-64");
      side_bar.current?.classList.remove("right-0");

      shadowPage.current?.classList.remove("block");
      shadowPage.current?.classList.remove("opacity-50");
      shadowPage.current?.classList.add("opacity-0");
      setTimeout(() => {
        shadowPage.current?.classList.add("hidden");
      }, 200);
    }
  }, [sideBar]);

  return (
    <>
      <div className="nav-bar absolute top-0 right-0 left-0 max-w-screen-container mx-auto border-grid z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="h-14 max-w-[1536px] mx-auto flex justify-between items-center px-5 2xl:px-0">
          <div className="inline-flex gap-2">
            <button
              className="rounded-full hover:bg-gray-100 w-8 h-8 transition-all 
            flex justify-center items-center"
            >
              <Icons.user className="w-4" />
            </button>
            <button
              className="rounded-full hover:bg-gray-100 w-8 h-8 transition-all 
            flex justify-center items-center"
            >
              <Icons.moon className="w-4" />
            </button>
          </div>
          <div className="relative hidden sm:block w-[248px] md:w-[373px] lg:w-[528px]">
            <input
              className="rtl w-full rounded-xl bg-gray-100/50 px-5 py-3 focus-visible:outline-none text-sm text-gray-500"
              placeholder="جستجوی ویدئو در سایت"
            />
            <button
              className="absolute left-1.5 top-1.5 rounded-full hover:bg-gray-100 w-8 h-8 transition-all 
            flex justify-center items-center"
            >
              <Icons.search className="w-4 rounded-full" />
            </button>
          </div>
          <div className="flex gap-3 text-sm text-gray-500 justify-center items-center">
            <span className="hidden md:block min-w-max">درباره ما</span>
            <span className="hidden md:block min-w-max">تازه ها</span>
            <span className="hidden md:block min-w-max">مجله دکتر سبز</span>
            <span className="hidden md:block min-w-max">خانه</span>
            <button
              onClick={() => setSideBar(!sideBar)}
              className="rounded-full hover:bg-gray-100 w-8 h-8 transition-all 
            flex justify-center items-center"
            >
              <Icons.grip className="w-4" />
              {/* <Icons.menu className="w-4 block md:hidden" /> */}
            </button>
          </div>
        </div>
      </div>
      <div
        ref={side_bar}
        className="fixed top-14 h-full flex flex-col rtl w-60 p-5 gap-5 bg-white md:hidden z-20 -right-64 ring-1 ring-gray-100 transition-all duration-500"
      >
        <button onClick={() => setSideBar(!sideBar)}></button>
        <Link href={"/"}>خانه</Link>
        <Link href={"/blog/blog_name"}>مجله دکتر سبز</Link>
        <Link
          href={"/product/product_name"}
          className="flex justify-start items-center gap-1"
        >
          <span>دوره ها</span>
        </Link>
      </div>

      <div
        ref={shadowPage}
        onClick={() => setSideBar(!sideBar)}
        className="absolute hidden top-14 right-0 w-full h-full bg-black z-10 transition-opacity"
      ></div>
    </>
  );
}
