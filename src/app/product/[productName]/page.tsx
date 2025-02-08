import React from "react";
import type { Metadata } from "next";

export const generateMetadata = ({
  params,
}: {
  params: { productName: string };
}): Metadata => {
  return {
    title: `${params.productName} - Product Details`,
    description: `Details about the product ${params.productName}.`,
    // Add Open Graph metadata as needed
  };
};

export default function page({ params }: { params: { productName: string } }) {
  return (
    <div className="min-h-screen bg-gray-50 example">
      <h1 className="text-gray-500 w-fit mx-auto my-2 text-3xl text-center p-5 bg-gray-100 rounded-lg">
        This is the product of {params.productName.toUpperCase()}
      </h1>
    </div>
  );
}


