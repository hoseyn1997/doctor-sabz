import React from "react";

interface Props {
  className: string;
}

export default function productIcon({ className }: Props) {
  return (
    <svg
      className={className}
      viewBox="0 -0.5 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth={0} />
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g id="SVGRepo_iconCarrier">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.50108 7.72905V12.871C5.45464 14.7169 6.91225 16.2515 8.75808 16.3H16.2431C18.0893 16.2521 19.5475 14.7173 19.5011 12.871V7.72905C19.5475 5.88317 18.0899 4.34858 16.2441 4.30005H8.75808C6.91225 4.34858 5.45464 5.88317 5.50108 7.72905Z"
          stroke="#9ca3af"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.5011 19.3H17.5011"
          stroke="#9ca3af"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}
