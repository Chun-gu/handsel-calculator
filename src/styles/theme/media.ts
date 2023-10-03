import { css } from 'styled-components';

import type { Interpolation, RuleSet } from 'styled-components';
import type { Styles } from 'styled-components/dist/types';

const size = {
  mobile: [0, 767],
  tablet: [768, 1023],
  desktop: [1024, Number.MAX_SAFE_INTEGER],
} as const;

type Device = keyof typeof size;

export type Media = {
  [key in Device]: (
    styles: Styles<object>,
    ...interpolations: Interpolation<object>[]
  ) => RuleSet<object>;
};

const devices = Object.keys(size) as Device[];

const media = devices.reduce((obj, device) => {
  // prettier-ignore
  obj[device] = (styles, ...interpolations) => css`
    @media screen and (min-width: ${size[device][0]}px) and (max-width: ${size[device][1]}px) {
        ${css(styles, ...interpolations)}
      }
  `

  return obj;
}, {} as Media);

export default media;
