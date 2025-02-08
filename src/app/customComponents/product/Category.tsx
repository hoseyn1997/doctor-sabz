import React from "react";

interface Props {
  icon: React.JSX.Element;
  name: string;
  courses_count: string;
}

export default function Category({ icon, name, courses_count }: Props) {
  return (
    <div className="group bg-white ring-1 ring-gray-100 rounded-3xl flex flex-col justify-center items-center mx-auto w-11/12 md:w-56 aspect-square hover:-translate-y-3 hover:shadow-xl transition-transform duration-300 cursor-pointer">
      {icon}
      <p className="font-bold text-lg mt-6 group-hover:text-orange-500">
        {name}
      </p>
      <p className="text-xs font-normal mt-3">{courses_count} Courses</p>
    </div>
  );
}
