import React from "react";
import Image from "next/image";
import { Icons } from "../../../components/ui/icons/Icons";
import Link from "next/link";
import { Video } from "@prisma/client";

interface Props {
  title: string;
  teacher: string;
  videoId: string;
  video: Video;
}

export default function Card({ title, teacher, videoId, video }: Props) {
  return (
    <div className="flex gap-2">
      <Image
        src={
          video.Order == 1
            ? "/assets/blog/Movies2024.png"
            : video.Order == 2
            ? "/assets/ILC3l7OeXkB.jpg"
            : video.Order == 3
            ? "/assets/blog/Animeh.png"
            : "/assets/blog/Ultran.png"
        }
        alt=""
        width={176}
        height={96}
        className="object-cover rounded-lg w-44 h-24"
      />

      <div className="relative">
        <Link href={`/v/${videoId}`} className="text-xs">
          {title}
        </Link>
        <div className="flex justify-start items-center text-xs gap-0.5">
          <div className="p-0.5 rounded">
            <Icons.graduate className="w-6 stroke-green-500 stroke-1" />
          </div>
          <span className="text-gray-400 text-[10px]">{teacher}</span>
        </div>
        <p className="text-xs w-fit bg-gray-50/10 px-1.5 py-0.5 pt-1 rounded-full">
          4:36
        </p>
        <div className="absolute bottom-0 right-0 flex text-[10px] gap-2 text-gray-400/50">
          <span>تبلیغ</span>
          <span>4 روز پیش</span>
        </div>
      </div>
    </div>
  );
}
