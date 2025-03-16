"use client";
import { Icons } from "@/app/components/ui/icons/Icons";
import CustomTextArea from "@/app/components/ui/input/custom_text_area";
import CustomTextInput from "@/app/components/ui/input/custom_text_input";
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
        className="flex flex-col gap-2 w-full md:w-1/2 lg:w-1/3 px-1 mx-auto rtl"
      >
        <div className="flex justify-start items-center gap-2">
          <Icons.add_user className="w-4 stroke-green-500" />
          <h1 className="text-xs font-bold py-1 text-green-500">
            افزودن مدرس جدید
          </h1>
        </div>
        <CustomTextInput
          type="file"
          name="file"
          accept="image/*"
          icon="add_image"
        />
        <CustomTextInput type="text" name="fName" placeholder="نام مدرس" />
        <CustomTextInput
          type="text"
          name="lName"
          placeholder="نام خانوادگی مدرس"
        />
        <CustomTextInput
          type="text"
          name="phone"
          minLength={11}
          maxLength={11}
          inputMode="tel"
          placeholder="شماره موبایل مدرس"
          icon="phone"
        />
        <CustomTextInput
          type="text"
          name="email"
          placeholder="ایمیل مدرس"
          icon="email"
        />
        <CustomTextArea name="bio" placeholder="توضیحات" icon="star" />
        {state.errors && (
          <>
            <span className="text-[10px] text-red-500">
              {"=> "}خطای سیستمی:
            </span>
            <p className="text-xs font-bold ring-[0.5px] ring-red-400 text-red-400 p-3 w-full text-center rounded-md">
              مشکلی رخ داد. دوباره تلاش کنید
            </p>
          </>
        )}
        {state.success && (
          <p className="text-xs font-bold ring-[0.5px] ring-green-400 text-green-400 p-3 w-full text-center rounded-md">
            عملیات با موفقیت انجام شد
          </p>
        )}
        <button
          disabled={pending}
          className="text-xs bg-teal-500 hover:bg-teal-400 transition-all duration-200 text-white p-2 rounded-md disabled:opacity-70"
        >
          {pending ? "در حال ارسال..." : "ارسال"}
        </button>
      </form>
    </div>
  );
};

export default AddTeacher;
