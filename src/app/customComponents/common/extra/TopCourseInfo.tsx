import Image from "next/image";
import React from "react";

export default function TopCourseInfo() {
  return (
    <div className="top-course-info-bg w-11/12 mx-auto rounded-xl md:w-full h-fit md:h-80 flex flex-col justify-center items-center relative overflow-hidden">
      <div className="scale-75 md:scale-100">
        <p className="text-lg z-20">PROVIDING AMAZING</p>
        <p className="text-4xl font-bold mt-2 z-20">
          Education Wordpress Theme
        </p>
        <p className="text-sm text-gray-700 font-thin mt-6 z-20">
          The next level of LMS WordPress Theme. Learn anytime and anywhere.
        </p>
        <button className="text-white text-lg px-6 py-2 rounded-full bg-orange-500 mt-5 z-20">
          Explorer course
        </button>
      </div>

      {/* to left */}
      <Image
        src={"/top-course-theme1.png"}
        alt=""
        width={262}
        height={133}
        className="absolute -top-5 -left-5 rotate-[30deg] rounded-xl z-10 hidden md:block opacity-35 lg:opacity-100"
      />
      <Image
        src={"/top-course-theme2.png"}
        alt=""
        width={262}
        height={133}
        className="absolute top-28 left-16 rotate-[30deg] rounded-xl z-10 hidden md:block opacity-35 lg:opacity-100"
      />
      <Image
        src={"/top-course-theme3.png"}
        alt=""
        width={262}
        height={133}
        className="absolute bottom-5 -left-16 rotate-[30deg] rounded-xl z-0 hidden md:block opacity-35 lg:opacity-100"
      />

      {/* to right */}
      <Image
        src={"/top-course-theme4.png"}
        alt=""
        width={262}
        height={133}
        className="absolute top-2 right-16 rotate-[30deg] rounded-xl z-0 hidden md:block opacity-35 lg:opacity-100"
      />
      <Image
        src={"/top-course-theme5.png"}
        alt=""
        width={262}
        height={133}
        className="absolute bottom-6 right-5 rotate-[30deg] rounded-xl z-10 hidden md:block opacity-35 lg:opacity-100"
      />
      <Image
        src={"/top-course-theme6.png"}
        alt=""
        width={262}
        height={133}
        className="absolute bottom-4 -right-40 rotate-[30deg] rounded-xl z-0 hidden md:block opacity-35 lg:opacity-100"
      />
    </div>
  );
}
