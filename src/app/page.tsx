export const dynamic = "force-dynamic";
import { Metadata } from "next";
import { prisma } from "@/lib/db";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home - دکتر سبز",
  description: "Welcome to دکتر سبز - Your education path awaits you.",
  keywords: "education, دکتر سبز, online learning",
  // Add Open Graph metadata as needed
};

export default async function Home() {
  // Fetch the product data on the server side
  // const products = await fetchProducts();
  const users = await prisma.user.findMany();
  const collections = await prisma.collection.findMany({
    include: {
      Videos: true,
      Attendees: true,
    },
  });
  // console.log(users);
  // console.log(videos);

  return (
    <div className="grid text-center px-2">
      <h1 className="my-5">This is Home Page</h1>
      {collections.length > 0 &&
        collections.map((collection) => (
          <div
            key={collection.ShortId}
            className="mx-auto text-center w-full md:w-1/3 grid gap-2 rtl ring-1 ring-gray-200 rounded p-2 my-2"
          >
            <p className="text-lg font-bold">{collection.Title}</p>
            <p className="truncate text-wrap text-sm font-bold">
              {collection.Description}
            </p>
            <p className="text-gray-500 text-sm">{collection.Teacher}</p>
            <Link
              href={`/v/${collection.Videos[0].ShortId}`}
              className="ring-1 ring-gray-300 rounded"
            >
              See
            </Link>
          </div>
        ))}
      {users &&
        users.map((user) => <div key={user.UserName}>{user.UserName}</div>)}
    </div>
  );
}
