"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import Image from "next/image";
import { Icons } from "../ui/icons/Icons";
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
      <div className="nav-bar fixed top-0 right-0 left-0 mx-auto z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 bg-white dark:bg-dark shadow-[0px_1px_0px_0px_#8080802b] dark:shadow-[0px_1px_0px_0px_#8080805e]">
        <div className="h-16 max-w-[1536px] mx-auto flex justify-between items-center px-3 md:px-9">
          <div className="inline-flex gap-1 xl:w-64 ">
            <NavUserSettings />
            <button
              onClick={() =>
                theme == "dark" ? setTheme("light") : setTheme("dark")
              }
              className="rounded-lg hover:bg-gray-100 dark:hover:bg-gray-400/40 w-8 h-8 transition-all flex justify-center items-center"
            >
              <Icons.moon className="w-4 stroke-current stroke-[2px] dark:stroke-gray-100" />
            </button>
          </div>
          <div className="relative hidden lg:block w-[248px] md:w-[300px] lg:w-[490px]">
            <input
              className="rtl w-full rounded-xl bg-gray-100/70 dark:bg-[#292b30] dark:hover:shadow-[0px_0px_2px_0px_#fff] px-5 py-3 focus-visible:outline-none hover:shadow-[0px_0px_2px_0px_gray] text-sm text-gray-500 transition-all"
              placeholder="جستجوی ویدئو در سایت"
            />
            <button className="absolute left-1 top-1.5 group rounded-full hover:bg-gray-100 dark:hover:bg-dark w-8 h-8 transition-all flex justify-center items-center">
              <Icons.search className="w-4 rounded-full stroke-current dark:group-hover:stroke-gray-100" />
            </button>
          </div>
          <div className="flex gap-3 text-sm text-gray-500 dark:text-gray-100 justify-center items-center">
            <Link
              href={"/feedback"}
              className="flex items-center gap-1 bg-red-50 dark:bg-black dark:text-gray-50 p-2 rounded-full dark:shadow-[0px_0px_0.5px_0.5px_gray] text-xs"
            >
              <span>نظرت رو بگو</span>
              <Icons.rocket className="stroke-red-500 w-4 animate-pulse" />
            </Link>
            <Link href={"/about"} className="hidden md:block min-w-max">
              درباره ما
            </Link>
            <Link href={"/news"} className="hidden md:block min-w-max">
              تازه ها
            </Link>
            <Link href={"/blog"} className="hidden md:block min-w-max">
              مجله ویدیو سبز
            </Link>
            <Link href={"/"} className="hidden md:block min-w-max">
              خانه
            </Link>
            <button
              onClick={() => setSideBar(!sideBar)}
              className="rounded-lg hover:bg-gray-100 dark:hover:bg-gray-400/40 w-8 h-8 transition-all flex justify-center items-center"
            >
              <Image
                className="float-right w-10 scale-150 rounded-full hidden md:block"
                src="/logo192.png"
                alt="myIcon"
                width={40}
                height={40}
                priority
              />
              <Icons.grip className="w-4 stroke-current dark:stroke-gray-100 md:hidden" />
            </button>
          </div>
        </div>
      </div>
      <div
        ref={side_bar}
        className="fixed top-16 h-full flex flex-col rtl px-3 py-5 bg-white dark:bg-dark md:hidden z-30 -right-64 transition-all duration-500"
      >
        <button onClick={() => setSideBar(!sideBar)}></button>
        <Link
          href={"/"}
          onClick={() => setSideBar(false)}
          className="rounded-lg hover:bg-gray-100 dark:hover:bg-gray-400/40 w-16 h-16 transition-all flex flex-col gap-2 justify-center items-center text-center"
        >
          <Icons.home className="w-7 stroke-gray-500 stroke-2" />
          <span className="text-[10px] leading-3 text-gray-500">خانه</span>
        </Link>
        <Link
          href={"/blog"}
          onClick={() => setSideBar(false)}
          className="rounded-lg hover:bg-gray-100 dark:hover:bg-gray-400/40 w-16 h-16 transition-all flex flex-col gap-2 justify-center items-center text-center"
        >
          <Icons.clapperboard className="w-7 stroke-gray-500 stroke-2" />
          <span className="text-[10px] leading-3 text-gray-500">
            مجله ویدیو سبز
          </span>
        </Link>
        <Link
          href={"/news"}
          onClick={() => setSideBar(false)}
          className="rounded-lg hover:bg-gray-100 dark:hover:bg-gray-400/40 w-16 h-16 transition-all flex flex-col gap-2 justify-center items-center text-center"
        >
          <Icons.bell className="w-7 stroke-gray-500 stroke-2" />
          <span className="text-[10px] leading-3 text-gray-500">تازه ها</span>
        </Link>
        <Link
          href={"/about"}
          onClick={() => setSideBar(false)}
          className="rounded-lg hover:bg-gray-100 dark:hover:bg-gray-400/40 w-16 h-16 transition-all flex flex-col gap-2 justify-center items-center text-center"
        >
          <Icons.shield_question className="w-7 stroke-gray-500 stroke-2" />
          <span className="text-[10px] leading-3 text-gray-500">درباره ما</span>
        </Link>
      </div>
      <div
        ref={shadowPage}
        onClick={() => setSideBar(!sideBar)}
        className="fixed hidden md:hidden top-16 right-0 w-full h-full bg-black z-20 transition-opacity"
      ></div>
    </>
  );
}
