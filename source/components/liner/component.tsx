import { FC, memo, useMemo } from 'react';
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
  const lines = useMemo(
    (): string[] => {
      const length = Math.floor(height / (step + SEPARATOR_LINE_THICKNESS));

      return Array.from({ length }, () => nanoid(32));
    },
    [step, height],
  );

  return (
    <div {...{
      className,
      css: styles.liner,
    }}>
      {
        lines.map((key) => (
          <span {...{
            key,
            css: styles.linerLine(SEPARATOR_LINE_THICKNESS),
            style: { marginTop: step },
          }} />
        ))
      }
    </div>
  );
};

export default memo(Liner);
