"use client";
import { Icons } from "@/app/components/ui/icons/Icons";
import React, { useActionState, useState } from "react";
import { Teacher } from "@prisma/client";
import { add_teacher_photo } from "@/lib/actions/teacher.action";
import { useModal } from "@/lib/contexts/modalContext";

interface Props {
  teacher: Teacher;
}

export type addPhotoState = {
  errors?: {
    entity?: string[];
    file?: string[];
  };
  message?: string | null;
  success?: boolean;
};

const AddItemPhoto = ({ teacher }: Props) => {

  const [entity, setEntity] = useState("user");
  const initialState: addPhotoState = { message: null, success: false };
  const [state, formAction, pending] = useActionState<addPhotoState, FormData>(
    add_teacher_photo,
    initialState
  );
  return (
    <div>
      <form
        action={formAction}
        className="grid gap-3 p-3 my-4 text-xs bg-gray-100 dark:bg-gray-50/5 rounded-b-xl rtl "
      >
        <input type="text" name="teacherId" hidden defaultValue={teacher.Id} />
        <input type="file" title="file" name="file" />
        <select
          name="entity"
          value={entity}
          onChange={(e) => setEntity(e.target.value)}
          //   defaultValue="user"
          className="bg-gray-100 dark:bg-gray-50/5 ring-[0.5px] ring-orange-400 p-0.5"
        >
          <option
            className="bg-gray-100 dark:bg-gray-50/5 text-black"
            value="user"
          >
            کاربر
          </option>
          <option
            className="bg-gray-100 dark:bg-gray-50/5 text-black"
            value="teacher"
          >
            مدرس
          </option>
          <option
            className="bg-gray-100 dark:bg-gray-50/5 text-black"
            value="collection"
          >
            کالکشن
          </option>
          <option
            className="bg-gray-100 dark:bg-gray-50/5 text-black"
            value="video"
          >
            ویدئو
          </option>
        </select>
        {!state.success && state.errors && (
          <p className="text-[10px] ring-1 ring-red-400 rounded-lg p-1">
            مشکلی رخ داده است. دوباره تلاش کنید
          </p>
        )}
        <button
          className="p-2 flex justify-center items-center gap-2 bg-teal-100 dark:bg-teal-900 w-full my-0.5 
        shadow-[0px_0px_3px_0px_gray] rounded-b-xl text-sm h-9"
        >
          {pending ? (
            "در حال افزودن"
          ) : (
            <Icons.add_image className="w-5 stroke-current" />
          )}
        </button>
      </form>
    </div>
  );
};

export default AddItemPhoto;
