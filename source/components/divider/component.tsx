import { FC, memo } from 'react';

import * as styles from './styles';

interface Props {
  className?: string;
  thickness?: number;
}

const Divider: FC<Props> = ({
  className,
  thickness = 1,
}) => (
  <div {...{
    className,
    css: styles.divider(thickness),
  }} />
);

export default memo(Divider);
