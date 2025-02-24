export const dynamic = "force-dynamic";
import { Metadata, Viewport } from "next";
import { prisma } from "@/lib/db";
import CollectionCard from "./components/video/CollectionCard";

export const metadata: Metadata = {
  title: "Home - ویدیو سبز",
  description: "Welcome to ویدیو سبز - Your education path awaits you.",
  keywords: "education, ویدیو سبز, online learning",
};

export const viewport = {
  themeColor: "#000",
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
  // console.log(collections);

  return (
    <div className="rtl max-w-screen-container mx-auto px-3 lg:px-0 transition-all overflow-x-hidden ">
      {/* <Preview videoId="preview3" /> */}
      {/* <Upload /> */}
      <p className="text-lg my-3 font-bold">ویژه‌های ویدئو سبز</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 gap-x-1">
        <CollectionCard
          title=" قسمت ۹ فصل ۳ آپارات کست | گفت وگو با مریم امیری | موسس آموزشگاه
              عطر سیب"
          days_ago="2"
          photo="/assets/collection2.webp"
          seen_count="29.6"
          teacher="رضا صادقی | Reza Sadeghi"
          teacher_photo="/assets/tc1.webp"
          isfree
        />
        <CollectionCard
          title="اهنگ جدید رضا صادقی به نام دلبر"
          days_ago="2"
          photo="/assets/collection3.webp"
          seen_count="29.6"
          teacher="رضا صادقی | Reza Sadeghi"
          teacher_photo="/assets/tc1.webp"
        />
        <CollectionCard
          title=" قسمت ۹ فصل ۳ آپارات کست | گفت وگو با مریم امیری | موسس آموزشگاه
              عطر سیب"
          days_ago="2"
          photo="/assets/collection1.webp"
          seen_count="29.6"
          teacher="رضا صادقی | Reza Sadeghi"
          teacher_photo="/assets/tc1.webp"
        />
        <CollectionCard
          title=" قسمت ۹ فصل ۳ آپارات کست | گفت وگو با مریم امیری | موسس آموزشگاه
              عطر سیب"
          days_ago="2"
          photo="/assets/collection1.webp"
          seen_count="29.6"
          teacher="رضا صادقی | Reza Sadeghi"
          teacher_photo="/assets/tc1.webp"
        />
        <CollectionCard
          title="اهنگ جدید رضا صادقی به نام دلبر"
          days_ago="2"
          photo="/assets/collection3.webp"
          seen_count="29.6"
          teacher="رضا صادقی | Reza Sadeghi"
          teacher_photo="/assets/tc1.webp"
        />
        <CollectionCard
          title=" قسمت ۹ فصل ۳ آپارات کست | گفت وگو با مریم امیری | موسس آموزشگاه
              عطر سیب"
          days_ago="2"
          photo="/assets/collection1.webp"
          seen_count="29.6"
          teacher="رضا صادقی | Reza Sadeghi"
          teacher_photo="/assets/tc1.webp"
        />
        <CollectionCard
          title=" قسمت ۹ فصل ۳ آپارات کست | گفت وگو با مریم امیری | موسس آموزشگاه
              عطر سیب"
          days_ago="2"
          photo="/assets/collection1.webp"
          seen_count="29.6"
          teacher="رضا صادقی | Reza Sadeghi"
          teacher_photo="/assets/tc1.webp"
        />
        <CollectionCard
          title=" قسمت ۹ فصل ۳ آپارات کست | گفت وگو با مریم امیری | موسس آموزشگاه
              عطر سیب"
          days_ago="2"
          photo="/assets/collection3.webp"
          seen_count="29.6"
          teacher="رضا صادقی | Reza Sadeghi"
          teacher_photo="/assets/tc1.webp"
        />
        <CollectionCard
          title=" قسمت ۹ فصل ۳ آپارات کست | گفت وگو با مریم امیری | موسس آموزشگاه
              عطر سیب"
          days_ago="2"
          photo="/assets/collection3.webp"
          seen_count="29.6"
          teacher="رضا صادقی | Reza Sadeghi"
          teacher_photo="/assets/tc1.webp"
        />
        <CollectionCard
          title=" قسمت ۹ فصل ۳ آپارات کست | گفت وگو با مریم امیری | موسس آموزشگاه
              عطر سیب"
          days_ago="2"
          photo="/assets/collection4.jpg"
          seen_count="29.6"
          teacher="رضا صادقی | Reza Sadeghi"
          teacher_photo="/assets/tc1.webp"
        />
        <CollectionCard
          title=" قسمت ۹ فصل ۳ آپارات کست | گفت وگو با مریم امیری | موسس آموزشگاه
              عطر سیب"
          days_ago="2"
          photo="/assets/collection2.webp"
          seen_count="29.6"
          teacher="رضا صادقی | Reza Sadeghi"
          teacher_photo="/assets/tc1.webp"
        />
        <CollectionCard
          title=" قسمت ۹ فصل ۳ آپارات کست | گفت وگو با مریم امیری | موسس آموزشگاه
              عطر سیب"
          days_ago="2"
          photo="/assets/collection1.webp"
          seen_count="29.6"
          teacher="رضا صادقی | Reza Sadeghi"
          teacher_photo="/assets/tc1.webp"
        />
        <CollectionCard
          title=" قسمت ۹ فصل ۳ آپارات کست | گفت وگو با مریم امیری | موسس آموزشگاه
              عطر سیب"
          days_ago="2"
          photo="/assets/collection4.jpg"
          seen_count="29.6"
          teacher="رضا صادقی | Reza Sadeghi"
          teacher_photo="/assets/tc1.webp"
        />
        <CollectionCard
          title=" قسمت ۹ فصل ۳ آپارات کست | گفت وگو با مریم امیری | موسس آموزشگاه
              عطر سیب"
          days_ago="2"
          photo="/assets/collection2.webp"
          seen_count="29.6"
          teacher="رضا صادقی | Reza Sadeghi"
          teacher_photo="/assets/tc1.webp"
        />
        <CollectionCard
          title=" قسمت ۹ فصل ۳ آپارات کست | گفت وگو با مریم امیری | موسس آموزشگاه
              عطر سیب"
          days_ago="2"
          photo="/assets/collection1.webp"
          seen_count="29.6"
          teacher="رضا صادقی | Reza Sadeghi"
          teacher_photo="/assets/tc1.webp"
        />
        <CollectionCard
          title=" قسمت ۹ فصل ۳ آپارات کست | گفت وگو با مریم امیری | موسس آموزشگاه
              عطر سیب"
          days_ago="2"
          photo="/assets/collection4.jpg"
          seen_count="29.6"
          teacher="رضا صادقی | Reza Sadeghi"
          teacher_photo="/assets/tc1.webp"
        />
        <CollectionCard
          title=" قسمت ۹ فصل ۳ آپارات کست | گفت وگو با مریم امیری | موسس آموزشگاه
              عطر سیب"
          days_ago="2"
          photo="/assets/collection2.webp"
          seen_count="29.6"
          teacher="رضا صادقی | Reza Sadeghi"
          teacher_photo="/assets/tc1.webp"
        />
        <CollectionCard
          title=" قسمت ۹ فصل ۳ آپارات کست | گفت وگو با مریم امیری | موسس آموزشگاه
              عطر سیب"
          days_ago="2"
          photo="/assets/collection1.webp"
          seen_count="29.6"
          teacher="رضا صادقی | Reza Sadeghi"
          teacher_photo="/assets/tc1.webp"
        />
        <CollectionCard
          title=" قسمت ۹ فصل ۳ آپارات کست | گفت وگو با مریم امیری | موسس آموزشگاه
              عطر سیب"
          days_ago="2"
          photo="/assets/collection2.webp"
          seen_count="29.6"
          teacher="رضا صادقی | Reza Sadeghi"
          teacher_photo="/assets/tc1.webp"
        />
        <CollectionCard
          title=" قسمت ۹ فصل ۳ آپارات کست | گفت وگو با مریم امیری | موسس آموزشگاه
              عطر سیب"
          days_ago="2"
          photo="/assets/collection1.webp"
          seen_count="29.6"
          teacher="رضا صادقی | Reza Sadeghi"
          teacher_photo="/assets/tc1.webp"
        />
        <CollectionCard
          title=" قسمت ۹ فصل ۳ آپارات کست | گفت وگو با مریم امیری | موسس آموزشگاه
              عطر سیب"
          days_ago="2"
          photo="/assets/collection3.webp"
          seen_count="29.6"
          teacher="رضا صادقی | Reza Sadeghi"
          teacher_photo="/assets/tc1.webp"
        />
        <CollectionCard
          title=" قسمت ۹ فصل ۳ آپارات کست | گفت وگو با مریم امیری | موسس آموزشگاه
              عطر سیب"
          days_ago="2"
          photo="/assets/collection2.webp"
          seen_count="29.6"
          teacher="رضا صادقی | Reza Sadeghi"
          teacher_photo="/assets/tc1.webp"
        />
        <CollectionCard
          title=" قسمت ۹ فصل ۳ آپارات کست | گفت وگو با مریم امیری | موسس آموزشگاه
              عطر سیب"
          days_ago="2"
          photo="/assets/collection1.webp"
          seen_count="29.6"
          teacher="رضا صادقی | Reza Sadeghi"
          teacher_photo="/assets/tc1.webp"
        />
        <CollectionCard
          title=" قسمت ۹ فصل ۳ آپارات کست | گفت وگو با مریم امیری | موسس آموزشگاه
              عطر سیب"
          days_ago="2"
          photo="/assets/collection3.webp"
          seen_count="29.6"
          teacher="رضا صادقی | Reza Sadeghi"
          teacher_photo="/assets/tc1.webp"
        />
      </div>
    </div>
  );
}
