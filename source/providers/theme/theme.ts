export const theme = {
  colors: {
    accent: {
      default: '#5158FF',
      semi: '#E3E3F4',
    },
    background: {
      default: '#fdfdfd',
      gray: '#DEDDDC',
      graySoft: '#F7F6F3',
    },
    font: {
      default: '#373530',
      gray: '#72706C',
    },
    link: {
      normal: '#0f6fff',
    },
    controls: {
      inactive: '#AAA9A5',
      active: '#72706C',
    },
  },
  gaps: {
    default: 4,
    medium: 6,
  },
  timings: {
    animation: {
      fast: '0.15s',
      medium: '0.3s',
      slow: '0.6s',
    },
  },
};

export type AppTheme = typeof theme;
