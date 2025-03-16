"use client";
import { Icons } from "@/app/components/ui/icons/Icons";
import { useModal } from "@/lib/contexts/modalContext";
import React from "react";
import VideoUploadForm from "./upload_video";
import { Collection } from "@prisma/client";

interface Props {
  collection: Collection;
}

const AddVideoButton = ({ collection }: Props) => {
  const { openModal } = useModal();
  return (
    <button
      onClick={() => openModal(<VideoUploadForm collection={collection} />)}
      className="flex gap-1 items-center bg-gray-100/10 ring-1 ring-gray-100 w-full p-1 rounded"
    >
      <div className="w-full text-start">
        <span className="text-[10px]"> افزودن ویدئو به </span>
        <p className="text-sm">{collection.Title}</p>
      </div>
      <div className="rounded-full p-1 w-fit">
        <Icons.add_image className="w-5" />
      </div>
    </button>
  );
};

export default AddVideoButton;
