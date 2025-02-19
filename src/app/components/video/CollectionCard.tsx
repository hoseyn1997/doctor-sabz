"use client";
import React, { useState } from "react";
import { Icons } from "../Icons/Icons";
import Image from "next/image";
import Link from "next/link";

interface Props {
  photo: string;
  title: string;
  teacher_photo: string;
  teacher: string;
  seen_count: string;
  days_ago: string;
}

const CollectionCard = (props: Props) => {
  const [collectionOptions, setCollectionOptions] = useState(false);
  return (
    <div
      className="grid gap-1 group rtl w-full rounded-xl transition-all cursor-pointer 
        justify-self-center hover:bg-gray-50/60 dark:hover:bg-gray-50/5 p-2"
    >
      <Image
        src={props.photo}
        alt={props.title}
        width={320}
        height={170}
        style={{ height: "auto" }}
        className="w-full rounded-xl sm:max-h-40 lg:max-h-44 object-cover aspect-video"
      />
      <div className="grid grid-cols-10 items-center group relative">
        <p className="col-span-9 Just2Rows">{props.title}</p>
        <button
          onClick={() => setCollectionOptions(!collectionOptions)}
          onBlur={() => setCollectionOptions(false)}
          className="col-span-1"
        >
          <Icons.vertical_dots className="block lg:hidden lg:group-hover:block w-5 stroke-black dark:stroke-slate-50 justify-self-end" />
        </button>
        {collectionOptions && (
          <ul
            className="absolute flex flex-col gap-2.5 items-end text-sm p-3 py-4 -bottom-24 rounded-xl h-28 left-4 min-w-max bg-white 
          dark:bg-[#16171a] shadow-[0px_0px_1px_gray] dark:shadow-[0px_0px_1px_#fff] ltr"
          >
            <Link
              onClick={() => setCollectionOptions(true)}
              href={"/"}
              className="flex items-center gap-2"
            >
              <span className="rtl">بعدا ببین</span>
              <Icons.clock className="w-4" />
            </Link>
            <Link href={"/"} className="flex items-center gap-2">
              <span className="rtl">اشتراک گذاری</span>
              <Icons.share className="w-4" />
            </Link>
            <Link href={"/"} className="flex items-center gap-2">
              <span className="rtl">ذخیره در لیست</span>
              <Icons.addtolist className="w-4" />
            </Link>
          </ul>
        )}
      </div>
      <div className="flex items-center gap-2 text-[10px]">
        <Image
          src={props.teacher_photo}
          alt={props.teacher}
          width={22}
          height={22}
          style={{ height: "auto" }}
          className="rounded-full"
        />
        <span className="text-gray-500 hover:text-gray-200">
          {props.teacher}
        </span>
        <Icons.check className="w-3 bg-blue-400 rounded-full stroke-white p-0.5" />
      </div>
      <div className="flex gap-2 items-center text-[10px] text-gray-300 mx-0.5">
        <span>{props.seen_count + " هزار بازدید"}</span>
        <span>{props.days_ago + " روز پیش"}</span>
      </div>
    </div>
  );
};

export default CollectionCard;
