import React from "react";
import Image from "next/image";
import { Icons } from "../Icons/Icons";

export default function Card() {
  return (
    <div className="flex gap-2" style={{ fontFamily: "DefaultFont" }}>
      <Image
        src={"/video-popup.webp"}
        alt=""
        width={200}
        height={200}
        className="object-cover rounded-lg"
      />
      <div>
        <p className="text-sm">
          قسمت ۷ فصل ۳ آپارات کست | گفت‌وگو با کوروش کسائیان | K2Delta38
        </p>
        <div className="flex justify-start items-center text-xs gap-2 my-1">
          <Icons.play className="w-5 bg-green-600 rounded-full" />
          <span>دکترسبز</span>
        </div>
        <div className="flex text-gray-500 text-xs">
          <span>تبلیغ</span>
          <span>4 روز پیش</span>
        </div>
      </div>
    </div>
  );
}
