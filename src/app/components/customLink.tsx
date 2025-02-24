"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Loader from "./loader";

interface Props {
  href: string;
  children: React.ReactNode;
  className: string;
}

// const Loader = () => <div className="loader">Loading...</div>;

const CustomLink = ({ href, children, className }: Props) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    setLoading(true);
    e.preventDefault();
    router.push(href);
  };

  return (
    <>
      <a
        className={className}
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      >
        {/* {loading ? <Loader /> : children} */}
        {loading && <Loader className="w-3" fill="black" />}
        {children}
      </a>
    </>
  );
};

export default CustomLink;
