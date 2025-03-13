import React from "react";
import type { Metadata } from "next";
import { prisma } from "@/lib/db/db";
import Player from "@/app/(routes)/v/components/Player";
import { notFound } from "next/navigation";
import VideoInfo from "../components/video_total_inof";
import CollectionVideos from "../components/collection_videos";

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
  };
};

export default async function page({ params, searchParams }: Props) {
  const { videoId } = await params;
  const queryParams = await searchParams;

  const custom_video = await prisma.video.findFirst({
    where: { ShortId: videoId },
    include: {
      Collection: true,
    },
  });

  if (!!!custom_video) notFound();

  const collection = await prisma.collection.findFirst({
    where: {
      Id: custom_video?.CollectionId,
    },
    include: {
      Videos: true,
      Attendees: true,
      Photo: true,
      Teacher:true,
    },
  });

  return (
    <div className="max-w-screen-container mx-auto">
      {collection && (
        <div className="grid grid-cols-3 lg:py-6 lg:gap-5 gap-2">
          <div className="col-span-3 row-start-3 lg:row-start-1 lg:col-span-1 rtl px-1">
            <CollectionVideos collection={collection} />
          </div>
          <div className="col-span-3 lg:col-span-2">
            <Player inputVideoId={videoId} />
            <VideoInfo video={custom_video} teacher={collection?.Teacher.FullName} />
          </div>
        </div>
      )}
    </div>
  );
}
