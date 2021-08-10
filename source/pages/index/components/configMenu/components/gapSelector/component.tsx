import { FC, memo } from 'react';
import { useIntl } from 'react-intl';

import { GapSelectorIcon } from '@/components/icons';
import Slider from '@/components/slider';

import { useUserStylesStore } from '@/stores/userStyles';

import MenuItemName from '../menuItemName';

import * as styles from './styles';

interface Props {
  className?: string;
}

const GapSelector: FC<Props> = ({
  className,
}) => {
  const intl = useIntl();
  const { userStyles, updateConfig } = useUserStylesStore();

  return (
    <div {...{
      className,
      css: styles.gapSelector,
    }}>
      <div {...{
        css: styles.gapSelectorTitle,
      }}>
        <MenuItemName {...{
          icon: <GapSelectorIcon />,
          text: intl.messages['pages.index.gapSelector.label'].toString(),
        }} />

        <p {...{
          css: styles.gapSelectorTitleValue,
        }}>
          {userStyles.gap}
          px
        </p>
      </div>

      <Slider {...{
        min: 2,
        max: 100,
        css: styles.slider,
        defaultValue: userStyles.gap,
        debounceTimeout: 100,
        onChange: (value) => {
          updateConfig('gap', value);
        },
      }} />
    </div>
  );
};

export default memo(GapSelector);
