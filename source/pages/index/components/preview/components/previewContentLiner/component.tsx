import { FC, memo } from 'react';

import Liner from '@/components/liner';

import { useUserStylesStore } from '@/stores/userStyles';
import { useSettingsStore } from '@/stores/settings';

import * as styles from './styles';

interface Props {
  className?: string;
  height: number;
}

const PreviewLiner: FC<Props> = ({
  className,
  height,
}) => {
  const gap = useUserStylesStore((state) => state.userStyles.gap);
  const { settings } = useSettingsStore();

  return (
    <Liner {...{
      className,
      css: styles.previewLiner(settings.linerVisible),
      step: gap,
      height,
    }} />
  );
};

export default memo(PreviewLiner);
