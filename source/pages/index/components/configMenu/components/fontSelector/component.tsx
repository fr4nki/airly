import { FC, memo } from 'react';

import Dropdown from '@/components/dropdown';
import { FontSelectorIcon } from '@/components/icons';

import MenuItemName from '../menuItemName';

interface Props {
  className?: string;
}

// TODO: FIXME
const fonts = ['Lobster', 'Oswald', 'Raleway'].map((name) => ({ value: name, text: name }));

const FontSelector: FC<Props> = ({
  className,
}) => (
  <Dropdown {...{
    className,
    items: fonts,
    prefix: (
      <MenuItemName {...{
        icon: <FontSelectorIcon />,
      }} />
    ),
    defaultSelected: fonts[0],
    onChange: (selectedFont) => {
      console.log(selectedFont);
    },
  }} />
);

export default memo(FontSelector);
