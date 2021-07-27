import { FC, memo } from 'react';
import { useIntl } from 'react-intl';

import { withFullFrame } from '@/components/fullFrame';

import * as styles from './styles';

const PageError: FC = () => {
  const intl = useIntl();

  return (
    <div {...{
      css: styles.pageError,
    }}>
      {intl.messages['pages.error.notFound']}
    </div>
  );
};

export default withFullFrame(memo(PageError));
