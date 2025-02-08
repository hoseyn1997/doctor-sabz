import React from "react";

interface Props {
  className: string;
}

export default function ArrowDown({ className }: Props) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 17 16"
      fill="none"
    >
      <g clipPath="url(#clip0_2204_236)">
        <path
          d="M11.2104 5.72665L8.15039 8.77999L5.09039 5.72665L4.15039 6.66665L8.15039 10.6667L12.1504 6.66665L11.2104 5.72665Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_2204_236">
          <rect
            width={16}
            height={16}
            fill="white"
            transform="translate(0.150391)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
