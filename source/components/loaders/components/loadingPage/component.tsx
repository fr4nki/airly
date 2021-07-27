import { memo } from 'react';

import { LoadingBlock } from '@/components/loaders';

import * as styles from './styles';

const LoadingPage = () => (
  <div {...{
    css: styles.loadingPage,
  }}>
    <LoadingBlock />
  </div>
);

export default memo(LoadingPage);
