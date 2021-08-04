import { FC } from 'react';

interface Props {
  className?: string;
}

export const FontSelectorIcon: FC<Props> = ({ className }) => (
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
      d="M19.5 19.5L21 21M14 17a3 3 0 106 0 3 3 0 00-6 0zM9 5v12m0 0H7m2 0h2M15 7V5H3v2"
    />
  </svg>
);
