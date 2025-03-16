"use client";
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
      className="bg-gray-100 dark:bg-dark ring-1 ring-gray-300 my-5 p-5 flex flex-col justify-start items-center gap-3"
    >
      <input type="text" name="Title" placeholder="Title" />
      <input type="text" name="Description" placeholder="Description" />
      <input type="number" name="Order" placeholder="Order" />
      <input
        type="text"
        name="CollectionId"
        placeholder="CollectionId"
        hidden
        defaultValue={collection.Id}
      />
      <span>فایل ویدئو:</span>
      <input
        type="file"
        accept="video/*"
        name="file"
        className="text-xs bg-gray-400 text-white"
      />
      <span>تصویر ویدئو:</span>
      <input
        type="file"
        accept="image/*"
        name="photo_file"
        className="text-xs bg-gray-400 text-white"
      />

      <button
        type="submit"
        className="text-xs bg-teal-500 text-white p-2 rounded-md"
      >
        {pending ? "Uploading" : "Upload Video"}
      </button>
    </form>
  );
}
