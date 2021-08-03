import { FC, memo } from 'react';

import { RadioItem } from '../../types';

import * as styles from './styles';

interface Props extends RadioItem {
  onClick?: (item: RadioItem) => void;
}

const Radio: FC<Props> = ({
  className,
  content,
  value,
  disabled,
  selected,
  onClick,
  size = 's',
}) => (
  <button {...{
    className,
    disabled,
    role: 'radio',
    type: 'button',
    css: styles.radio(size, selected),
    onClick: (e) => {
      e.preventDefault();
      e.stopPropagation();

      onClick?.({
        className,
        content,
        value,
        disabled,
        selected,
      });
    },
  }}>
    { content }
  </button>
);

export default memo(Radio);
