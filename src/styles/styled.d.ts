import color from './theme/color';
import media from './theme/media';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: typeof color;
    media: typeof media;
  }
}
