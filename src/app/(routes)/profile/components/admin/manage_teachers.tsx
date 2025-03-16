import { listTeachers } from "@/lib/db/queries/teacher.query";
import React from "react";
import { Accordion } from "@/app/components/features/accordion";
import { Icons } from "@/app/components/ui/icons/Icons";
import Image from "next/image";
import AddPhotoButton from "./add_photo_button";

const ManageTeachers = async () => {
  const teachers = await listTeachers();
  return (
    <div className="gap-2 rtl rtl mx-auto max-w-2xl">
      <div className="flex justify-start items-center gap-2 mx-auto py-2">
        <Icons.graduate className="w-4 stroke-green-500" />
        <h1 className="text-xs font-bold py-1 text-green-500">مدیریت مدرسین</h1>
      </div>
      <Accordion
        items={teachers.map((teacher) => {
          return {
            title: teacher.FullName,
            content: (
              <div key={teacher.Id} className="grid gap-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2 p-2">
                    <Image
                      src={teacher.Photo?.Photo.FilePath || "/assets/tc1.webp"}
                      alt={teacher.FullName}
                      width={50}
                      height={50}
                      className="w-12 aspect-square rounded-full"
                    />
                    <div className="text-xs font-thin flex flex-col gap-1 justify-center">
                      <p>{teacher.FullName}</p>
                      <p>{teacher.ContactEmail}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="group rounded-full hover:bg-gray-100 dark:hover:bg-gray-400/40 w-6 h-6 transition-all flex justify-center items-center">
                      <Icons.trash className="w-3 group-hover:stroke-red-500" />
                    </button>
                    <button className="group rounded-full hover:bg-gray-100 dark:hover:bg-gray-400/40 w-6 h-6 transition-all flex justify-center items-center">
                      <Icons.settings className="w-3 group-hover:stroke-teal-500" />
                    </button>
                  </div>
                </div>
                <div className="flex gap-2 items-center text-xs">
                  <div className="p-1 rounded-full bg-gray-200 dark:bg-gray-500">
                    <Icons.phone className="w-3" />
                  </div>
                  <p>{teacher.ContactPhone}</p>
                </div>
                <div className="flex gap-2 items-start text-xs">
                  <div className="p-1 rounded-full bg-gray-200 dark:bg-gray-500">
                    <Icons.comment className="w-3" />
                  </div>
                  <p>{teacher.Bio}</p>
                </div>
                <AddPhotoButton teacher={teacher} />
              </div>
            ),
          };
        })}
      />
    </div>
  );
};

export default ManageTeachers;

{
  /* <div key={teacher.Id} className="grid h-full">
          <div className="grid gap-1 bg-gray-100 dark:bg-gray-50/5 rounded-t-xl text-xs p-2 shadow-[0px_0px_3px_0px_gray] h-44">
            <p
              className={`p-1 rounded-md text-center font-bold ${
                teacher.IsActive ? "bg-green-500" : "bg-red-500"
              }`}
            >
              فعال {teacher.IsActive ? "است" : "نیست"}
            </p>
            <p>نام: {teacher.FName}</p>
            <p>نام خانوادگی: {teacher.LName}</p>
            <p>نام کامل: {teacher.FullName}</p>
            <p>
              آخرین ویرایش:
              {teacher.UpdatedAt.toString()}
            </p>
            <p className="Just3Rows overflow-hidden">بایو: {teacher.Bio}</p>
          </div>
          <span className="text-[10px] p-1">افزودن تصویر:</span>
          <AddPhotoButton teacher={teacher} />
        </div> */
}
