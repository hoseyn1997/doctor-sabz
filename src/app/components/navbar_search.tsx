"use client";
import React, { useEffect, useRef, useState } from "react";

const NavbarSearch = () => {
  const [inputSearch, setInputSearch] = useState(false);
  const searchInputElem = useRef<HTMLInputElement | null>(null);

  // search config
  const [input, setInput] = useState<string>("");

  useEffect(() => {
    if (inputSearch) {
      searchInputElem.current?.classList.remove("opacity-0");
    } else {
      searchInputElem.current?.classList.add("opacity-0");
    }
  }, [inputSearch, searchInputElem]);

  return (
    <div
      className="group relative mx-auto w-4/5 md:w-1/3"
      onClick={() => {
        setInputSearch(true);
        // getLessonSearchValues();
      }}
      onBlur={() => setInputSearch(false)}
    >
      <div className="rtl group flex w-full cursor-text items-center gap-2 rounded-xl bg-gray-100/50 p-2 text-center transition-all hover:bg-gray-200">
        <span className="pr-2 text-xs font-bold text-gray-400">جستجو در</span>
        <span className="bg-gradient-to-r from-[#58c69a] to-[#0EA5E9] bg-clip-text font-lalezar_font font-bold leading-normal text-black text-transparent text-sm">
          ویدیو سبز
        </span>
      </div>
      <input
        ref={searchInputElem}
        //   value={input}
        //   onChange={handleInputChange}
        type="text"
        className="rtl absolute left-0 top-0 w-full rounded-xl bg-gray-50 p-2 px-5 text-gray-400 opacity-0 transition-opacity duration-500 focus-visible:outline-none"
      />
      <img
        className="absolute left-2 top-1 w-8 rounded-xl transition-all group-hover:p-1"
        src="/logo192.png"
        alt="knowledgland-logo"
      />
      <div className="example absolute top-12 z-30 max-h-52 w-full overflow-hidden overflow-y-scroll rounded-xl bg-white">
        {/* {filteredResults.map((value) => (
            <div
              key={value.id}
              onClick={() => router.navigate(`/lesson/${value.id}`)}
              className="rtl m-1 flex cursor-pointer items-center gap-2 rounded-xl bg-gray-50 p-2"
            >
              <img
                src={value.image}
                alt={value.title}
                className="aspect-square w-10 rounded-full object-cover"
              />
              <span className="text-sm font-bold text-gray-500">
                {value.title}
              </span>
              <span className="float-end text-xs font-bold text-gray-500">
                {value.price}
              </span>
            </div>
          ))} */}
      </div>
    </div>
  );
};

export default NavbarSearch;
