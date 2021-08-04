import { FC, memo } from 'react';

import Dropdown from '@/components/dropdown';
import MenuItem from '@/components/menuItemName';
import { FontSelectorIcon } from '@/components/icons';

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
      <MenuItem {...{
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
