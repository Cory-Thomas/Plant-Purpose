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

  button {
    background: var(--primary);
    border-radius: 4px;
    color: var(--font-white);
  }

  button:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  button:focus {
      background-color: var(--darktone);
  }
`;

export default GlobalStyles;
