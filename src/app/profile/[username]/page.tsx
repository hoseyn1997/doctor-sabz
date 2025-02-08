import { Metadata } from "next";
import React from "react";

export const generateMetadata = ({
  params,
}: {
  params: { username: string };
}): Metadata => {
  return {
    title: `Profile of ${params.username} - دکتر سبز`,
    description: `This is the profile page for ${params.username}.`,
    // Add Open Graph metadata as needed
  };
};

export default function page({ params }: { params: { username: string } }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <h1 className="text-gray-500 w-fit mx-auto my-2 text-3xl text-center p-5 bg-gray-100 rounded-lg">
        This is the profile of {params.username.toUpperCase()}
      </h1>
    </div>
  );
}
