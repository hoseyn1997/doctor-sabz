import React from "react";
import Image from "next/image";
import { Icons } from "../common/Icons/Icons";
import Link from "next/link";

interface Props {
  image_url: string;
  title: string;
  category: string;
}

export default function CourseCard({ image_url, title, category }: Props) {
  return (
    <div className="card relative group ring-1 ring-gray-200 w-11/12 md:w-[360px] max-w-[360px] rounded-3xl overflow-hidden mx-auto hover:-translate-y-4 transition-all duration-300 hover:shadow-xl">
      <Image
        src={image_url}
        width={360}
        height={250}
        alt={title}
        className="rounded-t-2xl w-full"
      />
      <p className="category bg-black text-white rounded-lg text-sm px-3 py-2 absolute top-5 left-5">
        {category}
      </p>
      <div className="p-5">
        <p className="text-sm">
          <span className="text-gray-500 text-xs">by</span> Determined-Poitras
        </p>
        <Link
          href={"/product/product-new-name"}
          className="text-lg font-bold mt-3 py-3 group-hover:text-orange-500"
        >
          Create an LMS Website with LearnPress
        </Link>
        <div className="flex items-center gap-6 my-4">
          <div className="flex gap-2">
            <Icons.Student className="w-4 h-4" />
            <span className="text-xs">156 Students</span>
          </div>
          <div className="flex gap-2">
            <Icons.Clock className="w-4 h-4" />
            <span className="text-xs">2 Weeks</span>
          </div>
        </div>
        <div className="pt-4 flex justify-between items-center shadow-[0_-0.2px_0px_0px_#80808094]">
          <div className="flex items-center gap-2">
            <span className="line-through text-gray-400">$29.0</span>
            <span>Free</span>
          </div>
          <button className="text-sm font-bold">View More</button>
        </div>
      </div>
    </div>
  );
}
