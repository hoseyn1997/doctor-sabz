import React from "react";

interface Props {
  className: string;
}

export default function ProveIcon({ className }: Props) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 17 16"
      fill="none"
    >
      <g clipPath="url(#clip0_2228_877)">
        <path
          d="M6.49998 10.7799L3.71998 7.9999L2.77332 8.9399L6.49998 12.6666L14.5 4.66656L13.56 3.72656L6.49998 10.7799Z"
          fill="#55BE24"
        />
      </g>
      <defs>
        <clipPath id="clip0_2228_877">
          <rect
            width={16}
            height={16}
            fill="white"
            transform="translate(0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
