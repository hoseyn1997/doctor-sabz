// import { createPost } from "@/actions/action";
// import { prisma } from "@/lib/db";
import { prisma } from "@/lib/db";
import { Metadata } from "next";
import React from "react";

interface Props {
  params: Promise<{ blogName: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { blogName } = await params;
  return {
    title: ` ${blogName} - My Next.js Blog`,
    description: `Read the latest blog post about ${blogName} .`,
  };
};

export default async function page({ params, searchParams }: Props) {
  const { blogName } = await params;
  const queryParams = await searchParams;
  const users = await prisma.user.findMany();

  return (
    <div className="min-h-screen bg-gray-50">
      <h1 className="text-gray-500 w-fit mx-auto my-2 text-3xl text-center p-5 bg-gray-100 rounded-lg">
        This is the profile of {blogName.toUpperCase()}
      </h1>
      {queryParams && (
        <p className="text-gray-500 text-center">
          Query Parameters: {JSON.stringify(queryParams)}
        </p>
      )}
      {/* <div>{post?.title}</div> */}
      {/* <div>posts count is :{prisma.post.count()}</div> */}

      {/* <div className="my-20 w-[500px] mx-auto text-center">
        <p className="text-xl font-bold">Lets Add A New Post To App</p>
        <form
          // action={createPost}
          className="flex flex-col gap-y-2 mx-auto my-3"
        >
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="ring-1 ring-gray-200 rounded-md p-2 px-3"
          />
          <textarea
            name="content"
            rows={5}
            placeholder="Content"
            className="ring-1 ring-gray-200 rounded-md p-2 px-3"
          />
          <input
            type="submit"
            value="Create Post"
            className="text-white bg-green-500 rounded-full w-fit mx-auto px-5 py-1 pt-2 cursor-pointer"
          />
        </form>
      </div> */}
      <div className="flex gap-5 mx-auto">
        {users.map((user) => (
          <div key={user.Id}>{user.UserName}</div>
        ))}
      </div>
    </div>
  );
}
