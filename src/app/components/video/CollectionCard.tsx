"use client";
import React, { useState } from "react";
import { Icons } from "../Icons/Icons";
import Image from "next/image";
import Link from "next/link";
import Preview from "./Preview";

interface Props {
  photo: string;
  title: string;
  teacher_photo: string;
  teacher: string;
  seen_count: string;
  days_ago: string;
  isfree?: boolean;
}

const CollectionCard = (props: Props) => {
  const [collectionOptions, setCollectionOptions] = useState(false);
  const [preview, setPreview] = useState(false);

  const [playingPreview, setPlayingPreview] = useState(false);

  return (
    <div
      // onMouseOver={() => setPreview(true)}
      // onMouseLeave={() => setPreview(false)}
      className="relative grid gap-1 group rtl w-full rounded-xl transition-all cursor-pointer 
        justify-self-center hover:bg-gray-50/60 dark:hover:bg-gray-50/0 p-2"
    >
      <Image
        src={props.photo}
        alt={props.title}
        width={320}
        height={170}
        style={{ height: "auto" }}
        priority
        className="w-full rounded-xl sm:max-h-40 lg:max-h-44 object-cover aspect-video"
        // onTouchStart={() => setPreview(true)}
        // onTouchEnd={() => setPreview(false)}
        onContextMenu={(e) => e.preventDefault()}
      />
      {preview && playingPreview && (
        <Preview
          videoId="preview3"
          className="absolute top-1 right-1 left-1 mx-auto rounded-xl p-1"
          collectionPhoto={props.photo}
        />
      )}
      {playingPreview ? (
        <button
          onClick={() => {
            setPreview(false);
            setPlayingPreview(false);
          }}
          className="absolute top-3 left-3 bg-black/10 rounded-full p-1"
        >
          <Icons.pause className="w-5" />
        </button>
      ) : (
        <button
          onClick={() => {
            setPreview(true);
            setPlayingPreview(true);
          }}
          className="absolute top-3 left-3 bg-black/10 rounded-full p-1"
        >
          <Icons.play className="w-5" />
        </button>
      )}
      {props.isfree && (
        <div className="absolute top-3 right-3 text-black">
          <Icons.star className="w-5 stroke-yellow-300 fill-yellow-200" />
          <span className="text-[8px] rounded-full block lg:hidden group-hover:flex bg-yellow-300 p-0.5">
            رایگان
          </span>
        </div>
      )}
      <div className="grid grid-cols-10 items-center group relative">
        <p className="col-span-9 Just2Rows">{props.title}</p>
        <button
          onClick={() => setCollectionOptions(!collectionOptions)}
          onBlur={() => setCollectionOptions(false)}
          className="col-span-1"
        >
          <Icons.vertical_dots
            className="block lg:hidden lg:group-hover:block w-5 stroke-black dark:stroke-slate-50 
            justify-self-end stroke-[2px]"
          />
        </button>
        {collectionOptions && (
          <ul
            className="absolute flex flex-col gap-2.5 items-end text-sm p-3 py-4 -bottom-24 rounded-xl h-28 left-4 min-w-max bg-white 
          dark:bg-[#16171a] shadow-[0px_0px_1px_gray] dark:shadow-[0px_0px_1px_#fff] ltr z-10"
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
        <Icons.check className="w-3 bg-blue-400 rounded-full stroke-white stroke-[2px] p-0.5" />
      </div>
      <div className="flex gap-2 items-center text-[10px] text-gray-300 mx-0.5">
        <span>{props.seen_count + " هزار بازدید"}</span>
        <span>{props.days_ago + " روز پیش"}</span>
      </div>
    </div>
  );
};

export default CollectionCard;
