"use client";
import React from "react";
import AddItemPhoto from "./add_item_photo";
import { useModal } from "@/lib/contexts/modalContext";
import { Teacher } from "@prisma/client";

interface Props {
  teacher: Teacher;
}

const AddPhotoButton = ({ teacher }: Props) => {
  const { openModal } = useModal();
  return (
    <button onClick={() => openModal(<AddItemPhoto teacher={teacher} />)}>
      افزودن تصویر
    </button>
  );
};

export default AddPhotoButton;
