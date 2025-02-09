import { Metadata } from "next";
import Player from "./customComponents/video/Player";
import Card from "./customComponents/video/Card";

export const metadata: Metadata = {
  title: "Home - دکتر سبز",
  description: "Welcome to دکتر سبز - Your education path awaits you.",
  keywords: "education, دکتر سبز, online learning",
  // Add Open Graph metadata as needed
};

export default async function Home() {
  // Fetch the product data on the server side
  // const products = await fetchProducts();

  return (
    <>
      {/* <main className="mx-auto max-w-full overflow-hidden">
        <div className="relative w-full h-[600px] home-bg">
          <div className="flex flex-col items-center gap-5 w-60 lg:w-[520px] text-center mx-auto lg:ml-60 pt-52 rtl">
            <p
              className="font-bold text-lg lg:text-5xl lg:leading-[80px] rtl z-10"
              style={{ fontFamily: "irYekanBold" }}
            >
              با یک برنامه مشخص قدم بردار
            </p>
            <p className="text-sm lg:text-lg rtl z-10">
              برای حرفه ای شدن نیاز به یه برنامه ی حرفه ای دارید. در یک مسیر
              مطمئن قدم بردار تا از آینده تحصیلی ات مطمئن بشی.
            </p>
            <button className="bg-green-500 text-white rounded-full h-12 w-44 z-10">
              دریافت برنامه تحصیلی
            </button>
          </div>
          <svg
            className="absolute bottom-0 left-0 w-80"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 638 448"
            fill="none"
          >
            <path
              opacity="0.2"
              d="M637.743 448C638.293 440.923 637.943 433.805 636.702 426.817C630.185 390.148 600.078 355.075 562.798 355.346C541.406 355.488 521.682 366.814 504.226 379.236C486.77 391.658 469.998 405.761 449.761 412.927C429.523 420.093 404.452 418.625 389.933 402.884C378.524 390.547 373.475 370.119 357.131 366.301C336.666 361.514 321.278 387.812 300.356 389.835C285.509 391.259 272.104 379.62 265.757 366.13C259.411 352.639 258.284 337.41 255.446 322.78C252.608 308.15 247.36 292.864 235.48 283.932C218.009 270.74 193.108 275.584 172.728 283.419C152.349 291.254 131.113 301.739 109.564 297.836C79.1294 292.337 61.0742 260.925 51.091 231.693C38.0943 194.011 31.2376 154.489 30.7824 114.635C30.5257 89.5487 32.7363 63.8352 25.2917 39.8881C20.2716 23.6764 9.26163 8.27677 -5 0V448H637.743Z"
              fill="#FFC634"
            />
          </svg>
          <svg
            className="absolute top-0 right-0 w-80"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 481 220"
            fill="none"
          >
            <path
              d="M481.445 0H0.718045C0.084067 20.4897 6.7904 40.532 19.6282 56.5139C34.0078 73.9977 54.7226 85.08 77.247 87.3397C96.4419 89.1395 115.637 84.3892 134.911 83.9222C154.186 83.4551 175.602 88.9003 185.98 105.145C199.582 126.424 188.258 155.188 195.469 179.407C203.535 206.462 234.622 221.966 262.68 219.152C290.738 216.339 315.514 198.955 334.766 178.302C354.018 157.649 369.055 133.464 387.031 111.684C398.058 98.3326 413.927 84.7424 430.627 89.3104C446.575 93.662 453.729 112.435 454.23 128.908C454.732 145.38 451.018 162.251 455.37 178.154C459.06 191.607 468.982 202.999 481.377 209.344L481.445 0Z"
              fill="#6dceae6a"
            />
          </svg>
          <Image
            src={"/scl1.png"}
            alt="scl1"
            className="absolute right-0 left-0 lg:right-10 top-10"
            width={900}
            height={419}
          />
          <Image
            src={"/girl.png"}
            alt="scl1"
            width={696}
            height={1043}
            className="absolute bottom-0 h-full aspect-video right-0 object-cover hidden lg:block"
          />
        </div>
        <div className="max-w-screen-container mx-auto">
          <div className="my-24 grid gap-20">
            <Catergories />
            <Courses />
            <LearnMore />
            <SiteReport />
            <SiteMore />
            <TopCourseInfo />
          </div>
        </div>
      </main> */}
      <div className="grid grid-cols-3 lg:p-6 lg:gap-5 gap-2">
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
    </>
  );
}
