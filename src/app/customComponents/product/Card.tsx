import Image from "next/image";
import { Icons } from "../common/Icons/Icons";
import { Product } from "@/lib/types/Product";

interface Props {
  product: Product;
}

export default function Card({ product }: Props) {
  return (
    <div className="relative mx-auto flex w-96 flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white hover:text-black sm:w-80 md:w-full dark:border-none">
      <div className="h-[12rem]">
        <Image
          src={product.photo}
          alt={product.title}
          width={100}
          height={100}
          className="block h-full w-full cursor-pointer rounded-md object-cover"
        />
      </div>
      <div className="rtl flex-grow px-5 pb-5 pt-4">
        <h4 className="rtl Just2Rows -word-spacing-1 mx-2 mb-3 font-lalezar_font text-xl">
          {product.title}
        </h4>
        <p className="Just3Rows mx-auto line-clamp-2 p-1 opacity-70">
          {product.description}...
        </p>
      </div>
      <div className="rtl mx-5 flex items-center justify-between gap-5 border-b border-b-neutral-200/70 pb-3 dark:border-b-white/10">
        <div className="flex items-center gap-1 text-gray-500">
          <Icons.Profile className="w-10" />
          <div className="transition-all hover:text-green-400 ">
            {product.hostDisplayname}
          </div>
        </div>
        <div className="text-gray-500">
          <span className="px-2">5.0</span>
        </div>
      </div>
      <div className="rtl flex items-center justify-between px-5 py-2">
        <div className="flex items-center gap-0">
          <Icons.Users className="w-10" />
          <p className="text-sm text-gray-400">
            {product.attendeesCount + (product.isHost ? 0 : 23)}
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <span className="-mb-1.5 ml-7 text-sm text-gray-400 line-through dark:text-white/70">
            {Number(product?.disCount) > 0 &&
              Number(product.cost).toLocaleString()}
          </span>
          <p className="font-danaDemiBold text-xl text-green-500">
            {Number(product?.cost) - Number(product?.disCount) > 0 ? (
              <span className="flex gap-1">
                {(
                  Number(product?.cost) - Number(product?.disCount)
                ).toLocaleString()}
                <Icons.Toman className="w-5" />
              </span>
            ) : (
              <span>رایگان</span>
            )}
          </p>
        </div>
      </div>

      {!product.isActive && (
        <label
          onClick={(ev) => ev.preventDefault()}
          className="absolute right-1 top-1 rounded-full 
              bg-red-500 p-1 font-bold text-white"
        >
          غیرفعال
        </label>
      )}
      {Number(product?.disCount) > 0 && product && (
        <span className="absolute right-2 top-2 -rotate-12 rounded-md bg-white p-1 ring-1 ring-green-400">
          {Math.floor(
            (Number(product?.disCount) / Number(product?.cost)) * 100
          )}
          %
        </span>
      )}
    </div>
  );
}
