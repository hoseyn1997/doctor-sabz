import React from "react";

export default function SideBar() {
  return (
    <div className="fixed right-0 top-0 h-full block lg:hidden bg-white w-80 p-2 z-10">
      <ul className="grid gap-2">
        <li>Home</li>
        <li>Courses</li>
        <li>Blog</li>
        <li>Pages</li>
      </ul>
    </div>
  );
}
