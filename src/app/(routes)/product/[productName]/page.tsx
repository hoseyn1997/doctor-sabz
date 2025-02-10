import React from "react";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ productName: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { productName } = await params;
  return {
    title: `${productName} - Product Details`,
    description: `Details about the product ${productName} .`,
    // Add Open Graph metadata as needed
  };
};

export default async function page({ params, searchParams }: Props) {
  const { productName } = await params;
  const queryParams = await searchParams;
  return (
    <div className="min-h-screen bg-gray-50 example">
      <h1 className="text-gray-500 w-fit mx-auto my-2 text-3xl text-center p-5 bg-gray-100 rounded-lg">
        This is the profile of {productName.toUpperCase()}
      </h1>
      {queryParams && (
        <p className="text-gray-500 text-center">
          Query Parameters: {JSON.stringify(queryParams)}
        </p>
      )}
    </div>
  );
}
