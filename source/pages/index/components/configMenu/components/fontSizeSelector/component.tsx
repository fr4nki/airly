import { FC, memo } from 'react';
import { useIntl } from 'react-intl';

import Radio, { RadioGroup } from '@/components/radio';
import MenuItemName from '@/components/menuItemName';
import { FontSizesIcon } from '@/components/icons';

import { useUserStylesStore } from '@/stores/userStyles';

import * as styles from './styles';

interface Props {
  className?: string;
}

const FontSizeSelector: FC<Props> = ({
  className,
}) => {
  const intl = useIntl();
  const { userStyles, updateConfig } = useUserStylesStore();

  return (
    <div {...{
      css: styles.fontSizeSelector,
    }}>
      <MenuItemName {...{
        icon: <FontSizesIcon />,
        text: intl.messages['pages.index.fontSizeSelector.label'].toString(),
      }} />

      <RadioGroup {...{
        className,
        defaultSelected: userStyles.fontSize,
        onChange: (value) => {
          updateConfig('fontSize', value);
        },
      }}>
        <Radio {...{
          content: 'Small',
          value: 'small',
        }} />
        <Radio {...{
          content: 'Medium',
          value: 'medium',
        }} />
        <Radio {...{
          content: 'Big',
          value: 'big',
        }} />
      </RadioGroup>
    </div>
  );
};

export default memo(FontSizeSelector);
