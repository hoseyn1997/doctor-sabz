import React from "react";
import CourseCard from "./CourseCard";

export default function Courses() {
  return (
    <div>
      <div className="flex justify-between items-center mb-12 px-3 2xl:px-0 scale-90 md:scale-100">
        <div>
          <p className="text-xl font-bold">Featured courses</p>
          <p className="text-xs font-thin text-gray-500 mt-3">
            Explore our Popular Courses
          </p>
        </div>
        <button className="ring-1 ring-gray-600 p-2 rounded-full text-lg">
          All courses
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        <CourseCard
          image_url="/course1.png"
          title="course1"
          category="Photography"
        />
        <CourseCard
          image_url="/course2.png"
          title="course2"
          category="Photography"
        />
        <CourseCard
          image_url="/course3.png"
          title="course3"
          category="Photography"
        />
        <CourseCard
          image_url="/course4.png"
          title="course4"
          category="Photography"
        />
        <CourseCard
          image_url="/course5.png"
          title="course5"
          category="Photography"
        />
        <CourseCard
          image_url="/course6.png"
          title="course6"
          category="Photography"
        />
      </div>
    </div>
  );
}
