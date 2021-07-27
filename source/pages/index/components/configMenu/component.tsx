import { FC, memo } from 'react';

import GapSelector from './components/gapSelector';
import DownloadBlock from './components/downloadBlock';
import FontSelector from './components/fontSelector';
import FontSizeSelector from './components/fontSizeSelector';

import * as styles from './styles';

interface Props {
  className?: string;
}

const ConfigMenu: FC<Props> = ({
  className,
}) => (
  <div {...{
    className,
    css: styles.configMenu,
  }}>
    <div {...{
      css: styles.configMenuUpper,
    }}>
      <GapSelector />
      <FontSelector />
      <FontSizeSelector />
    </div>

    <div {...{
      css: styles.configMenuLower,
    }}>
      <DownloadBlock />
    </div>
  </div>
);

export default memo(ConfigMenu);
