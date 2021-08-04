import { FC } from 'react';

interface Props {
  className?: string;
}

/* eslint-disable max-len */
export const FontSizesIcon: FC<Props> = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M4 8V6h12v2M10 6v12m0 0h2m-2 0H8M14 13.5V12h6v1.5M17 12v6m0 0h-1.5m1.5 0h1.5"
    />
  </svg>
);
/* eslint-enable max-len */
