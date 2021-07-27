import { FC, memo, PropsWithChildren } from 'react';

import * as styles from './styles';

interface Props {
  className?: string;
}

const FullFrame: FC<PropsWithChildren<Props>> = ({
  className,
  children,
}) => (
  <div {...{
    className,
    css: styles.fullFrame,
  }}>
    { children }
  </div>
);

export default memo(FullFrame);
