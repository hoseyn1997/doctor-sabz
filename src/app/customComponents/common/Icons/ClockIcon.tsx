import React from "react";

interface Props {
  className: string;
}

export default function ClockIcon({ className }: Props) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 14"
      fill="none"
    >
      <path
        d="M7.00001 0.333252C3.33334 0.333252 0.333344 3.33325 0.333344 6.99992C0.333344 10.6666 3.33334 13.6666 7.00001 13.6666C10.6667 13.6666 13.6667 10.6666 13.6667 6.99992C13.6667 3.33325 10.6667 0.333252 7.00001 0.333252ZM9.80001 9.79992L6.33334 7.66659V3.66659H7.33334V7.13325L10.3333 8.93325L9.80001 9.79992Z"
        fill="#FF782D"
      />
    </svg>
  );
}
