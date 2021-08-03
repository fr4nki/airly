import { FC } from 'react';

interface Props {
  className?: string;
}

export const IconArrow: FC<Props> = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="8"
    fill="none"
    viewBox="0 0 14 8"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M1 1l6 6 6-6"
    />
  </svg>
);
