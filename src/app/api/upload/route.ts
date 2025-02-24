// app/api/upload/route.ts
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import { join } from "path";

export async function POST(request: Request) {
  const formData = await request.formData();
  const file = formData.get("file") as File;

  if (!file) {
    return NextResponse.json({ message: "No file uploaded" }, { status: 400 });
  }

  try {
    // Convert the file to a Buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Save the file to the filesystem
    const path = join(process.cwd(), "videos", file.name);
    await writeFile(path, buffer);

    return NextResponse.json(
      { message: `File uploaded successfully: ${file.name}` },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to upload file" },
      { status: 500 }
    );
  }
}
