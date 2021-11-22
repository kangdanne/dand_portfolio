import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    height: 100%;
    font: 'Noto Sans KR', sans-serif;
    font-weight: 300;
  }

`;

export default GlobalStyle;
