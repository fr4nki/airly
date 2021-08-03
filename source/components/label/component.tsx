import { FC, memo } from 'react';

import * as styles from './styles';
import { TextPosition } from './types';

interface Props {
  className?: string;
  text: string;
  textPosition?: TextPosition;
}

const Label:FC<Props> = ({
  className,
  children,
  text,
  textPosition = 'left',
}) => (
  // eslint-disable-next-line jsx-a11y/label-has-associated-control
  <label {...{
    className,
    css: styles.label(textPosition),
  }}>
    {
      (textPosition === 'top' || textPosition === 'left') && (
        <div {...{
          css: styles.labelText,
        }}>
          {text}
        </div>
      )
    }

    <div {...{
      css: styles.labelContent(textPosition),
    }}>
      {children}
    </div>

    {
      (textPosition === 'bottom' || textPosition === 'right') && (
        <div {...{
          css: styles.labelText,
        }}>
          {text}
        </div>
      )
    }
  </label>
);

export default memo(Label);
