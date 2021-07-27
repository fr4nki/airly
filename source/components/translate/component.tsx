import {
  FC,
  ReactNode,
  memo,
  createElement,
} from 'react';

import { FormattedMessage } from 'react-intl';

interface Props {
  id: string;
  value?: Record<string, (chunks: string[]) => ReactNode>;
  props?: Record<string, unknown>;
  wrapper?: {
    element: string;
    className?: string;
  };
}

const Translate: FC<Props> = ({
  id,
  value = {},
  props = {},
  wrapper,
}) => {
  const Element = (
    <FormattedMessage {...{
      id,
      defaultMessage: `!!! NOT SET ID - ${id} !!!`,
      values: { ...value },
      ...props,
    }} />
  );

  return wrapper
    ? createElement(
      wrapper.element,
      { className: wrapper.className },
      Element,
    )
    : Element;
};

export default memo(Translate);
