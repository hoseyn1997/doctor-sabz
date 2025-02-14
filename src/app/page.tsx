export const dynamic = "force-dynamic";
import { Metadata } from "next";
import Card from "./components/video/Card";
import Player from "./components/video/Player";
import { prisma } from "@/lib/db";
import { Icons } from "./components/Icons/Icons";

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
    },
  });
  // console.log(users);
  // console.log(videos);

  return (
    <div className="max-w-screen-container mx-auto">
      <div className="grid grid-cols-3 lg:py-6 lg:gap-5 gap-2">
        <div className="col-span-3 row-start-3 lg:row-start-1 lg:col-span-1 rtl p-1 grid gap-2">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="col-span-3 lg:col-span-2">
          <Player />
          <h1
            className="font-bold text-lg m-1 rtl"
            style={{ fontFamily: "DefaultFont" }}
          >
            انیمیشن ربات وحشی The Wild Robot 2024 دوبله فارسی
          </h1>
        </div>
      </div>
      {/* {!!users && (
        <div>
          {users.map((user) => (
            <div key={user.Id}>{user.UserName}</div>
          ))}
        </div>
      )} */}
    </div>
  );
}
