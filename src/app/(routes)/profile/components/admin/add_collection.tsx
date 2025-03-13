"use client";
import { createCollection } from "@/lib/actions/collection.action";
import React, { useActionState } from "react";

export type CollectionState = {
  errors?: {
    title?: string[];
    content?: string[];
    description?: string[];
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
          type="text"
          name="title"
          placeholder="title"
          className="focus-visible:outline-none focus-visible:shadow-[0px_0px_1px_0px_gray] ring-1 ring-gray-200 rounded-xl p-2"
        />
        <input
          type="text"
          name="content"
          placeholder="content"
          className="focus-visible:outline-none focus-visible:shadow-[0px_0px_1px_0px_gray] ring-1 ring-gray-200 rounded-xl p-2"
        />
        <input
          type="text"
          name="description"
          placeholder="description"
          className="focus-visible:outline-none focus-visible:shadow-[0px_0px_1px_0px_gray] ring-1 ring-gray-200 rounded-xl p-2"
        />
        {state.errors && (
          <div className="flex flex-col gap-2 text-center">
            <p
              className={`text-red-400 text-xs ${
                state.errors.content && "p-2 ring-1 ring-red-300"
              } rounded-lg`}
            >
              {state?.errors?.content && state.errors.content}
            </p>
            <p
              className={`text-red-400 text-xs ${
                state.errors.description && "p-2 ring-1 ring-red-300"
              } rounded-lg`}
            >
              {state?.errors?.description && state.errors.description}
            </p>
            <p
              className={`text-red-400 text-xs ${
                state.errors.title && "p-2 ring-1 ring-red-300"
              } rounded-lg`}
            >
              {state?.errors?.title && state.errors.title}
            </p>
          </div>
        )}
        <button className="bg-teal-600 text-white font-bold rounded-md text-sm px-2 py-1">
          {pending ? "loading..." : "submit"}
        </button>
      </form>
    </div>
  );
};

export default AddCollection;
