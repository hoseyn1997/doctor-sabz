import { Metadata } from "next";
import React from "react";

interface Props {
  params: Promise<{ username: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { username } = await params;
  return {
    title: `Profile of ${username} - ویدیو سبز`,
    description: `This is the profile page for ${username}.`,
    // Add Open Graph metadata as needed
  };
};

export default async function Page({ params, searchParams }: Props) {
  const { username } = await params;
  const queryParams = await searchParams;

  return (
    <div className="min-h-screen bg-gray-50">
      <h1 className="text-gray-500 w-fit mx-auto my-2 text-3xl text-center p-5 bg-gray-100 rounded-lg">
        This is the profile of {username.toUpperCase()}
      </h1>
      {queryParams && (
        <p className="text-gray-500 text-center">
          Query Parameters: {JSON.stringify(queryParams)}
        </p>
      )}
    </div>
  );
}
