import { Icons } from "@/app/components/ui/icons/Icons";
import React, { useState } from "react";

const Comment = () => {
  const [like, setLike] = useState(false);
  const [disLike, setDisLike] = useState(false);
  return (
    <div className="comment flex items-start justify-start gap-3 p-3 shadow-[0px_1px_0px_0px_#80808052]">
      <div>
        <Icons.teacher className="w-5" />
      </div>
      <div className="grid gap-2">
        <div className="flex items_center gap-2 text-[10px]">
          <p className=" text-gray-500 hover:text-gray-400 cursor-pointer">
            محمد مهدی | mohammad_m
          </p>
          <p className="text-gray-400">14 ساعت پیش</p>
        </div>
        <p className="text-[10px]">
          ویژگی‌های اضافی: Tailwind بعنوان فریمورکی به حساب می‌آید که در بخش
          فرانت-اند وبسایت‌ها اجرا می‌شود. به همین دلیل توسعه‌دهندگان باید
          انتظارات حداکثری از این فریمورک داشته باشند. Tailwind نیز این انتظارات
          را به جای خواهد آورد چرا که توسعه‌دهندگان این فریمورک با دیگر
          فریمورک‌های قبل از خود کار کرده
        </p>

        <div className="flex items-center justify-start gap-2">
          {!like &&
          <button
          onClick={() => {
            if (!disLike) {
              setLike(false);
            }
            setDisLike(!disLike);
          }}
          className="p-1.5 dark:bg-gray-100/20 bg-gray-100/90 rounded-full"
          >
            <Icons.thumbs_down
              className={`w-4 ${disLike && "fill-orange-800"} ${
                disLike && "thumbsing_up_down_animation"
                }`}
                />
          </button>
              }
          {!disLike && (
            <button
              onClick={() => {
                if (!like) {
                  setDisLike(false);
                }
                setLike(!like);
              }}
              className="p-1.5 dark:bg-gray-100/20 bg-gray-100/90 rounded-full"
            >
              <Icons.thumbs_up
                className={`w-4 ${like && "fill-teal-500"} ${
                  like && "thumbsing_up_down_animation"
                }`}
              />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Comment;
