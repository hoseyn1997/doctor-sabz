"use client";
import { add_teacher } from "@/lib/actions/teacher.action";
import React, { useActionState } from "react";

export type teacherState = {
  errors?: {
    FName?: string[];
    LName?: string[];
    Bio?: string[];
    ContactPhone?: string[];
    ContactEmail?: string[];
    IsActive?: string[];
    file?: string[];
  };
  message?: string | null;
  success?: boolean;
};

const AddTeacher = () => {
  const initialState: teacherState = { message: null, success: false };
  const [state, formAction, pending] = useActionState<teacherState, FormData>(
    add_teacher,
    initialState
  );
  return (
    <div>
      <form
        action={formAction}
        className="flex flex-col gap-2 w-full md:w-1/2 lg:w-1/3 px-1 mx-auto"
      >
        <input
          type="file"
          title="file"
          name="file"
          className="focus-visible:outline-none focus-visible:shadow-[0px_0px_1px_0px_gray] ring-1 ring-gray-200 rounded-xl p-2 placeholder:text-center text-center bg-none"
        />
        <input
          type="text"
          name="fName"
          placeholder="نام مدرس"
          className="focus-visible:outline-none focus-visible:shadow-[0px_0px_1px_0px_gray] ring-1 ring-gray-200 rounded-xl p-2 placeholder:text-center text-center bg-none"
        />
        <input
          type="text"
          name="lName"
          placeholder="نام خانوادگی مدرس"
          className="focus-visible:outline-none focus-visible:shadow-[0px_0px_1px_0px_gray] ring-1 ring-gray-200 rounded-xl p-2 placeholder:text-center text-center bg-none"
        />
        <input
          type="text"
          name="phone"
          minLength={11}
          maxLength={11}
          inputMode="tel"
          placeholder="شماره تلفن"
          className="focus-visible:outline-none focus-visible:shadow-[0px_0px_1px_0px_gray] ring-1 ring-gray-200 rounded-xl p-2 placeholder:text-center text-center bg-none"
        />
        <input
          type="text"
          name="email"
          placeholder="ایمیل مدرس"
          className="focus-visible:outline-none focus-visible:shadow-[0px_0px_1px_0px_gray] ring-1 ring-gray-200 rounded-xl p-2 placeholder:text-center text-center bg-none"
        />
        <textarea
          rows={3}
          name="bio"
          placeholder="توضیحات"
          className="focus-visible:outline-none focus-visible:shadow-[0px_0px_1px_0px_gray] ring-1 ring-gray-200 rounded-xl p-2 placeholder:text-center text-center bg-none"
        />
        {state.errors && (
          <p className="text-red-400 text-xs p-2 ring-1 ring-red-300 rounded-lg`">
            مشکلی رخ داد. دوباره تلاش کنید
          </p>
        )}
        <button
          className={`bg-teal-600 text-white font-bold rounded-md text-sm px-2 py-1 hover:opacity-85 transition-all duration-300 ${
            pending && ""
          }`}
        >
          {pending ? "loading..." : "submit"}
        </button>
      </form>
      {state.success && (
        <p className="text-green-600 text-center font-bold text-xs">
          عملیات با موفقیت انجام شد
        </p>
      )}
    </div>
  );
};

export default AddTeacher;
