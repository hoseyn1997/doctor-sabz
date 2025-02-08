import React from "react";

export default function SiteReport() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8 px-4 lg:px-0">
      <div className="flex flex-col justify-center items-center gap-4 bg-gray-100 rounded-xl py-12">
        <p className="text-3xl font-bold text-orange-500">25K+</p>
        <p className="text-lg font-bold">Active Students</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-4 bg-gray-100 rounded-xl py-12">
        <p className="text-3xl font-bold text-orange-500">899</p>
        <p className="text-lg font-bold">Total Courses</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-4 bg-gray-100 rounded-xl py-12">
        <p className="text-3xl font-bold text-orange-500">158</p>
        <p className="text-lg font-bold">Instructor</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-4 bg-gray-100 rounded-xl py-12">
        <p className="text-3xl font-bold text-orange-500">100%</p>
        <p className="text-lg font-bold">Satisfaction rate</p>
      </div>
    </div>
  );
}
