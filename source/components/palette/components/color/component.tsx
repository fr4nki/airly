import { FC, memo } from 'react';

import { PaletteSize } from '../../types';

import * as styles from './styles';

interface Props {
  className?: string;
  color: string;
  size: PaletteSize;
}

const Color: FC<Props> = ({
  className,
  color,
  size,
}) => (
  <div {...{
    className,
    css: styles.color(color, size),
  }} />
);

export default memo(Color);
