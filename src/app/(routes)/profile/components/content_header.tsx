import { Icons } from "@/app/components/ui/icons/Icons";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { SearchParameters_admin, SearchParameters_user } from "@/app/(routes)/profile/components/dashboard";

interface Props {
  username: string;
  searchParameters: SearchParameters_admin | SearchParameters_user;
}

const ContentHeader = ({ username, searchParameters }: Props) => {
  return (
    <div className="flex justify-between items-center w-full md:w-3/5 mx-auto gap-5">
      <Link
        href={`/profile/${username}?tab=${searchParameters.tab}&content=${
          searchParameters.content
        }&menue=${searchParameters.menue == "true" ? "false" : "true"}`}
      >
        <Icons.menu className="w-7" />
      </Link>
      <div className="flex items-center w-full rounded-xl bg-gray-100/70 dark:bg-[#292b30] p-1 md:p-1.5 pr-5 shadow-[0px_0px_2px_#8080802b]">
        <button className="group rounded-full hover:bg-gray-100 dark:hover:bg-dark w-8 h-8 transition-all flex justify-center items-center">
          <Icons.search className="w-5 stroke-current" />
        </button>
        <input
          type="text"
          placeholder="اینجا سرچ کن..."
          className="rtl bg-transparent w-full focus-visible:outline-none p-1 md:p-1.5 text-sm placeholder:text-gray-400 dark:placeholder:text-gray-300/60 text-gray-300 placeholder:text-xs"
        />
      </div>
      <Image
        src="/assets/tc1.webp"
        alt="video-sabz"
        width={80}
        height={80}
        className="bg-gradient-to-r w-10 from-teal-100 via-teal-400 to-teal-500 rounded-full aspect-square"
      />
    </div>
  );
};

export default ContentHeader;
