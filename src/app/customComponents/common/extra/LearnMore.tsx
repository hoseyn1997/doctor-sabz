import React from "react";
import Image from "next/image";

export default function LearnMore() {
  return (
    <div
      className="w-11/12 md:w-full mx-auto h-fit md:h-[324px] learn-more-bg bg-cover rounded-3xl relative overflow-hidden"
      style={{ backgroundImage: "url('/Vector.svg')" }}
    >
      <div className="relative z-10 max-w-[450px] p-0 md:p-14 scale-75 md:scale-100">
        <p className="text-base">GET MORE POWER FROM</p>
        <p className="text-3xl font-bold my-3">LearnPress Add-Ons</p>
        <p className="text-lg text-gray-500 my-3">
          The next level of LearnPress - LMS WordPress Plugin. More Powerful,
          Flexible and Magical Inside.
        </p>
        <button className="mt-2 rounded-full px-6 py-3 bg-orange-500 text-white">
          Explorer course
        </button>
      </div>
      <Image
        src={"/vector1.svg"}
        width={64}
        height={64}
        alt=""
        className="bg-[#FFA53C] rounded-xl p-2 w-16 rotate-45 absolute -top-1 right-36 hidden md:block"
      />
      <Image
        src={"/vector8.svg"}
        width={64}
        height={64}
        alt=""
        className="bg-[#FF2727] rounded-xl p-2 w-16 rotate-45 absolute top-32 right-3 scale-150 hidden lg:block"
      />
      <Image
        src={"/vector9.svg"}
        width={64}
        height={64}
        alt=""
        className="bg-[#34CEFF] rounded-xl p-2 w-16 rotate-12 absolute top-16 right-56 aspect-square scale-150 z-10 hidden lg:block"
      />

      <Image
        src={"/vector6.svg"}
        width={64}
        height={64}
        alt=""
        className="bg-[#F0D824] rounded-xl p-2 w-16 rotate-12 absolute top-32 right-[280px] z-0 aspect-square hidden lg:block"
      />

      <Image
        src={"/vector7.svg"}
        width={64}
        height={64}
        alt=""
        className="bg-[#CB37FF] rounded-xl p-2 w-16 rotate-[25deg] absolute bottom-2 right-44 aspect-square hidden md:block"
      />
      <Image
        src={"/vector3.svg"}
        width={64}
        height={64}
        alt=""
        className="bg-[#8A34CD] rounded-xl p-2 w-16 -rotate-45 scale-150 absolute top-20 left-[540px] aspect-square hidden md:block"
      />
      <Image
        src={"/vector4.svg"}
        width={64}
        height={64}
        alt=""
        className="bg-[#E71B89] rounded-xl p-2 w-16 absolute top-44 left-[540px] aspect-square hidden md:block"
      />

      {/* only lg visible */}
      <Image
        src={"/vector5.svg"}
        width={64}
        height={64}
        alt=""
        className="bg-[#37E954] rounded-xl p-2 w-16 rotate-12 absolute bottom-2 right-[412px] aspect-square hidden lg:block"
      />

      <Image
        src={"/vector2.svg"}
        width={64}
        height={64}
        alt=""
        className="bg-[#5506FD] rounded-xl p-2 w-16 -rotate-45 absolute top-14 right-[455px] aspect-square scale-150 hidden lg:block"
      />
    </div>
  );
}
