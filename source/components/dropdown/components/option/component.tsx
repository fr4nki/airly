import { FC, memo, ReactNode } from 'react';

import * as styles from './styles';

interface Props {
  className?: string;
  value: string;
  onClick: (value: string) => void;
  children: string | ReactNode;
}

const Option: FC<Props> = ({
  value,
  className,
  onClick,
  children,
}) => (
  <button {...{
    value,
    className,
    type: 'button',
    css: styles.option,
    onClick: () => { onClick(value); },
  }}>
    {children}
  </button>
);

export default memo(Option);
