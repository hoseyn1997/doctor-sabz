import React from "react";

interface Props {
  className: string;
}

export default function Pause({ className }: Props) {
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.00002 9.125V14.875C6.99816 15.1715 7.11417 15.4566 7.32252 15.6676C7.53087 15.8786 7.81451 15.9981 8.11102 16H9.22202C9.51854 15.9981 9.80217 15.8786 10.0105 15.6676C10.2189 15.4566 10.3349 15.1715 10.333 14.875V9.125C10.3349 8.82849 10.2189 8.54338 10.0105 8.3324C9.80217 8.12142 9.51854 8.00185 9.22202 8H8.11102C7.81451 8.00185 7.53087 8.12142 7.32252 8.3324C7.11417 8.54338 6.99816 8.82849 7.00002 9.125Z"
          stroke="#fff"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.667 9.125V14.875C13.6652 15.1715 13.7812 15.4566 13.9895 15.6676C14.1979 15.8786 14.4815 15.9981 14.778 16H15.889C16.1855 15.9981 16.4692 15.8786 16.6775 15.6676C16.8859 15.4566 17.0019 15.1715 17 14.875V9.125C17.0019 8.82849 16.8859 8.54338 16.6775 8.3324C16.4692 8.12142 16.1855 8.00185 15.889 8H14.778C14.4815 8.00185 14.1979 8.12142 13.9895 8.3324C13.7812 8.54338 13.6652 8.82849 13.667 9.125V9.125Z"
          stroke="#fff"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}
