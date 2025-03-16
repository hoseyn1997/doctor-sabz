import { prisma } from "@/lib/db/db";
import React from "react";
import { Accordion } from "@/app/components/features/accordion";
import AddVideoButton from "./add_video_button";
import { Icons } from "@/app/components/ui/icons/Icons";

const ManageCollections = async () => {
  const collections = await prisma.collection.findMany({
    include: {
      Photo: {
        include: { Photo: true },
      },
      Videos: {
        include: {
          Photo: {
            include: {
              Photo: true,
            },
          },
          Collection: {
            include: {
              Photo: {
                include: {
                  Photo: true,
                },
              },
              Teacher: true,
            },
          },
        },
      },
    },
  });
  return (
    <div className="rtl mx-auto max-w-2xl">
      <div className="flex justify-start items-center gap-2 mx-auto py-2">
        <Icons.video_list className="w-4 stroke-green-500" />
        <h1 className="text-xs font-bold py-1 text-green-500">
          مدیریت کالکشن ها
        </h1>
      </div>
      <Accordion
        items={collections.map((c, idx) => {
          return {
            title: idx + 1 + ". " + c.Title,
            content: (
              <div key={c.Id} className="flex flex-col gap-2 py-0.5">
                {c.Videos.map((v, v_idx) => (
                  <div
                    key={v.Id}
                    className="grid gap-0.5 cursor-pointer p-2"
                  >
                    <div className="flex justify-between items-center">
                      <p className="text-xs font-bold">
                        {v_idx + 1 + ". " + v.Title}
                      </p>
                      <div className="flex gap-2">
                        <button className="group rounded-full hover:bg-gray-100 dark:hover:bg-gray-400/40 w-6 h-6 transition-all flex justify-center items-center">
                          <Icons.trash className="w-3 group-hover:stroke-red-500" />
                        </button>
                        <button className="group rounded-full hover:bg-gray-100 dark:hover:bg-gray-400/40 w-6 h-6 transition-all flex justify-center items-center">
                          <Icons.settings className="w-3 group-hover:stroke-teal-500" />
                        </button>
                      </div>
                    </div>
                    <p className="Just4Rows text-[10px] text-gray-400 dark:text-gray-50">
                      {v.Description}
                    </p>
                  </div>
                ))}
                <AddVideoButton collection={c} />
              </div>
            ),
          };
        })}
      />
    </div>
  );
};

export default ManageCollections;
{
  /* <div
          key={c.Id}
          className="p-2 rounded-xl flex flex-col gap-2 ring-1 ring-orange-400"
        >
          <div className="border-solid border-b-2 border-b-gray-200 p-1">
            <div className="text-xl font-bold block md:flex gap-2">
              <span className="text-sm font-thin">عنوان: </span>
              <p className="text-center">{c.Title}</p>
            </div>
          </div>
          <p>لیست ویدئو ها:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {c.Videos.map((v, idx) => (
              <div
                className={`border-solid border-gray-200 border-[0.5px] ${
                  idx % 2 === 0
                    ? "border-r-0 rounded-l-xl"
                    : "border-l-0 rounded-r-xl"
                }`}
              >
                <VideoCard video={v} />
              </div>
            ))}
          </div>
          <AddVideoButton collection={c} />
        </div> */
}
