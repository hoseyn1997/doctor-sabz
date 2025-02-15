import React from "react";
import Image from "next/image";
import { Icons } from "../Icons/Icons";
import Link from "next/link";

interface Props {
  title: string;
  teacher: string;
  videoId: string;
}

export default function Card({ title, teacher, videoId }: Props) {
  return (
    <div className="flex gap-2" style={{ fontFamily: "DefaultFont" }}>
      <Image
        src={"/video-popup.webp"}
        alt=""
        width={176}
        height={96}
        className="object-cover rounded-lg w-44 h-24"
      />
      <div className="">
        <Link href={`/v/${videoId}`} className="text-sm">
          {title}
        </Link>
        <div className="flex justify-start items-center text-xs gap-2 my-2">
          <Icons.play className="w-5 bg-gray-100 rounded-full" fill="#6b7280" />
          <span>{teacher}</span>
        </div>
        <div className="flex text-gray-500 text-xs gap-1">
          <span>تبلیغ</span>
          <span>4 روز پیش</span>
        </div>
      </div>
    </div>
  );
}
