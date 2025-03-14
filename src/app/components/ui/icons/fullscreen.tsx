import React from "react";

interface Props {
  className: string;
}

export default function FullScreen({ className }: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
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
          d="M10 5.75C10.4142 5.75 10.75 5.41421 10.75 5C10.75 4.58579 10.4142 4.25 10 4.25V5.75ZM10 19.75C10.4142 19.75 10.75 19.4142 10.75 19C10.75 18.5858 10.4142 18.25 10 18.25V19.75ZM14 18.25C13.5858 18.25 13.25 18.5858 13.25 19C13.25 19.4142 13.5858 19.75 14 19.75V18.25ZM14 4.25C13.5858 4.25 13.25 4.58579 13.25 5C13.25 5.41421 13.5858 5.75 14 5.75V4.25ZM10 4.25H9V5.75H10V4.25ZM9 4.25C6.37665 4.25 4.25 6.37665 4.25 9H5.75C5.75 7.20507 7.20507 5.75 9 5.75V4.25ZM4.25 9V15H5.75V9H4.25ZM4.25 15C4.25 17.6234 6.37665 19.75 9 19.75V18.25C7.20507 18.25 5.75 16.7949 5.75 15H4.25ZM9 19.75H10V18.25H9V19.75ZM14 19.75H15V18.25H14V19.75ZM15 19.75C17.6234 19.75 19.75 17.6234 19.75 15H18.25C18.25 16.7949 16.7949 18.25 15 18.25V19.75ZM19.75 15V9H18.25V15H19.75ZM19.75 9C19.75 6.37665 17.6234 4.25 15 4.25V5.75C16.7949 5.75 18.25 7.20507 18.25 9H19.75ZM15 4.25H14V5.75H15V4.25Z"
          fill="#ffffff"
        />
      </g>
    </svg>
  );
}
