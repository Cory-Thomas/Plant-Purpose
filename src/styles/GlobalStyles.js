import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    width: 100vw;
    height: 100vh;
    background: var(--white);
  }
  
  img {
    max-height: 100%;
    max-width: 100%;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyles;
