import { ReactElement } from 'react';

export interface RadioItem {
  className?: string;
  content: string | ReactElement;
  value: string | number;
  disabled?: boolean;
  selected?: boolean;
}
