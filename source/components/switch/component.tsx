import { FC, memo, useState } from 'react';

import * as styles from './styles';

interface Props {
  className?: string;
  defaultChecked?: boolean;
  onChange: (isChecked: boolean) => void;
}

const Switch: FC<Props> = ({
  className,
  defaultChecked = false,
  onChange,
}) => {
  const [isChecked, setIsChecked] = useState(defaultChecked);

  return (
    <button {...{
      className,
      css: styles.switcher(isChecked),
      type: 'button',
      onClick: () => {
        const next = !isChecked;

        setIsChecked(next);
        onChange(next);
      },
    }}>
      <div {...{
        css: styles.switcherTumbler(isChecked),
      }} />
    </button>
  );
};

export default memo(Switch);
