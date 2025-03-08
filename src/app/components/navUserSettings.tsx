"use client";
import React, { useEffect, useRef, useState } from "react";
import { Icons } from "./Icons/Icons";
import Link from "next/link";
import useUserStore from "@/store/userStore";
import { useRouter } from "next/navigation";

const NavUserSettings = () => {
  const [showProfile, setShowProfile] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const { logOut, x_user: user } = useUserStore();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node) &&
        divRef.current &&
        !divRef.current.contains(event.target as Node)
      ) {
        setShowProfile(false); // Close the div
      }
    };

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative group">
      <button
        ref={buttonRef}
        onClick={() => setShowProfile(!showProfile)}
        className="rounded-lg hover:bg-gray-100 dark:hover:bg-gray-400/40 w-8 h-8 transition-all 
              flex justify-center items-center"
      >
        <Icons.user className="w-4 stroke-current stroke-[2px] dark:stroke-gray-100" />
      </button>
      {showProfile && (
        <div
          ref={divRef}
          className="absolute flex flex-col gap-2.5 items-end text-sm p-4 -bottom-28 rounded-xl h-28 left-4 min-w-max bg-white 
                  dark:bg-[#16171a] shadow-[0px_0px_1px_gray] dark:shadow-[0px_0px_1px_#fff]"
        >
          <Link
            href={user?.loggedIn ? `/profile/${user?.username}?menue=true` : "/"}
            className="flex items-center gap-2"
          >
            {user?.loggedIn ? (
              <>
                پروفایل
                <Icons.dashboard className="w-4 stroke-current" />
              </>
            ) : (
              <>
                خانه
                <Icons.home className="w-4 stroke-current" />
              </>
            )}
          </Link>
          <Link href={"/auth/register"} className="flex items-center gap-2">
            ثبت نام
            <Icons.user className="w-4 stroke-current" />
          </Link>
          {user?.loggedIn ? (
            <button
              className="flex items-center gap-2"
              onClick={() => logOut().then(() => router.push("/"))}
            >
              خروج
              <Icons.logout className="w-4 stroke-current" />
            </button>
          ) : (
            <Link
              href={"/auth/login/phone"}
              className="flex items-center gap-2"
            >
              ورود
              <Icons.login className="w-4 stroke-current" />
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default NavUserSettings;
