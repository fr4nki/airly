import { FC, memo, useState } from 'react';
import { useIntl } from 'react-intl';

import { useUserStylesStore, generateCSS } from '@/stores/userStyles';

import { downloadTextAsFile } from '@/utils/helpers';

import config from '@/config';

import * as styles from './styles';

interface Props {
  className?: string;
}

const DownloadBlock: FC<Props> = ({
  className,
}) => {
  const intl = useIntl();

  const { userStyles } = useUserStylesStore();
  const [isDownloadBlockShown, setIsDownloadBlockShown] = useState(false);

  return (
    <div {...{
      className,
      css: styles.downloadBlock,
    }}>
      <button {...{
        type: 'button',
        onClick: (e) => {
          e.preventDefault();
          setIsDownloadBlockShown(!isDownloadBlockShown);
        },
      }}>
        {intl.messages['pages.error.configMenu.downloadBlock']}
      </button>

      {
        isDownloadBlockShown && (
          <div {...{
            css: styles.downloadBlockSettings,
          }}>
            <textarea {...{
              css: styles.downloadBlockSettingsArea,
              defaultValue: generateCSS(userStyles),
              disabled: true,
            }} />

            <button {...{
              type: 'button',
              onClick: () => {
                downloadTextAsFile(
                  generateCSS(userStyles),
                  `${config.app.name}.css`,
                );

                setIsDownloadBlockShown(false);
              },
            }}>
              {intl.messages['pages.error.configMenu.downloadButtonText']}
            </button>
          </div>
        )
      }
    </div>
  );
};

export default memo(DownloadBlock);
