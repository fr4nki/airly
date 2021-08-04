import { FC, memo, ReactElement } from 'react';

import * as styles from './styles';

interface Props {
  className?: string;
  icon?: ReactElement;
  text?: string;
}

const MenuItemName: FC<Props> = ({
  className,
  icon,
  text,
}) => (
  <div {...{
    className,
    css: styles.menuItem,
  }}>
    {
      icon && (
        <div {...{
          css: styles.menuItemIcon,
        }}>
          {icon}
        </div>
      )
    }

    {
      text && (
        <div {...{
          css: styles.menuItemText,
        }}>
          {text}
        </div>
      )
    }
  </div>
);

export default memo(MenuItemName);
