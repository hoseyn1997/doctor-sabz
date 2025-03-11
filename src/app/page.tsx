export const dynamic = "force-dynamic";
import { Metadata } from "next";
import { prisma } from "@/lib/db/db";
import Blogs from "./(routes)/blog/components/blogs";
import Link from "next/link";
import VideosList from "./components/layout/home/videos";

export const metadata: Metadata = {
  title: "Home - ویدیو سبز",
  description: "Welcome to ویدیو سبز - Your education path awaits you.",
  keywords: "education, ویدیو سبز, online learning",
};

export const viewport = {
  themeColor: "#000",
};

const ITEMS_PER_PAGE = 4;
// interface HomeProps {
//   searchParams: {
//     page?: string;
//   };
// }
interface HomeProps {
  searchParams: Promise<{ [key: string]: string }>;
}

export default async function Home({ searchParams }: HomeProps) {
  const { page } = await searchParams;

  const currentPage = Math.max(Number(page?.replace(/\D/g, "")) || 1, 1);
  // Fetch all posts up to current page
  const videos = await prisma.video.findMany({
    take: ITEMS_PER_PAGE * currentPage,
    orderBy: { CreatedAt: "desc" },
    include: {
      Collection: {
        include: {
          Photo: {
            include: {
              Photo: true,
            },
          },
        },
      },
    },
  });

  // Calculate total pages
  const totalVideos = await prisma.video.count();
  const totalPages = Math.ceil(totalVideos / ITEMS_PER_PAGE);

  return (
    <div className="rtl max-w-screen-container mx-auto px-3 lg:px-0 transition-all overflow-x-hidden py-6">
      <div className="flex justify-start gap-2 items-center fixed top-16 dark:bg-dark bg-white z-[19] w-full p-0">
        <Link
          href={"/"}
          className="text-xs p-1.5 border-solid border-t-2 dark:border-white text-black dark:text-white"
        >
          همه
        </Link>
        <Link
          href={"/"}
          className="text-xs p-1.5 text-gray-400 dark:text-gray-300"
        >
          آموزشی
        </Link>
        <Link
          href={"/"}
          className="text-xs p-1.5 text-gray-400 dark:text-gray-300"
        >
          سرگرمی
        </Link>
        <Link
          href={"/"}
          className="text-xs p-1.5 text-gray-400 dark:text-gray-300"
        >
          محبوب ترین ها
        </Link>
      </div>
      <p className="text-sm lg:text-lg my-3 font-bold w-fit text-green-500">
        ویژه‌های ویدئو سبز
      </p>
      <VideosList
        initialVideos={videos}
        currentPage={currentPage}
        totalPages={totalPages}
        ITEMS_PER_PAGE={ITEMS_PER_PAGE}
      />
      <p className="relative text-sm lg:text-lg mt-14 font-bold w-fit text-green-500">
        <span className="opacity-50">آخرین مقالات</span>
        <span className="absolute -top-3 -left-3 bg-orange-500/50 ring-1 ring-red-400 animate-pulse text-white text-[8px] leading-[8px] p-1 rounded-full">
          به زودی
        </span>
      </p>
      <Blogs />
    </div>
  );
}
