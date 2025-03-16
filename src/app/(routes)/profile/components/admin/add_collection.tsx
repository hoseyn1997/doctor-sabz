"use client";
import { createCollection } from "@/lib/actions/collection.action";
import React, { useActionState } from "react";
import CustomTextInput from "@/app/components/ui/input/custom_text_input";
import CustomTextArea from "@/app/components/ui/input/custom_text_area";
import { Icons } from "@/app/components/ui/icons/Icons";

export type CollectionState = {
  errors?: {
    Title?: string[];
    Cost?: string[];
    DisCount?: string[];
    Description?: string[];
    TeacherId?: string[];
  };
  message?: string | null;
  success?: boolean;
};

const AddCollection = () => {
  const initialState: CollectionState = { message: null, success: false };
  const [state, formAction, pending] = useActionState<
    CollectionState,
    FormData
  >(createCollection, initialState);
  return (
    <div>
      <form
        action={formAction}
        className="flex flex-col gap-2 w-full md:w-1/2 lg:w-1/3 px-1 mx-auto rtl"
      >
        <div className="flex justify-start items-center gap-2">
          <Icons.add className="w-4 stroke-green-500" />
          <h1 className="text-xs font-bold py-1 text-green-500">
            افزودن کالکشن جدید
          </h1>
        </div>
        <CustomTextInput
          type="file"
          name="file"
          accept="image/*"
          icon="add_image"
        />
        <CustomTextInput type="text" name="Title" placeholder="عنوان کالکشن" />
        <CustomTextInput
          type="text"
          name="Cost"
          icon="toman"
          placeholder="قیمت کالکشن"
        />
        <CustomTextInput
          type="text"
          name="DisCount"
          icon="toman"
          placeholder="میزان تخفیف کالکشن"
        />
        <CustomTextArea name="Description" icon="star" placeholder="توضیحات" />
        <CustomTextInput
          type="text"
          name="TeacherPhone"
          inputMode="tel"
          icon="phone"
          placeholder="شماره موبایل مدرس"
        />
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
        <button className="text-xs bg-teal-500 hover:bg-teal-400 transition-all duration-200 text-white p-2 rounded-md disabled:opacity-70">
          {pending ? "در حال ارسال..." : "ارسال"}
        </button>
      </form>
    </div>
  );
};

export default AddCollection;
