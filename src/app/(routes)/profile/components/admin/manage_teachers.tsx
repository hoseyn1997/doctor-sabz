import { listTeachers } from "@/lib/db/queries/teacher.query";
import React from "react";
import { Teacher } from "@prisma/client";
import AddPhotoButton from "./add_photo_button";

const ManageTeachers = async () => {
  const teachers: Teacher[] = await listTeachers();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 rtl">
      {teachers.map((teacher) => (
        <div key={teacher.Id} className="grid h-full">
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
        </div>
      ))}
    </div>
  );
};

export default ManageTeachers;
