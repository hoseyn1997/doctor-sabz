import React from "react";
import Category from "./Category";
import { Icons } from "../common/Icons/Icons";

export default function Catergories() {
  return (
    <div>
      <div className="flex justify-between items-center mb-12 px-3 2xl:px-0 scale-90 md:scale-100">
        <div>
          <p className="text-xl font-bold">Top Categories</p>
          <p className="text-xs font-thin text-gray-500 mt-3">
            Explore our Popular Categories
          </p>
        </div>
        <button className="ring-1 ring-gray-600 p-2 rounded-full text-lg">
          All categories
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4 md:gap-8 mx-auto">
        <Category
          icon={<Icons.Art className="w-8 h-8" />}
          name="Art & Design"
          courses_count="38"
        />
        <Category
          icon={<Icons.Dev className="w-8 h-8" />}
          name="Development"
          courses_count="38"
        />
        <Category
          icon={<Icons.Communication className="w-8 h-8" />}
          name="Communication"
          courses_count="38"
        />
        <Category
          icon={<Icons.Video className="w-8 h-8" />}
          name="Videograyphy"
          courses_count="38"
        />
        <Category
          icon={<Icons.Photo className="w-8 h-8" />}
          name="Photography"
          courses_count="38"
        />
        <Category
          icon={<Icons.Market className="w-8 h-8" />}
          name="Marketing"
          courses_count="38"
        />
        <Category
          icon={<Icons.Content className="w-8 h-8" />}
          name="Content Writing"
          courses_count="38"
        />
        <Category
          icon={<Icons.Finanace className="w-8 h-8" />}
          name="Finance"
          courses_count="38"
        />
        <Category
          icon={<Icons.Science className="w-8 h-8" />}
          name="Science"
          courses_count="38"
        />
        <Category
          icon={<Icons.NewWork className="w-8 h-8" />}
          name="New Work"
          courses_count="38"
        />
      </div>
    </div>
  );
}
