// import { prisma } from "@/lib/db";  
import { NextRequest } from "next/server";

// interface Post {  
//   id: string;  
//   title: string;  
//   slug: string;  
//   content: string;  
//   published: boolean | null;  
//   createdAt: Date;  
//   updatedAt: Date;  
// }  

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const inputid = searchParams.get('inputid');

  try {
    if (inputid) {
      // const post = await prisma.post.findUnique({ where: { id: inputid } });  
      console.log('inputId is ', inputid)

      if (true) {
        return new Response(JSON.stringify({ post: 'this is post' }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        });
      } else {
        // Post not found  
        return new Response(JSON.stringify({ message: 'Post not found' }), {
          status: 404,
          headers: { 'Content-Type': 'application/json' },
        });
      }
    } else {
      // const posts = await prisma.post.findMany();  
      return new Response(JSON.stringify({ posts: 'this is our posts' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return new Response(JSON.stringify({ message: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}