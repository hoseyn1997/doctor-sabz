import { Icons } from "@/app/components/ui/icons/Icons";
import React from "react";

const Dashboard = () => {
  return (
    <div className="rtl max-w-screen-minicontainer mx-auto">
      <div className="flex items-center justify-start gap-2">
        <div className="bg-blue-500 p-2 rounded-full">
          <Icons.dashboard className="w-5 stroke-white stroke-2" />
        </div>
        <p className="font-bold text-lg">داشبورد</p>
      </div>
      <div className="flex justify-center items-center gap-1 md:gap-10 py-5 md:p-5">
        <div className="flex flex-col justify-center items-center gap-2 bg-teal-400/20 dark:bg-teal-500/30 p-0 rounded-xl aspect-square w-44">
          <Icons.thumbs_up className="w-6 stroke-2" />
          <p className="text-sm truncate">total likes</p>
          <p className="text-xl font-bold">50,124</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 bg-yellow-400/20 dark:bg-yellow-500/30 p-0 rounded-xl aspect-square w-44">
          <Icons.comments className="w-6 stroke-2" />
          <p className="text-sm truncate">total comments</p>
          <p className="text-xl font-bold">25,120</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 bg-purple-400/20 dark:bg-purple-500/30 p-0 rounded-xl aspect-square w-44">
          <Icons.share className="w-6 stroke-2" />
          <p className="text-sm truncate">total shares</p>
          <p className="text-xl font-bold">10,320</p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-1 md:gap-10 py-5 md:p-5">
        <div className="flex flex-col justify-center items-center gap-2 bg-orange-400/20 dark:bg-orange-500/30 p-0 rounded-xl aspect-square w-44">
          <Icons.clapperboard className="w-6 stroke-2" />
          <p className="text-sm truncate">total videos</p>
          <p className="text-xl font-bold">50,124</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 bg-green-400/20 dark:bg-green-500/30 p-0 rounded-xl aspect-square w-44">
          <Icons.bookmark className="w-6 stroke-2" />
          <p className="text-sm truncate">total blogs</p>
          <p className="text-xl font-bold">25,120</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 bg-pink-500/20 dark:bg-pink-500/30 p-0 rounded-xl aspect-square w-44">
          <Icons.badge_check className="w-6 stroke-2" />
          <p className="text-sm truncate">total users</p>
          <p className="text-xl font-bold">10,320</p>
        </div>
      </div>
      <div className="flex items-center justify-start gap-2">
        <div className="bg-blue-500 p-2 rounded-full">
          <Icons.bell className="w-5 stroke-white stroke-2" />
        </div>
        <p className="font-bold text-lg">فعالیت های اخیر</p>
      </div>
      <div className="p-5 flex items-center gap-2">
        <Icons.arrow_left className="w-3 stroke-current" />
        <span className="text-sm">اخیرا فعالیتی رخ نداده است</span>
      </div>
    </div>
  );
};

export default Dashboard;
