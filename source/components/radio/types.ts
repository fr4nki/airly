import { ReactElement } from 'react';

export type RadioItemSize = 's' | 'm';

export interface RadioItem {
  className?: string;
  content: string | ReactElement;
  value: string | number;
  disabled?: boolean;
  selected?: boolean;
  size?: RadioItemSize;
}
