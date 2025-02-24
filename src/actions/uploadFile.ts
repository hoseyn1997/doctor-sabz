// app/actions.ts
"use server";

import { prisma } from "@/lib/db";
import { writeFile } from "fs/promises";
import { join } from "path";

export async function uploadFile(prevState: any, formData: FormData) {
  const file = formData.get("file") as File;
  //   const collection_short_id = formData.get("collection_short_id") as string;

  //   const prismaCollection = await prisma.collection.findUnique({
  //     where: { ShortId: collection_short_id },
  //   });
  //   if (!prismaCollection) {
  //     return { message: "no collection has found" };
  //   }

  if (!file) {
    return { message: "No file uploaded" };
  }

  try {
    // Convert the file to a Buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Save the file to the filesystem
    const path = join(process.cwd(), "videos", file.name);
    await writeFile(path, buffer);

    return { message: `File uploaded successfully: ${file.name}` };
  } catch (error) {
    return { message: "Failed to upload file" };
  }
}
