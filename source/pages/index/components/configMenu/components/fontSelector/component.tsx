import { FC, memo } from 'react';

import { useUserStylesStore } from '@/stores/userStyles';

interface Props {
  className?: string;
}

// TODO: FIXME
const fonts = ['Lobster', 'Oswald', 'Raleway'];

const FontSelector: FC<Props> = ({
  className,
}) => {
  const { updateConfig, userStyles } = useUserStylesStore();

  return (
    <select {...{
      className,
      value: userStyles.font,
      onChange: (e) => {
        updateConfig('font', e.target.value);
      },
    }}>
      {
        fonts.map((font) => (
          <option {...{
            key: font,
            value: font,
          }}>
            {font}
          </option>
        ))
      }
    </select>
  );
};

export default memo(FontSelector);
