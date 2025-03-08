import { Icons } from "@/app/components/Icons/Icons";
import Comment from "./comment";
import React, { useRef } from "react";

interface Props {
  className?: string;
}

const Comments = (props: Props) => {
  const commentsRef = useRef<HTMLDivElement>(null);
  return (
    <div
      className={`comments relative pt-0 rtl ${
        props.className && props.className
      }`}
    >
      <div className="bg-white dark:bg-dark sticky top-0 py-3 px-1">
        <div className="send_commentw-full rounded-lg p-2 flex justify-between bg-[#ededf1] dark:bg-[#f5f5f90f] hover:shadow-[0px_0px_0.5px_0.5px_gray]">
          <input
            type="text"
            placeholder="دیدگاه خود را وارد کنید..."
            className="w-full text-xs p-1 focus-visible:outline-none bg-transparent"
          />
          <Icons.clock className="w-5" />
        </div>
      </div>
      <div
        ref={commentsRef}
        className="comments_list flex flex-col gap-0 pb-12"
      >
        <p id="commentsHeader" className="text-sm font-bold px-3">کامنت ها</p>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
    </div>
  );
};

export default Comments;
