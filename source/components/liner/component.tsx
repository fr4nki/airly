import { FC, memo } from 'react';
import { nanoid } from 'nanoid';

import * as styles from './styles';

import { SEPARATOR_LINE_THICKNESS } from './constants';

interface Props {
  className?: string;
  step?: number;
  height: number;
}

const Liner: FC<Props> = ({
  className,
  height,
  step = 10,
}) => {
  const lineArray = new Array(Math.floor(height / (step + SEPARATOR_LINE_THICKNESS))).fill('');

  return (
    <div {...{
      className,
      css: styles.liner,
    }}>
      {
        lineArray.map(() => (
          <span {...{
            key: nanoid(),
            css: styles.linerLine(SEPARATOR_LINE_THICKNESS),
            style: { marginTop: step },
          }} />
        ))
      }
    </div>
  );
};

export default memo(Liner);
