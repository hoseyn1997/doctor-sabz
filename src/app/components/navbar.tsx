"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Icons } from "./Icons/Icons";
import { useTheme } from "next-themes";
import NavUserSettings from "./navUserSettings";

export default function Navbar() {
  const [sideBar, setSideBar] = useState(false);
  const side_bar = useRef<HTMLDivElement>(null);
  const shadowPage = useRef<HTMLDivElement>(null);
  const { theme, setTheme } = useTheme();

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
      <div
        className="nav-bar fixed top-0 right-0 left-0 mx-auto z-50 w-full bg-background/95 backdrop-blur 
        supports-[backdrop-filter]:bg-background/60 bg-white dark:bg-[#16171a]"
      >
        <div className="h-16 max-w-[1536px] mx-auto flex justify-between items-center px-3 md:px-9">
          <div className="inline-flex gap-1 xl:w-64 ">
            <NavUserSettings />
            <button
              onClick={() =>
                theme == "dark" ? setTheme("light") : setTheme("dark")
              }
              className="rounded-lg hover:bg-gray-100 dark:hover:bg-gray-400/40 w-8 h-8 transition-all 
            flex justify-center items-center"
            >
              <Icons.moon className="w-4 stroke-current stroke-[2px] dark:stroke-gray-100" />
            </button>
          </div>
          <div className="relative hidden sm:block w-[248px] md:w-[373px] lg:w-[528px]">
            <input
              className="rtl w-full rounded-xl bg-gray-100/70 dark:bg-[#292b30] dark:hover:shadow-[0px_0px_2px_0px_#fff] px-5 py-3 
              focus-visible:outline-none hover:shadow-[0px_0px_2px_0px_gray] text-sm text-gray-500 transition-all"
              placeholder="جستجوی ویدئو در سایت"
            />
            <button
              className="absolute left-1 top-1.5 group rounded-full hover:bg-gray-100 dark:hover:bg-[#16171a] w-8 h-8 transition-all 
            flex justify-center items-center"
            >
              <Icons.search className="w-4 rounded-full stroke-current dark:group-hover:stroke-gray-100" />
            </button>
          </div>
          <div className="flex gap-3 text-sm text-gray-500 dark:text-gray-100 justify-center items-center">
            <Link href={"/about"} className="hidden md:block min-w-max">
              درباره ما
            </Link>
            <Link href={"/"} className="hidden md:block min-w-max">
              تازه ها
            </Link>
            <Link href={""} className="hidden md:block min-w-max">
              مجله ویدیو سبز
            </Link>
            <Link href={"/"} className="hidden md:block min-w-max">
              خانه
            </Link>
            <button
              onClick={() => setSideBar(!sideBar)}
              className="rounded-lg hover:bg-gray-100 dark:hover:bg-gray-400/40 w-8 h-8 transition-all 
            flex justify-center items-center"
            >
              <Icons.grip className="w-4 stroke-current dark:stroke-gray-100" />
            </button>
          </div>
        </div>
      </div>
      <div
        ref={side_bar}
        className="fixed top-14 h-full flex flex-col rtl w-60 p-5 bg-white dark:bg-[#16171a] md:hidden z-20 -right-64 transition-all duration-500"
      >
        <button onClick={() => setSideBar(!sideBar)}></button>
        <Link href={"/"} className="flex gap-3 items-center p-3">
          <Icons.home className="stroke-current w-5" />
          خانه
        </Link>
        <Link href={"/blog/blog_name"} className="flex gap-3 items-center p-3">
          <Icons.news className="stroke-current w-5" />
          مجله ویدیو سبز
        </Link>
        <Link
          href={"/product/product_name"}
          className="flex gap-3 items-center p-3"
        >
          <Icons.bell className="stroke-current w-5" />
          <span>تازه ها</span>
        </Link>
        <Link
          href={"/product/product_name"}
          className="flex gap-3 items-center p-3"
        >
          <Icons.shield_question className="stroke-current w-5" />
          <span>درباره ما</span>
        </Link>
      </div>

      <div
        ref={shadowPage}
        onClick={() => setSideBar(!sideBar)}
        className="absolute hidden md:hidden top-14 right-0 w-full h-full bg-black z-10 transition-opacity"
      ></div>
    </>
  );
}
