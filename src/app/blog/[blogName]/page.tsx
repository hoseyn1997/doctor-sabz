import { Metadata } from "next";
import React from "react";

export const generateMetadata = ({
  params,
}: {
  params: { blogName: string };
}): Metadata => {
  return {
    title: `${params.blogName} - My Next.js Blog`,
    description: `Read the latest blog post about ${params.blogName}.`,
    // Add Open Graph metadata as needed
  };
};

export default function page({ params }: { params: { blogName: string } }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <h1 className="text-gray-500 w-fit mx-auto my-2 text-3xl text-center p-5 bg-gray-100 rounded-lg">
        This is the blog of {params.blogName.toUpperCase()}
      </h1>
    </div>
  );
}
