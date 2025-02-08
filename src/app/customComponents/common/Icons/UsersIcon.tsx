interface Props {
  className?: string | undefined;
  onClick?: () => void;
  fill?: string;
}
export default function UsersIcon({ className, onClick, fill }: Props) {
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
          d="M12.5 7.333C12.5 8.62148 11.4555 9.666 10.167 9.666C8.8785 9.666 7.83398 8.62148 7.83398 7.333C7.83398 6.04452 8.8785 5 10.167 5C11.4555 5 12.5 6.04452 12.5 7.333Z"
          stroke={fill || "#a1a3a8"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.833 15.733C14.833 17.533 12.744 19 10.166 19C7.588 19 5.5 17.537 5.5 15.733C5.5 13.929 7.589 12.467 10.167 12.467C12.745 12.467 14.833 13.929 14.833 15.733Z"
          stroke={fill || "#a1a3a8"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.439 9.51102C17.439 10.2842 16.8122 10.911 16.039 10.911C15.2658 10.911 14.639 10.2842 14.639 9.51102C14.639 8.73782 15.2658 8.11102 16.039 8.11102C16.4103 8.11102 16.7664 8.25852 17.0289 8.52107C17.2915 8.78362 17.439 9.13972 17.439 9.51102Z"
          stroke={fill || "#a1a3a8"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.7 18.067C18.1138 18.1831 19.3596 17.1445 19.5 15.733C19.3591 14.3218 18.1134 13.2839 16.7 13.4"
          stroke={fill || "#a1a3a8"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}
