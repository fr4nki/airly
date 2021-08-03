import { FC, memo } from 'react';

import * as styles from './styles';

interface Props {
  className?: string;
}

const Track: FC<Props> = ({
  className,
}) => (
  <div {...{
    className,
    css: styles.track,
  }} />
);

export default memo(Track);
