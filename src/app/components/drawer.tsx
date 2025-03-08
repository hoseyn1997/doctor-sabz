"use client";
import React, { useEffect, useRef } from "react";
import useDrawer from "../common/drawerContext";

const Drawer = () => {
  const drawerRef = useRef<HTMLDivElement>(null);
  const { isOpen, closeDrawer, DrawerContent } = useDrawer();
  useEffect(() => {
    if (drawerRef && isOpen) {
      setTimeout(() => {
        drawerRef.current?.classList.remove("h-0", "p-0");
        drawerRef.current?.classList.add("h-96", "pt-10", "px-2");
      }, 50);
    }
  }, [isOpen, drawerRef]);

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex bg-black bg-opacity-50">
      <div
        ref={drawerRef}
        className="fixed bottom-0 w-full bg-gray-100 dark:bg-dark p-0 h-0 overflow-hidden transition-all duration-300 border-solid border-t-[0.5px] border-t-white"
      >
        <button
          onClick={closeDrawer}
          className="absolute top-2 right-2 w-5 h-5"
        >
          &times;
        </button>
        {DrawerContent}
      </div>
    </div>
  );
};

export default Drawer;
