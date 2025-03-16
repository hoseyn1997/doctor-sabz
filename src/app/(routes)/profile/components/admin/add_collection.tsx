"use client";
import { createCollection } from "@/lib/actions/collection.action";
import React, { useActionState } from "react";
import VideoUploadForm from "./upload_video";

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
        className="flex flex-col gap-2 w-full md:w-1/2 lg:w-1/3 px-1 mx-auto"
      >
        <input
          type="file"
          title="file"
          name="file"
          className="focus-visible:outline-none focus-visible:shadow-[0px_0px_1px_0px_gray] ring-1 ring-gray-200 rounded-xl p-2"
        />
        <input
          type="text"
          name="Title"
          placeholder="Title"
          className="focus-visible:outline-none focus-visible:shadow-[0px_0px_1px_0px_gray] ring-1 ring-gray-200 rounded-xl p-2"
        />
        <input
          type="text"
          name="Cost"
          placeholder="Cost"
          className="focus-visible:outline-none focus-visible:shadow-[0px_0px_1px_0px_gray] ring-1 ring-gray-200 rounded-xl p-2"
        />
        <input
          type="text"
          name="DisCount"
          placeholder="DisCount"
          className="focus-visible:outline-none focus-visible:shadow-[0px_0px_1px_0px_gray] ring-1 ring-gray-200 rounded-xl p-2"
        />
        <input
          type="text"
          name="Description"
          placeholder="Description"
          className="focus-visible:outline-none focus-visible:shadow-[0px_0px_1px_0px_gray] ring-1 ring-gray-200 rounded-xl p-2"
        />
        <input
          type="text"
          name="TeacherPhone"
          placeholder="TeacherPhone"
          inputMode="tel"
          className="focus-visible:outline-none focus-visible:shadow-[0px_0px_1px_0px_gray] ring-1 ring-gray-200 rounded-xl p-2"
        />

        {state.errors && (
          <p className="text-red-400 text-xs p-2 ring-1 ring-red-300 rounded-lg">
            مشکلی رخ داد. دوباره تلاش کنید
          </p>
        )}
        <button className="bg-teal-600 text-white font-bold rounded-md text-sm px-2 py-1">
          {pending ? "loading..." : "submit"}
        </button>
      </form>
    </div>
  );
};

export default AddCollection;
