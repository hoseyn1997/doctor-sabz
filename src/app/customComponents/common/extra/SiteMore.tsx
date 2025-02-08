import Image from "next/image";
import React from "react";
import { Icons } from "../Icons/Icons";

export default function SiteMore() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 justify-center">
      <Image
        src={"/vector10.svg"}
        alt=""
        width={640}
        height={460}
        className="justify-self-center w-11/12 md:w-[640px]"
      />
      <div className="justify-self-center w-11/12 md:w-[520px]">
        <p className="text-4xl font-bold mb-6">
          Grow us your skill with LearnPress LMS
        </p>
        <p className="text-xl mb-4">
          We denounce with righteous indignation and dislike men who are so
          beguiled and demoralized that cannot trouble.
        </p>
        <div className="grid gap-3">
          <div className="flex gap-2">
            <Icons.Prove className="w-4" />
            <p className="text-lg">Certification</p>
          </div>
          <div className="flex gap-2">
            <Icons.Prove className="w-4" />
            <p className="text-lg">Certification</p>
          </div>
          <div className="flex gap-2">
            <Icons.Prove className="w-4" />
            <p className="text-lg">Certification</p>
          </div>
          <div className="flex gap-2">
            <Icons.Prove className="w-4" />
            <p className="text-lg">Certification</p>
          </div>
        </div>
        <button className="text-lg px-7 py-3 rounded-full bg-orange-500 text-white mt-5">
          Explorer course
        </button>
      </div>
    </div>
  );
}
