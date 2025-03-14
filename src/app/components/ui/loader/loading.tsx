import React from "react";

interface Props {
  className: string;
}

const Loading = ({ className }: Props) => {
  return (
    <svg
      className={"animate-spin " + className}
      viewBox="0 0 36 36"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      data-icon="spin"
    >
      <defs>
        <linearGradient
          x1="0%"
          y1="100%"
          x2="100%"
          y2="100%"
          id="linearGradient-1"
        >
          <stop stopColor="currentColor" stopOpacity={0} offset="0%" />
          <stop
            stopColor="currentColor"
            stopOpacity="0.50"
            offset="39.9430698%"
          />
          <stop stopColor="currentColor" offset="100%" />
        </linearGradient>
      </defs>
      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
        <rect
          fillOpacity="0.01"
          fill="none"
          x={0}
          y={0}
          width={36}
          height={36}
        />
        <path
          d="M34,18 C34,9.163444 26.836556,2 18,2 C11.6597233,2 6.18078805,5.68784135 3.59122325,11.0354951"
          stroke="url(#linearGradient-1)"
          strokeWidth={4}
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
};

export default Loading;
