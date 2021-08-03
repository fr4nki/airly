import { FC, memo } from 'react';

import * as styles from './styles';

interface Props {
  className?: string;
}

const Thumb: FC<Props> = ({
  className,
}) => (
  <div {...{
    className,
    css: styles.thumb,
  }} />
);

export default memo(Thumb);
