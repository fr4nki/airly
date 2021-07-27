import { FC, memo, useState } from 'react';

import ContentEditBlock from './components/contentEditBlock';
import PreviewBlock from './components/previewBlock';
import PreviewModeSelector, { PreviewMode } from './components/previewModeSelector';

import * as styles from './styles';

interface Props {
  className?: string;
}

const Preview: FC<Props> = ({ className }) => {
  const [mode, setMode] = useState(PreviewMode.view);

  return (
    <div {...{
      className,
      css: styles.preview,
    }}>
      <PreviewModeSelector {...{
        defaultSelected: mode,
        onChange: (newMode) => { setMode(newMode); },
      }} />

      <PreviewBlock {...{
        mode,
      }} />

      <ContentEditBlock {...{
        mode,
      }} />
    </div>
  );
};

export default memo(Preview);
