import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    background-color: var(--white);
  }
  
  img {
    max-height: 100%;
    max-width: 100%;
  }

  a {
    text-decoration: none;
  }

  button {
    background-color: var(--primary);
    border-radius: 4px;
    border: 0px;
  }

  button:hover, .button-secondary:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  button:focus {
    background-color: var(--darktone);
  }

  .button-secondary {
    background-color: var(--secondary);
    border-radius: 4px;
  }

  .button-secondary:focus {
    background-color: var(--secondary);
  }

  .icon {
    width: 30px;
  }

  .exitLogo {
    width: 35px;
    position: absolute;
    top: 0;
    right: 0;
    margin: 5px 10px;
  }

  .plantCard {
    background-color: var(--background);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    border-radius: 9px;

    img {
      width: 70%;
      border-radius: 5px;
    }

    .plantDetails {
      margin: 10px;
      font-size: 2rem;

      div {
        margin: 5px;

        span {
        font-weight: 600;
        }
      }
    }

    button {
      width: 100px;
      padding: 5px;
    }
  }
`;

export default GlobalStyles;
