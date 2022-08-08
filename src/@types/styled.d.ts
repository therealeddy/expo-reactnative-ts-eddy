import 'styled-components';

import theme from '../styles/themes/light';

declare module 'styled-components' {
  type ThemeType = typeof theme;

  export interface DefaultTheme extends ThemeType {}
}
