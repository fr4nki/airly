import { FC, memo } from 'react';
import { useIntl } from 'react-intl';

import Radio, { RadioGroup } from '@/components/radio';

import { PreviewMode } from './constants';

import * as styles from './styles';

interface Props {
  className?: string;
  defaultSelected: PreviewMode;
  onChange: (type: PreviewMode) => void;
}

const PreviewModeSelector: FC<Props> = ({
  className,
  defaultSelected,
  onChange,
}) => {
  const intl = useIntl();

  return (
    <RadioGroup {...{
      className,
      defaultSelected,
      css: styles.typeSelector,
      onChange: (value) => {
        onChange(value as PreviewMode);
      },
    }}>
      <Radio {...{
        content: String(intl.messages['pages.index.preview.previewModeSelector.viewButton']),
        value: PreviewMode.view,
        size: 'm',
      }} />

      <Radio {...{
        content: String(intl.messages['pages.index.preview.previewModeSelector.editButton']),
        value: PreviewMode.edit,
        size: 'm',
      }} />
    </RadioGroup>
  );
};

export default memo(PreviewModeSelector);
