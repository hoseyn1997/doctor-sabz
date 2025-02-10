import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { connectDatabase } from '@/lib/db';

export async function GET(request: Request) {
  await connectDatabase();
  const range = request.headers.get('range');
  if (!range) {
    return new NextResponse('Requires Range header', { status: 400 });
  }

  // Path to your video file
  const videoPath = path.join(process.cwd(), 'videos', 'bigbuck.mp4');
  const videoSize = fs.statSync(videoPath).size;

  // Parse the range header
  const CHUNK_SIZE = 10 ** 6; // 1MB
  const start = Number(range.replace(/\D/g, ''));
  const end = Math.min(start + CHUNK_SIZE, videoSize - 1);

  // Create headers
  const contentLength = end - start + 1;
  const headers = {
    'Content-Range': `bytes ${start}-${end}/${videoSize}`,
    'Accept-Ranges': 'bytes',
    'Content-Length': contentLength.toString(),
    'Content-Type': 'video/mp4',
  };

  // Create a read stream for the video chunk
  const videoStream = fs.createReadStream(videoPath, { start, end });

  // Return a streaming response
  return new NextResponse(videoStream as any, {
    status: 206,
    headers: new Headers(headers),
  });
}