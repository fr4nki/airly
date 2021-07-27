import {
  FC,
  memo,
  useEffect,
  useState,
} from 'react';

import { useContentStore } from '@/stores/content';

import { usePreviousValue } from '@/utils/hooks';

import { PreviewMode } from '../previewModeSelector';

import * as styles from './styles';

interface Props {
  className?: string;
  mode: PreviewMode;
}

const ContentEditBlock: FC<Props> = ({
  className,
  mode,
}) => {
  const { content, updateContent } = useContentStore();
  const prevMode = usePreviousValue<PreviewMode>(mode);

  const [newContent, setNewContent] = useState<string>(content);

  useEffect(() => {
    if (mode === PreviewMode.view && prevMode === PreviewMode.edit) {
      updateContent(newContent);
    }
  }, [prevMode, mode]);

  if (mode === PreviewMode.view) {
    return null;
  }

  return (
    <div {...{
      className,
      css: styles.contentEditBlock,
    }}>
      <textarea {...{
        css: styles.contentEditBlockArea,
        defaultValue: content,
        onChange: (e) => {
          setNewContent(e.target.value);
        },
      }} />
    </div>
  );
};

export default memo(ContentEditBlock);
