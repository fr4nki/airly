import { FC, memo } from 'react';

import Radio, { RadioGroup } from '@/components/radio';

import { useUserStylesStore } from '@/stores/userStyles';

interface Props {
  className?: string;
}

const FontSizeSelector: FC<Props> = ({
  className,
}) => {
  const { userStyles, updateConfig } = useUserStylesStore();

  return (
    <RadioGroup {...{
      className,
      defaultSelected: userStyles.fontSize,
      onChange: (value) => {
        updateConfig('fontSize', value);
      },
    }}>
      <Radio {...{
        content: 'Small',
        value: 'small',
      }} />
      <Radio {...{
        content: 'Medium',
        value: 'medium',
      }} />
      <Radio {...{
        content: 'Big',
        value: 'big',
      }} />
    </RadioGroup>
  );
};

export default memo(FontSizeSelector);
