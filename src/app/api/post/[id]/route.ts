// app/api/post/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';

interface Props {
  params: Promise<{ id: string }>; // Expect params to be a Promise
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function GET(request: NextRequest, { params }: Props) {
  try {
    const resolvedParams = await params; // Resolve the Promise
    const id = resolvedParams.id;

    console.log('The ID:', id);

    if (id) {
      return NextResponse.json({ id: id });
    } else {
      return NextResponse.json({ message: 'ID parameter is missing' }, { status: 400 });
    }
  } catch (error) {
    console.error("Error resolving params:", error);
    return NextResponse.json({ message: 'Error processing request' }, { status: 500 });
  }
}