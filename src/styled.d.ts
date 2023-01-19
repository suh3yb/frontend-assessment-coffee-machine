import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    color: {
      background: string;
      error: string;
      buttonBgLight: string;
      buttonBgDark: string;
      textDark: string;
      textLight: string;
    };
  }
}
