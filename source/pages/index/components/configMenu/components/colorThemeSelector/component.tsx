import { FC, memo } from 'react';

import { IconColorRings } from '@/components/icons';
import Dropdown from '@/components/dropdown';
import Palette from '@/components/palette';

import MenuItemName from '../menuItemName';

import * as styles from './styles';

interface Props {
  className?: string;
}

const fonts = ['Lobster', 'Oswald', 'Raleway'].map((name) => ({ value: name, text: name }));

const ColorThemeSelector: FC<Props> = ({
  className,
}) => (
  <>
    <Dropdown {...{
      className,
      items: fonts,
      css: styles.colorThemeSelector,
      prefix: (
        <MenuItemName {...{
          icon: <IconColorRings />,
        }} />
      ),
      defaultSelected: fonts[0],
      onChange: (selectedFont) => {
        console.log(selectedFont);
      },
    }} />

    <Palette {...{
      colors: ['red', 'blue'],
    }} />
  </>
);

export default memo(ColorThemeSelector);
