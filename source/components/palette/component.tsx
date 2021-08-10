import { FC, memo } from 'react';

import Color from './components/color';
import { PaletteSize } from './types';

import * as styles from './styles';

interface Props {
  className?: string;
  colors: string[];
  size?: PaletteSize;
}

const Palette: FC<Props> = ({
  className,
  colors,
  size = 'small',
}) => (
  <div {...{
    css: styles.palette,
    className,
  }}>
    {
      colors.map((color, num) => (
        <Color {...{
          size,
          key: `${color}-${num}`,
          css: styles.paletteColor,
          color,
        }} />
      ))
    }
  </div>
);

export default memo(Palette);
