// src/app/actions.ts
"use server";

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function getVideos(cursor: string | null, take: number = 2) {
  const videos = await prisma.video.findMany({
    take: take,
    skip: cursor ? 1 : 0, // Skip the cursor if it exists
    cursor: cursor ? { Id: cursor } : undefined,
    orderBy: {
      CreatedAt: "desc",
    },
  });

  const nextCursor = videos.length === take ? videos[take - 1].Id : null;

  return {
    videos,
    nextCursor,
  };
}

export async function loadMoreVideos(cursor: string | null) {  
    //added revalidatePath to revalidate the page after loading more posts  
    revalidatePath('/');  
    redirect(`/?cursor=${cursor}`);  
  } 