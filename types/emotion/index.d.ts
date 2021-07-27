import '@emotion/react';
import { AppTheme } from '@/providers/theme';

declare module '@emotion/react' {
  export interface Theme extends AppTheme {}
}
