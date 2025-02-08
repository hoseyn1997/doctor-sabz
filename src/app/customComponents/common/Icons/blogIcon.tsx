import React from "react";

interface Props {
  className: string;
}

export default function blogIcon({ className }: Props) {
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
          d="M5.5 10V16C5.5 18.2091 7.29086 20 9.5 20H15.5C17.7091 20 19.5 18.2091 19.5 16V10C19.5 7.79086 17.7091 6 15.5 6H9.5C7.29086 6 5.5 7.79086 5.5 10Z"
          stroke="#9ca3af"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.75 7C13.75 7.41421 14.0858 7.75 14.5 7.75C14.9142 7.75 15.25 7.41421 15.25 7H13.75ZM15.25 4C15.25 3.58579 14.9142 3.25 14.5 3.25C14.0858 3.25 13.75 3.58579 13.75 4H15.25ZM9.75 7C9.75 7.41421 10.0858 7.75 10.5 7.75C10.9142 7.75 11.25 7.41421 11.25 7H9.75ZM11.25 4C11.25 3.58579 10.9142 3.25 10.5 3.25C10.0858 3.25 9.75 3.58579 9.75 4H11.25ZM15.5 10.75C15.9142 10.75 16.25 10.4142 16.25 10C16.25 9.58579 15.9142 9.25 15.5 9.25V10.75ZM9.5 9.25C9.08579 9.25 8.75 9.58579 8.75 10C8.75 10.4142 9.08579 10.75 9.5 10.75V9.25ZM15.5 13.75C15.9142 13.75 16.25 13.4142 16.25 13C16.25 12.5858 15.9142 12.25 15.5 12.25V13.75ZM9.5 12.25C9.08579 12.25 8.75 12.5858 8.75 13C8.75 13.4142 9.08579 13.75 9.5 13.75V12.25ZM12.5 16.75C12.9142 16.75 13.25 16.4142 13.25 16C13.25 15.5858 12.9142 15.25 12.5 15.25V16.75ZM9.5 15.25C9.08579 15.25 8.75 15.5858 8.75 16C8.75 16.4142 9.08579 16.75 9.5 16.75V15.25ZM15.25 7V4H13.75V7H15.25ZM11.25 7V4H9.75V7H11.25ZM15.5 9.25H9.5V10.75H15.5V9.25ZM15.5 12.25H9.5V13.75H15.5V12.25ZM12.5 15.25H9.5V16.75H12.5V15.25Z"
          fill="#9ca3af"
        />
      </g>
    </svg>
  );
}
