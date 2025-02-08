interface Props {
  className: string;
  onClick?: () => void;
  fill?: string;
}

export default function ProfileIcon({ className, onClick, fill }: Props) {
  return (
    <svg
      className={className}
      onClick={onClick}
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
          d="M15.5004 8C15.5004 9.65685 14.1572 11 12.5004 11C10.8435 11 9.50037 9.65685 9.50037 8C9.50037 6.34315 10.8435 5 12.5004 5C13.296 5 14.0591 5.31607 14.6217 5.87868C15.1843 6.44129 15.5004 7.20435 15.5004 8Z"
          stroke={fill || "#a1a3a8"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.0674 13H9.93336C9.61059 13.0004 9.29016 13.0548 8.98536 13.161C5.47535 14.372 8.81435 19 12.5004 19C16.1864 19 19.5254 14.372 16.0144 13.161C15.7099 13.0549 15.3898 13.0005 15.0674 13Z"
          stroke={fill || "#a1a3a8"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}
