"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Icons } from "./Icons/Icons";

export default function Navbar2() {
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
      <header className="flex justify-between items-center absolute top-0 w-full h-16 bg-white px-5 font-thin text-gray-600">
        <div className="flex gap-1 min-w-max justify-center items-center">
          <button className="text-xs">ثبت نام/ورود</button>
          <Icons.Profile className="w-7" fill="#4ade80" />
        </div>
        <div className="justify-center items-center gap-5 hidden md:flex">
          <Link
            href={"/product/product_name"}
            className="flex justify-center items-center gap-1"
          >
            <Icons.ArrownDown className="w-5 bg-gray-50 rounded-full" />
            <span>دوره ها</span>
          </Link>
          <Link href={"/blog/blog_name"}>مجله دکتر سبز</Link>
          <Link href={"/"}>خانه</Link>
          <div className="group flex justify-center items-center gap-1">
            <input
              type="text"
              className="w-0 group-hover:w-48 transition-all duration-500 focus-visible:outline-none group-hover:ring-1 group-hover:p-1 group-hover:px-3 text-sm text-gray-500 ring-gray-200 rounded-l-full"
            />
            <button className="flex justify-center items-center">
              <Icons.Search className="ring-1 ring-green-200 p-1 w-7 rounded-full group-hover:rounded-r-full group-hover:rounded-l-none scale-110" />
            </button>
          </div>
        </div>
        <button
          onClick={() => setSideBar(!sideBar)}
          className="block md:hidden"
        >
          <Icons.Burder className="w-7" />
        </button>
      </header>
      <div
        ref={side_bar}
        className="fixed top-0 h-full flex flex-col rtl w-60 p-5 gap-5 bg-white md:hidden z-20 -right-64 ring-1 ring-gray-100 transition-all duration-500"
      >
        <button onClick={() => setSideBar(!sideBar)}>
          <Icons.Burder className="w-7" />
        </button>
        <Link href={"/"}>خانه</Link>
        <Link href={"/blog/blog_name"}>مجله دکتر سبز</Link>
        <Link
          href={"/product/product_name"}
          className="flex justify-start items-center gap-1"
        >
          <Icons.ArrownDown className="w-5 bg-gray-50 rounded-full" />
          <span>دوره ها</span>
        </Link>
      </div>
      {/* {sideBar && ( */}
      <div
        ref={shadowPage}
        onClick={() => setSideBar(!sideBar)}
        className="absolute hidden top-0 right-0 w-full h-full bg-[#00000069] z-10 transition-opacity"
      ></div>
      {/* )} */}
    </>
  );
}
