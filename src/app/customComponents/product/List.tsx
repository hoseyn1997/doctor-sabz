"use client";
import useProductStore from "@/store/productStore";
import React, { useEffect } from "react";
import Card from "./Card";
import { Product } from "@/lib/types/Product";

interface Props {
  initialProducts: Product[];
}

export default function List({ initialProducts }: Props) {
  const setProducts = useProductStore((state) => state.setProducts);

  useEffect(() => {
    setProducts(initialProducts);
  }, [initialProducts, setProducts]);

  const products = useProductStore((state) => state.products);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {products?.map((product) => (
        <Card product={product} key={product.id} />
      ))}
    </div>
  );
}
