"use client";
import React, { useEffect, useState } from "react";
import InteractButton from "./interact_button";
import { Icons } from "@/app/components/Icons/Icons";
import { Video } from "@prisma/client";
import useDrawer from "@/app/common/drawerContext";
import Comments from "./comments";

interface Props {
  video: Video;
  teacher?: string;
}

const VideoInfo = ({ video, teacher }: Props) => {
  const { openDrawer } = useDrawer();
  const [screenWidth, setScreenWidth] = useState(0);
  const [commentsHeader, setcommentsHeader] = useState<HTMLParagraphElement>();
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    setScreenWidth(window.screen.width);
    setcommentsHeader(
      document.getElementById("commentsHeader") as HTMLParagraphElement
    );
  }, [setScreenWidth, setcommentsHeader]);

  return (
    <div className="rtl px-2">
      <h1
        className="font-bold text-lg m-1 rtl"
        style={{ fontFamily: "DefaultFont" }}
      >
        {video.Title}
      </h1>
      <div className="flex gap-2 items-center text-[10px] text-gray-500">
        <p className="">1289 بازدید - </p>
        <p>2 روز پیش</p>
        {!showMore && (
          <button
            onClick={() => setShowMore(true)}
            className="text-sky-500 font-bold"
          >
            بیشتر...
          </button>
        )}
      </div>
      {showMore && (
        <div className="my-1">
          <p className="text-justify text-xs text-gray-500 Just3Rows">
            {video.Description}
          </p>
          <button
            onClick={() => setShowMore(false)}
            className="text-sky-500 font-bold text-[10px]"
          >
            کمتر...
          </button>
        </div>
      )}
      <div className="flex-col flex md:flex-row md:justify-between md:items-center mb-4">
        <div className="flex gap-5 my-2 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 flex justify-center items-center bg-gray-100 rounded-full aspect-square">
              <Icons.teacher className="w-7 stroke-current dark:stroke-gray-700" />
            </div>
            <div className="grid gap-1">
              <p className="text-sm font-bold align-middle">{teacher}</p>
              <p className="text-[8px] text-gray-500 align-middle">
                125 دنبال کننده
              </p>
            </div>
          </div>
          <InteractButton
            className="flex gap-1 text-xs p-1.5 font-bold bg-orange-500/80 text-white rounded"
            icon={<Icons.add_user className="w-3 stroke-2" />}
            content={<p> دنبال کردن</p>}
          />
        </div>
        <div className="flex md:justify-center justify-end gap-2 items-center">
          <InteractButton
            className="flex justify-center items-center gap-1 bg-gray-50 dark:bg-gray-400/10 p-1.5 rounded text-xs"
            icon={<Icons.heart className="w-4 stroke-1" />}
            content={<p>121</p>}
          />
          <InteractButton
            className="flex justify-center items-center gap-1 bg-gray-50 dark:bg-gray-400/10 p-1.5 rounded text-xs"
            icon={<Icons.bookmark className="w-4 stroke-1" />}
            content={<p>ذخیره</p>}
          />
          <InteractButton
            onClick={() =>
              screenWidth > 768
                ? commentsHeader?.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                    inline: "nearest",
                  })
                : openDrawer(
                    <Comments className="max-h-96 overflow-hidden overflow-y-auto example3 mt-0" />
                  )
            }
            className="flex justify-center items-center gap-1 bg-gray-50 dark:bg-gray-400/10 p-1.5 rounded text-xs"
            icon={<Icons.comment className="w-4 stroke-1" />}
            content={<p>دیدگاه ها</p>}
          />
          <InteractButton
            className="flex justify-center items-center gap-1 bg-gray-50 dark:bg-gray-400/10 p-1.5 rounded text-xs"
            icon={<Icons.share className="w-4 stroke-1" />}
            content={<p>اشتراک</p>}
          />
        </div>
      </div>

      <Comments className="hidden lg:block mt-3" />
    </div>
  );
};

export default VideoInfo;
