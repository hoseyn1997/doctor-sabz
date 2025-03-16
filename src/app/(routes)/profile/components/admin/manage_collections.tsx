import { prisma } from "@/lib/db/db";
import Image from "next/image";
import React from "react";
import AddVideoButton from "./add_video_button";
import VideoCard from "@/app/components/layout/home/videoCard";

const ManageCollections = async () => {
  const collections = await prisma.collection.findMany({
    include: {
      Photo: {
        include: { Photo: true },
      },
      Videos: {
        include: {
          Photo: {
            include: {
              Photo: true,
            },
          },
          Collection: {
            include: {
              Photo: {
                include: {
                  Photo: true,
                },
              },
              Teacher: true,
            },
          },
        },
      },
    },
  });
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 rtl">
      {collections.map((c) => (
        <div
          key={c.Id}
          className="p-2 rounded-xl flex flex-col gap-2 ring-1 ring-orange-400"
        >
          <div className="border-solid border-b-2 border-b-gray-200 p-1">
            {/* <Image
              src={c.Photo?.Photo.FilePath || "/assets/collection1.webp"}
              alt={c.Title}
              width={200}
              height={200}
            /> */}
            <div className="text-xl font-bold block md:flex gap-2">
              <span className="text-sm font-thin">عنوان: </span>
              <p className="text-center">{c.Title}</p>
            </div>
            {/* <p className="truncate">{c.Description}</p> */}
            {/* <p>{c.Cost}</p>
            <p>{c.DisCount}</p>
            <p>{c.ShortId}</p>
            <p>{c.TeacherId}</p> */}
          </div>
          <p>لیست ویدئو ها:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {c.Videos.map((v, idx) => (
              // <div key={v.Id} className="bg-gray-100/10 ring-1 ring-gray-400">
              //   <div className="flex gap-1">
              //     <p>{v.Order}. </p>
              //     <p>{v.Title}</p>
              //   </div>
              //   <p className="truncate">{v.Description}</p>
              //   <p>{v.FilePath}</p>
              //   <p>{v.ShortId}</p>
              // </div>
              <div
                className={`border-solid border-gray-200 border-[0.5px] ${
                  idx % 2 === 0 ? "border-r-0 rounded-l-xl" : "border-l-0 rounded-r-xl"
                }`}
              >
                <VideoCard video={v} />
              </div>
            ))}
          </div>
          <AddVideoButton collection={c} />
        </div>
      ))}
    </div>
  );
};

export default ManageCollections;
