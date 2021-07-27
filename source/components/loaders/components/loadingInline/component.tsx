import { FC, memo } from 'react';

import * as styles from './styles';

interface Props {
  className?: string;
}

const LoadingInline: FC<Props> = ({
  className,
}) => (
  <div {...{
    className,
    css: styles.loadingInline,
  }}>
    loadingInline here
  </div>
);

export default memo(LoadingInline);
