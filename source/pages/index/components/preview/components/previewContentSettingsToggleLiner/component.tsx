import { FC, memo } from 'react';
import { useIntl } from 'react-intl';

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
      <button {...{
        type: 'button',
        onClick: (e) => {
          e.preventDefault();

          updateSettings('linerVisible', !settings.linerVisible);
        },
      }}>
        {
          settings.linerVisible
            ? intl.messages['pages.index.preview.toggleLiner.buttonHideLinerText']
            : intl.messages['pages.index.preview.toggleLiner.buttonShowLinerText']
        }
      </button>
    </div>
  );
};

export default memo(PreviewContentSettingsToggleLiner);
