import { ReactNode } from 'react';

export type DropdownItem = {
  className?: string;
  value: string;
  text: string | ReactNode;
}
