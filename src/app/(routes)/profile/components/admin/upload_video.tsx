"use client";
import { Icons } from "@/app/components/ui/icons/Icons";
import CustomTextArea from "@/app/components/ui/input/custom_text_area";
import CustomTextInput from "@/app/components/ui/input/custom_text_input";
import { addVideoToCollection } from "@/lib/actions/collection.action";
import { Collection } from "@prisma/client";
import { useActionState, useState } from "react";

interface Props {
  collection: Collection;
}

export type add_video_state = {
  data: string;
};

export default function VideoUploadForm({ collection }: Props) {
  const initialState: add_video_state = { data: "" };
  const [state, formAction, pending] = useActionState<
    add_video_state,
    FormData
  >(addVideoToCollection, initialState);

  return (
    <form
      action={formAction}
      className="flex flex-col gap-1 my-5 p-1.5 pb-3 sm:p-5 rtl"
    >
      <div className="flex justify-start items-center gap-2 py-2">
        <Icons.add className="w-4 stroke-green-500" />
        <h1 className="text-xs font-bold py-1 text-green-500">افزودن ویدئو</h1>
      </div>
      <CustomTextInput type="text" placeholder="عنوان ویدئو" name="Title" />
      <CustomTextArea
        name="Description"
        placeholder="توضیحات ویدئو"
        icon="star"
      />
      <CustomTextInput
        type="number"
        name="Order"
        inputMode="decimal"
        placeholder="ترتیب ویدئو"
        icon="vertical_dots"
      />
      <input
        type="text"
        name="CollectionId"
        placeholder="CollectionId"
        hidden
        defaultValue={collection.Id}
      />
      <span className="text-[10px] font-thin">فایل ویدئو:</span>
      <CustomTextInput
        type="file"
        accept="video/*"
        name="file"
        icon="clapperboard"
      />
      <span className="text-[10px] font-thin">تصویر ویدئو:</span>
      <CustomTextInput
        type="file"
        accept="image/*"
        name="photo_file"
        icon="add_image"
      />
      {state.data && state.data[0] === "e" ? (
        <>
          <span className="text-[10px] text-red-500">{"=> "}خطای سیستمی:</span>
          <p className="text-xs font-bold ring-[0.5px] ring-red-400 text-red-400 p-3 w-full text-center rounded-md">
            {state.data.split("-")[1]}
          </p>
        </>
      ) : state.data[0] === "s" ? (
        <p className="text-xs font-bold ring-[0.5px] ring-green-400 text-green-400 p-3 w-full text-center rounded-md">
          {state.data.split("-")[1]}
        </p>
      ) : null}
      <button
        disabled={pending}
        type="submit"
        className="text-xs bg-teal-500 hover:bg-teal-400 transition-all duration-200 text-white p-2 rounded-md disabled:opacity-70"
      >
        {pending ? "Uploading..." : "Upload Video"}
      </button>
    </form>
  );
}
