import {
  cloneElement,
  FC,
  ReactElement,
  isValidElement,
  memo,
  useState,
  Children,
} from 'react';

import { RadioItem } from '../../types';

import * as styles from './styles';

interface Props {
  className?: string;
  defaultSelected?: RadioItem['value'];
  onChange: (item: RadioItem['value']) => void;
  children: ReactElement<RadioItem> | ReactElement<RadioItem>[];
}

const RadioGroup: FC<Props> = ({
  className,
  defaultSelected,
  onChange,
  children,
}) => {
  const [selected, setSelected] = useState<RadioItem['value'] | undefined>(defaultSelected);

  return (
    <div {...{
      className,
      css: styles.group,
      role: 'radiogroup',
    }}>
      {
        Children.map(children, (child) => {
          if (!isValidElement(child)) {
            return child;
          }

          return cloneElement(
            child,
            {
              selected: child.props.value === selected,
              onClick: (currentSelected: RadioItem) => {
                setSelected(currentSelected.value);
                onChange(currentSelected.value);
              },
            },
          );
        })
      }
    </div>
  );
};

export default memo(RadioGroup);
