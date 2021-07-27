import { FC, memo } from 'react';

import { withFullFrame } from '@/components/fullFrame';

import Preview from '../components/preview';
import ConfigMenu from '../components/configMenu';

import * as styles from './styles';

const PageIndex: FC = () => (
  <div {...{
    css: styles.pageIndex,
  }}>
    <Preview {...{
      css: styles.pageIndexPreview,
    }} />

    <ConfigMenu {...{
      css: styles.pageIndexConfig,
    }} />
  </div>
);

export default withFullFrame(memo(PageIndex));
