import { css } from 'styled-components';

import type { RuleSet } from 'styled-components';

const size = {
  mobile: [0, 767],
  tablet: [768, 1023],
  desktop: [1024, Number.MAX_SAFE_INTEGER],
} as const;

type Device = keyof typeof size;

export type Media = {
  [key in Device]: (
    ...args: (string | TemplateStringsArray)[]
  ) => RuleSet<object>;
};

const devices = Object.keys(size) as Device[];

const media = devices.reduce((obj, device) => {
  // prettier-ignore
  obj[device] = (...args) => css`
    @media screen and (min-width: ${size[device][0]}px) and (max-width: ${size[device][1]}px) {
        ${args}
      }
  `

  return obj;
}, {} as Media);

export default media;
