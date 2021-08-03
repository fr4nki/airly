import { FC, memo } from 'react';
import { useIntl } from 'react-intl';

import Switch from '@/components/switch';
import Label from '@/components/label';

import { useSettingsStore } from '@/stores/settings';

import * as styles from './styles';

interface Props {
  className?: string;
}

const PreviewContentSettingsToggleLiner: FC<Props> = ({
  className,
}) => {
  const { settings, updateSettings } = useSettingsStore();
  const intl = useIntl();

  return (
    <div {...{
      className,
      css: styles.toggleLiner,
    }}>
      <Label {...{
        text: String(intl.messages['pages.index.preview.toggleLiner.labelLayoutRule']),
        textPosition: 'left',
      }}>
        <Switch {...{
          defaultChecked: settings.linerVisible,
          onChange: (isChecked) => {
            updateSettings('linerVisible', isChecked);
          },
        }} />
      </Label>
    </div>
  );
};

export default memo(PreviewContentSettingsToggleLiner);
