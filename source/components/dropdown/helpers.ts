import { DropdownItem } from './types';

export const findByValueFromList = (
  value: DropdownItem | DropdownItem['value'] | undefined,
  list: DropdownItem[],
): DropdownItem => {
  const defaultValue = list[0];

  if (!value) {
    return defaultValue;
  }

  if (typeof value === 'string') {
    return list.find((item) => item.value === value) ?? defaultValue;
  }

  return list.find((item) => item.value === value.value) ?? defaultValue;
};
