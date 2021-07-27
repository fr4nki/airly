import { FC, memo } from 'react';

import * as styles from './styles';

const LoadingBlock: FC = () => (
  <div {...{
    css: styles.loadingBlock,
  }}>
    <div {...{
      css: styles.loadingBlockInner,
    }}>
      loading block here
    </div>
  </div>
);

export default memo(LoadingBlock);
