import { FC, memo } from 'react';
import { useIntl } from 'react-intl';

import Range from '@/components/range';

import { useUserStylesStore } from '@/stores/userStyles';

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
      <p>
        {intl.messages['pages.index.gapSelector.label'].toString()}
        {': '}
        {userStyles.gap}
        px
      </p>

      <Range {...{
        min: 2,
        max: 100,
        step: 2,
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
