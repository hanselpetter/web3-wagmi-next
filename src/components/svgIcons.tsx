import { FC } from "react";

export const DownArrow: FC = () => {
  return (
    <svg
      width="11"
      height="8"
      viewBox="0 0 11 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.04812 7.10723C6.2479 8.0856 4.7521 8.0856 3.95188 7.10723L0.810273 3.26623C-0.257854 1.96031 0.671289 -7.42116e-07 2.35839 -8.89607e-07L8.64161 -1.4389e-06C10.3287 -1.58639e-06 11.2579 1.96031 10.1897 3.26622L7.04812 7.10723Z"
        fill="white"
      />
    </svg>
  );
};

export const TopArrow: FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="14"
      viewBox="0 0 16 14"
      fill="none"
    >
      <path
        d="M8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 14L9 1L7 1L7 14L9 14Z"
        fill="white"
      />
    </svg>
  );
};

export const CloseIcon = () => {
  return (
    <svg
      width="16"
      height="9"
      viewBox="0 0 16 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 1L8 8L1 1"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
