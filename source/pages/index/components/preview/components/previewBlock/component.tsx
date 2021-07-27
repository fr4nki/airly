import { FC, memo, useRef } from 'react';

import { useRefDimensions } from '@/utils/hooks';

import PreviewContent from '../previewContent';
import PreviewLiner from '../previewContentLiner';
import PreviewContentSettings from '../previewContentSettings';
import { PreviewMode } from '../previewModeSelector';

import * as styles from './styles';

interface Props {
  className?: string;
  mode: PreviewMode;
}

const PreviewBlock: FC<Props> = ({
  className,
  mode,
}) => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const { height } = useRefDimensions(contentRef);

  if (mode === PreviewMode.edit) {
    return null;
  }

  return (
    <div {...{
      className,
      css: styles.previewBlock,
    }}>
      <PreviewContentSettings />

      <div {...{
        css: styles.previewBlockWrapper,
      }}>
        <PreviewContent {...{
          css: styles.previewBlockContent,
          ref: contentRef,
        }} />

        <PreviewLiner {...{
          css: styles.previewBlockLiner,
          height,
        }} />
      </div>
    </div>
  );
};

export default memo(PreviewBlock);
