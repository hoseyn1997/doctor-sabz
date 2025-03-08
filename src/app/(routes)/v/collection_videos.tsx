"use client";
import { collectionWithVideo } from "@/app/common/types/collection";
import { Icons } from "@/app/components/Icons/Icons";
import Card from "@/app/(routes)/v/Card";
import React, { useRef, useState } from "react";
import SimilarVideos from "./similar_videos";

interface Props {
  collection: collectionWithVideo;
}

const CollectionVideos = ({ collection }: Props) => {
  const [openCollectionVideos, setOpenCollectionVideos] = useState(false);
  const videosList = useRef<HTMLDivElement>(null);
  const videoListButton = useRef<HTMLButtonElement>(null);

  const toggleVideoList = () => {
    if (openCollectionVideos) {
      setOpenCollectionVideos(false);
      videoListButton.current?.classList.remove("rotate-180");
      videosList.current?.classList.add("h-16");
      videosList.current?.classList.remove("h-[488px]");
    } else {
      setOpenCollectionVideos(true);
      videoListButton.current?.classList.add("rotate-180");
      videosList.current?.classList.remove("h-16");
      videosList.current?.classList.add("h-[488px]");
    }
  };

  return (
    <>
      <div
        ref={videosList}
        className="ring-[0.3px] dark:ring-[0.4px] ring-gray-500/70 dark:shadow-[0px_0px_0.6px_#fff] mb-2 rounded-xl h-16 overflow-auto example transition-all"
      >
        <div className="flex justify-between p-4 sticky top-0 mb-0 rounded-xl dark:bg-dark bg-white z-10 h-16">
          <div className="flex justify-start gap-2 items-center text-xs">
            <Icons.video_list className="w-3 stroke-current" />
            <span>{collection?.Title}</span>
          </div>
          <div className="flex gap-2">
            <button
              title="کامنت ها"
              className="p-2 px-2.5 rounded-xl ring-[0.5px] ring-gray-500/70 dark:shadow-[0px_0px_0.6px_#fff] hover:bg-gray-50 dark:hover:bg-black transition-all"
            >
              <Icons.comments className="w-3 stroke-current" />
            </button>
            <button
              title="ذخیره"
              className="p-2 px-2.5 rounded-xl ring-[0.5px] ring-gray-500/70 dark:shadow-[0px_0px_0.6px_#fff] hover:bg-gray-50 dark:hover:bg-black transition-all"
            >
              <Icons.bookmark className="w-3 stroke-current" />
            </button>
            <button
              onClick={toggleVideoList}
              ref={videoListButton}
              title="موارد مشابه"
              className="p-2 px-2.5 rounded-xl ring-[0.5px] ring-gray-500/70 dark:shadow-[0px_0px_0.6px_#fff] hover:bg-gray-50 dark:hover:bg-black transition-all"
            >
              <Icons.arrow_left className="w-3 -rotate-90 stroke-current" />
            </button>
          </div>
        </div>
        <div className="px-1">
          {collection && (
            <div key={collection.Id} className="grid gap-3">
              {collection.Videos.map((video) => (
                <Card
                  key={video.Id}
                  title={video.Title}
                  teacher={collection.Teacher}
                  videoId={video.ShortId}
                  video={video}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      <SimilarVideos collection={collection} />
    </>
  );
};

export default CollectionVideos;
