import React from "react";

interface Props {
  className: string;
}
export default function SearchIcon({ className }: Props) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.16663 3.33332C5.94496 3.33332 3.33329 5.94499 3.33329 9.16666C3.33329 12.3883 5.94496 15 9.16663 15C12.3883 15 15 12.3883 15 9.16666C15 5.94499 12.3883 3.33332 9.16663 3.33332ZM1.66663 9.16666C1.66663 5.02452 5.02449 1.66666 9.16663 1.66666C13.3088 1.66666 16.6666 5.02452 16.6666 9.16666C16.6666 13.3088 13.3088 16.6667 9.16663 16.6667C5.02449 16.6667 1.66663 13.3088 1.66663 9.16666Z"
        fill="#4ade80"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.2858 13.2858C13.6113 12.9603 14.1389 12.9603 14.4643 13.2858L18.0893 16.9108C18.4148 17.2362 18.4148 17.7638 18.0893 18.0893C17.7639 18.4147 17.2363 18.4147 16.9108 18.0893L13.2858 14.4643C12.9604 14.1388 12.9604 13.6112 13.2858 13.2858Z"
        fill="#4ade80"
      />
    </svg>
  );
}
