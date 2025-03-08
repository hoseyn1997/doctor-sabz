import { handlefeedback } from "@/actions/give_feedback";
import { Icons } from "@/app/components/Icons/Icons";
import Loading from "@/app/components/loading";
import React from "react";

const Feedback = () => {
  return (
    <section className="submit-feedback my-2 shadow-[0px_0.5px_0px_0px_#9ca3af] relative grid gap-3 p-3 lg:p-5 pb-5 mt-2">
      <div className="flex items-center gap-3">
        <Icons.comment className="w-12 stroke-gray-400 dark:stroke-green-400 bg-gray-100 dark:bg-gray-100/30 p-2 mb-2 rounded-lg" />
        <div className="self-end mb-2">
          <p className="text-lg font-bold">Feedback</p>
          <p className="text-xs text-gray-400">Your Support Helps Me Go On</p>
        </div>
      </div>
      <form action={handlefeedback} className="grid gap-1">
        <div className="flex gap-2 items-center">
          <div className="block">
            <p className="px-1 text-gray-400/80 dark:text-gray-400 text-xs">
              linkdin username
            </p>
            <input
              type="text"
              name="linkdin_id"
              placeholder="نام کاربری لینکدین (اختیاری*)"
              className="focus-visible:outline-none focus-visible:shadow-[0px_0px_2px_gray] p-2 dark:bg-black ring-[0.5px] dark:ring-gray-100/80 ring-gray-400 rounded-md placeholder:text-gray-300/60 placeholder:text-xs"
            />
          </div>
          <div className="block">
            <p className="px-1 text-gray-400/80 dark:text-gray-400 text-xs">
              give me a score
            </p>
            <div className="flex items-center ring-[0.5px] ring-gray-400 p-2 py-2.5 rounded-md">
              <Icons.star className="w-5 cursor-pointer stroke-[1px] stroke-gray-200" />
              <Icons.star className="w-5 cursor-pointer fill-yellow-500 stroke-[1px] stroke-gray-200" />
              <Icons.star className="w-5 cursor-pointer fill-yellow-500 stroke-[1px] stroke-gray-200" />
              <Icons.star className="w-5 cursor-pointer fill-yellow-500 stroke-[1px] stroke-gray-200" />
              <Icons.star className="w-5 cursor-pointer fill-yellow-500 stroke-[1px] stroke-gray-200" />
            </div>
          </div>
        </div>
        <div className="block">
          <p className="px-1 text-gray-400/80 dark:text-gray-400 text-xs">
            How do you think I can do better
          </p>
          <textarea
            rows={4}
            name="feedback"
            placeholder="نظرت؟"
            className="w-full focus-visible:outline-none focus-visible:shadow-[0px_0px_2px_gray] p-2 dark:bg-black ring-[0.5px] dark:ring-gray-100/80 ring-gray-400 rounded-md placeholder:text-gray-300/60 placeholder:text-xs"
          />
        </div>
        <button className="flex items-center justify-center gap-2">
          {/* <Icons.check className="w-10 stroke-white dark:bg-gray-100/50 bg-gray-300 p-1 rounded-md stroke-2" /> */}
          <Loading className="w-7" />
          <p className="p-1.5 bg-teal-500 text-white font-bold text-xl rounded-md w-full">
            Share FeedBack
          </p>
        </button>
      </form>
    </section>
  );
};

export default Feedback;
