import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font: inherit;
    color: inherit;
  }

  *,
  ::before,
  ::after {
    box-sizing: border-box;
  }

  :root {
    -webkit-text-size-adjust: none;
    text-size-adjust: none;
    line-height: 1.5;
  }

  html,
  body {
    min-height: 100vh;
    font-family:
      'Pretendard Variable',
      Pretendard,
      -apple-system,
      BlinkMacSystemFont,
      system-ui,
      Roboto,
      'Helvetica Neue',
      'Segoe UI',
      'Apple SD Gothic Neo',
      'Noto Sans KR',
      'Malgun Gothic',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
      sans-serif;
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  button {
    background: none;
    border: 0;
    cursor: pointer;
  }

  a,
  a:visited {
    text-decoration: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  ul,
  ol {
    list-style: none;
  }
`;

export default GlobalStyle;
