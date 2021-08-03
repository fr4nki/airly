import { FC, memo, useMemo } from 'react';
import { nanoid } from 'nanoid';

import Divider from '@/components/divider/component';

import { SEPARATOR_LINE_THICKNESS } from './constants';

import * as styles from './styles';

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
          <Divider {...{
            key,
            css: styles.linerLine(step),
            thickness: SEPARATOR_LINE_THICKNESS,
          }} />
        ))
      }
    </div>
  );
};

export default memo(Liner);
