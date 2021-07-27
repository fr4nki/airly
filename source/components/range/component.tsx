import {
  ChangeEvent,
  FC,
  memo, useCallback,
  useState,
} from 'react';
import { debounce } from 'lodash-es';

import * as styles from './styles';

interface Props {
  min?: number;
  max?: number;
  step?: number;
  debounceTimeout?: number;
  defaultValue: number;
  onChange: (value: number) => void;
  className?: string;
}

const Range: FC<Props> = ({
  min = 1,
  max = 100,
  step = 1,
  debounceTimeout = 0,
  defaultValue,
  onChange,
  className,
}) => {
  const [value, setValue] = useState(defaultValue);

  const onChangeDebouncedCallback = useCallback(
    debounce((newValue: number) => {
      onChange(newValue);
    }, debounceTimeout),
    [],
  );

  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);

    setValue(newValue);
    onChangeDebouncedCallback(newValue);
  };

  return (
    <input {...{
      min,
      max,
      step,
      value,
      type: 'range',
      className,
      css: styles.range,
      onChange: onChangeCallback,
    }} />
  );
};

export default memo(Range);
