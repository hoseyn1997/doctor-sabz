import React from "react";
import type { Metadata } from "next";
import { prisma } from "@/lib/db";
import Player from "@/app/components/video/Player";
import Card from "@/app/components/video/Card";
import { notFound } from "next/navigation";
import { Icons } from "@/app/components/Icons/Icons";

interface Props {
  params: Promise<{ videoId: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { videoId } = await params;
  return {
    title: `${videoId} - Product Details`,
    description: `Details about the product ${videoId} .`,
    // Add Open Graph metadata as needed
  };
};

export default async function page({ params, searchParams }: Props) {
  const { videoId } = await params;
  const queryParams = await searchParams;

  console.log("search params are: ", queryParams);
  const custom_video = await prisma.video.findFirst({
    where: { ShortId: videoId },
    include: {
      Collection: true,
    },
  });
  console.log("customvideo is:", custom_video);
  if (!!!custom_video) notFound();

  const collection = await prisma.collection.findFirst({
    where: {
      Id: custom_video?.CollectionId,
    },
    include: {
      Videos: true,
      Attendees: true,
    },
  });
  return (
    <div className="max-w-screen-container mx-auto">
      <div className="grid grid-cols-3 lg:py-6 lg:gap-5 gap-2">
        <div className="col-span-3 row-start-3 lg:row-start-1 lg:col-span-1 rtl p-1">
          {collection && (
            <div key={collection.Id} className="grid gap-3">
              {collection.Videos.map((video) => (
                <Card
                  key={video.Id}
                  title={video.Title}
                  teacher={collection.Teacher}
                  videoId={video.ShortId}
                />
              ))}
            </div>
          )}
        </div>
        <div className="col-span-3 lg:col-span-2">
          <Player inputVideoId={videoId} />
          <div className="rtl px-2">
            <h1
              className="font-bold text-lg m-1 rtl"
              style={{ fontFamily: "DefaultFont" }}
            >
              {custom_video.Title}
            </h1>
            <div className="flex gap-2 items-center text-[10px] text-gray-500">
              <p className="">1289 بازدید - </p>
              <p>2 روز پیش</p>
              <span className="text-sky-500 font-bold">بیشتر...</span>
            </div>

            <div className="flex gap-2 my-2 items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 flex justify-center items-center bg-gray-100 rounded-full aspect-square">
                  <Icons.user className="w-4 stroke-current dark:stroke-gray-700" />
                </div>
                <p className="text-sm font-bold">
                  {custom_video.Collection.Teacher}
                </p>
              </div>
              <button className="text-xs p-1.5 font-bold bg-orange-500 text-white rounded-full">
                دنبال کردن
              </button>
            </div>
            <p className="text-[10px] text-gray-500 mb-5">125 دنبال کننده</p>
            <p className="text-justify text-xs text-gray-500 Just3Rows">
              {custom_video.Description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
