import { Icons } from "@/app/components/Icons/Icons";
import { prisma } from "@/lib/db";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import ChangeTheme from "@/app/components/changeTheme";
import LogOut from "@/app/components/logOut";
import Dashboard from "./dashboard";

interface Props {
  params: Promise<{ username: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { username } = await params;
  return {
    title: `Profile of ${username} - ویدیو سبز`,
    description: `This is the profile page for ${username}.`,
  };
};

export default async function Page({ params, searchParams }: Props) {
  const { username } = await params;
  const { tab, menue } = await searchParams;

  let content;
  let menue_is_open;

  // Conditional rendering based on the 'tab' parameter
  switch (tab) {
    case "settings":
      content = <p>settings</p>;
      break;
    case "dashboard":
      content = <Dashboard />;
      break;
    default:
      content = <p>content</p>;
  }

  switch (menue) {
    case "true":
      menue_is_open = true;
      break;
    default:
      menue_is_open = false;
  }

  const user = await prisma.user.findUnique({
    where: {
      UserName: username,
    },
    include: {
      Photo: {
        include: {
          Photo: true,
        },
      },
      Collections: true,
    },
  });

  const handle_tab_select = (
    tabName: "dashboard" | "settings",
    option?: "icon" | "content" | "link"
  ) => {
    if (option == "icon") {
      if (tab === tabName) return "w-6 stroke-teal-500 stroke-2";
      else return "w-6 stroke-gray-500 stroke-2";
    }
    if (option == "content") {
      if (tab === tabName)
        return "text-lg hidden md:flex text-teal-500 font-[500]";
      else
        return "text-lg hidden md:flex text-gray-500 dark:text-gray-400 font-[500]";
    }
    if (option == "link") {
      return `/profile/${user?.UserName}?tab=${tabName}&menue=${
        menue == "true" ? "true" : "false"
      }`;
    }
    return `/profile/${user?.UserName}?tab=${tabName}&menue=${
      menue == "true" ? "true" : "false"
    }`;
  };

  return (
    <div className="maxContainer:max-w-screen-container mx-auto">
      <div className="mx-auto min-h-48 md:rounded-3xl grid grid-cols-12 px-3 my-0 maxContainer:my-14 md:shadow-none maxContainer:shadow-[0px_0px_46px_0px_#86868638]">
        {menue_is_open && (
          <div className="grid md:col-span-3 lg:col-span-2 min-h-48 shadow-[1px_0px_0px_0px_#8080802b] dark:shadow-[1px_0px_0px_0px_#8080805e] py-10 pt-4 px-2 md:px-5 fixed left-0 md:relative bg-white dark:bg-dark">
            <div className="flex items-center gap-3 mb-10 md:px-3">
              <Image
                src="/logo192.png"
                alt="video-sabz"
                width={50}
                height={50}
                className="w-12 hidden md:block md:w-14 aspect-square bg-gray-100 dark:bg-gray-100/30 p-0 rounded-xl"
              />
              <Link
                href={`/profile/${username}?tab=${tab}&menue=${
                  menue == "true" ? "false" : "true"
                }`}
                className="block md:hidden mx-auto"
              >
                <Icons.menu className="w-7" />
              </Link>
              <div className="self-end hidden md:block">
                <p className="text-lg font-bold">ویدیو سبز</p>
                <span className="text-xs hidden md:flex text-gray-400">
                  سرویس پخش و اشتراک ویدئو
                </span>
              </div>
            </div>
            <div className="grid gap-5 mb-10 px-3">
              <Link
                href={handle_tab_select("dashboard")}
                className="flex items-center gap-2 cursor-pointer"
              >
                {tab == "dashboard" && (
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-500"></div>
                )}
                <Icons.dashboard
                  className={handle_tab_select("dashboard", "icon")}
                />
                <span className={handle_tab_select("dashboard", "content")}>
                  Dashboard
                </span>
              </Link>
              <Link
                href={handle_tab_select("settings")}
                className="flex items-center gap-2 cursor-pointer"
              >
                {tab == "settings" && (
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-500"></div>
                )}
                <Icons.grip className={handle_tab_select("settings", "icon")} />
                <span className={handle_tab_select("settings", "content")}>
                  Content
                </span>
              </Link>
              <li className="flex items-center gap-2 cursor-pointer">
                <Icons.addtolist className="w-6 stroke-gray-500 stroke-2 fill-gray-500" />
                <span className="text-lg hidden md:flex text-gray-500 dark:text-gray-400 font-[500]">
                  Saved
                </span>
              </li>
              <li className="flex items-center gap-2 cursor-pointer">
                <Icons.check className="w-6 stroke-gray-500 stroke-2" />
                <span className="text-lg hidden md:flex text-gray-500 dark:text-gray-400 font-[500]">
                  Likes
                </span>
              </li>
              <li className="flex items-center gap-2 cursor-pointer">
                <Icons.comments className="w-6 stroke-gray-500 stroke-2" />
                <span className="text-lg hidden md:flex text-gray-500 dark:text-gray-400 font-[500]">
                  Comments
                </span>
              </li>
              <li className="flex items-center gap-2 cursor-pointer">
                <Icons.share className="w-6 stroke-gray-500 stroke-2" />
                <span className="text-lg hidden md:flex text-gray-500 dark:text-gray-400 font-[500]">
                  Share
                </span>
              </li>
            </div>
            <div className="mt-10 py-5 grid gap-5 px-3 shadow-[0px_-1px_0px_0px_#8080802b] dark:shadow-[0px_-1px_0px_0px_gray]">
              <ChangeTheme />
              <LogOut />
            </div>
          </div>
        )}
        <div
          className={
            menue_is_open
              ? "col-span-12 md:col-span-9 min-h-48 py-2"
              : "col-span-12 md:col-span-12 minh-48 py-2"
          }
        >
          <div className="flex justify-between items-center w-full md:w-3/5 mx-auto gap-5">
            <Link
              href={`/profile/${username}?tab=${tab}&menue=${
                menue == "true" ? "false" : "true"
              }`}
            >
              <Icons.menu className="w-7" />
            </Link>
            <div className="flex items-center w-full rounded-xl bg-gray-100/70 dark:bg-[#292b30] p-1 md:p-1.5 px-5 shadow-[0px_0px_2px_#8080802b]">
              <button className="group rounded-full hover:bg-gray-100 dark:hover:bg-dark w-8 h-8 transition-all flex justify-center items-center">
                <Icons.search className="w-5 stroke-current" />
              </button>
              <input
                type="text"
                placeholder="اینجا سرچ کن..."
                className="rtl bg-transparent w-full focus-visible:outline-none p-1 md:p-1.5 text-sm placeholder:text-gray-400 dark:placeholder:text-gray-300/60 text-gray-300 placeholder:text-xs"
              />
            </div>
            <Image
              src="/assets/tc1.webp"
              alt="video-sabz"
              width={80}
              height={80}
              className="bg-gradient-to-r w-10 from-teal-100 via-teal-400 to-teal-500 rounded-full aspect-square"
            />
          </div>
          <div className="py-2 lg:px-2">{content}</div>
        </div>
      </div>
    </div>
  );
}
