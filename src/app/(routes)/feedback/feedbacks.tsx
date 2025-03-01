"use client";
import { Icons } from "@/app/components/Icons/Icons";
import React from "react";

const Feedbacks = () => {
  // Mock comments data in Persian
  const mockComments = [
    {
      id: 1,
      name: "سارا محمدی",
      linkdin: "shayan1997",
      rating: 5,
      comment:
        "به طور کلی، این برنامه پخش ویدیو نه تنها مهارت های جلویی من را نشان می دهد، بلکه بر توانایی من برای ایجاد یک تجربه کاربری بصری نیز تأکید می کند. من مشتاق بهبود مستمر عملکرد بر اساس بازخورد کاربر هستم و از کشف ویژگی‌های بیشتر",
      date: "۱۴۰۳/۰۱/۱۵",
    },
    {
      id: 2,
      name: "امیر حسینی",
      linkdin: "hosein125",
      rating: 4,
      comment: "ایده بسیار خوبی داره، امیدوارم ویژگی‌های بیشتری اضافه بشه",
      date: "۱۴۰۳/۰۱/۱۴",
    },
  ];
  return (
    <section className="feedbacks relative grid gap-2 shadow-[0px_0.5px_0px_0px_#9ca3af] p-3 lg:p-5 pb-5 mt-2">
      <div className="flex items-center gap-3">
        <Icons.comments className="w-12 stroke-gray-400 dark:stroke-green-400 bg-gray-100 dark:bg-gray-100/30 p-2 mb-2 rounded-lg" />
        <div className="self-end mb-2">
          <p className="text-lg font-bold">All Feedbacks</p>
          <p className="text-xs text-gray-400">Thanks For Sharing Ideas</p>
        </div>
      </div>
      {mockComments.map((comment) => (
        <div key={comment.id} className="grid gap-1 dark:bg-black bg-gray-100 p-2">
          <div className="flex gap-1">
            <Icons.new_user className="w-8" />
            <div className="self-end">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {comment.linkdin}
              </p>
              <p className="text-[10px] text-gray-500 dark:text-gray-400">
                {comment.date}
              </p>
            </div>
            <div className="text-xs self-start mx-2">
              <div className="flex items-center">
                <Icons.star className="w-3 cursor-pointer stroke-[1px] stroke-gray-500 dark:stroke-gray-300" />
                <Icons.star
                  className={`w-3 cursor-pointer ${
                    comment.rating > 4 && "fill-yellow-500"
                  } stroke-[1px] stroke-gray-500 dark:stroke-gray-300`}
                />
                <Icons.star className="w-3 cursor-pointer fill-yellow-500 stroke-[1px] stroke-gray-500 dark:stroke-gray-300" />
                <Icons.star className="w-3 cursor-pointer fill-yellow-500 stroke-[1px] stroke-gray-500 dark:stroke-gray-300" />
                <Icons.star className="w-3 cursor-pointer fill-yellow-500 stroke-[1px] stroke-gray-500 dark:stroke-gray-300" />
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {comment.comment}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Feedbacks;
