import { FC, memo } from 'react';

import PreviewContentSettingsToggleLiner from '../previewContentSettingsToggleLiner';

import * as styles from './styles';

interface Props {
  className?: string;
}

const PreviewContentSettings: FC<Props> = ({
  className,
}) => (
  <div {...{
    className,
    css: styles.previewContentSettings,
  }}>
    <PreviewContentSettingsToggleLiner />
  </div>
);

export default memo(PreviewContentSettings);
