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
    cursor: pointer;
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
    cursor: pointer;
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
      width: 50%;
      border-radius: 5px;
      max-height: 533px;
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

    .buttons {
      width: 300px;
      display: flex;
      justify-content: space-between;
      margin-top: 15px;

      button {
        width: 100px;
        padding: 5px;
      }
    }
  }

  .noteFormPage {
    width: 50%;
    display: flex;
    justify-content: center;

    svg {
      width: 35px;
      position: absolute;
      top: 0;
      left: 0;
      margin: 5px 10px;
      cursor: pointer;
    }
  }
  .deleteNote {
    div {
      display: flex;
      justify-content: space-between;

      button {
        padding: 6px;
        width: 100px;
      }
    }
  }
`;

export default GlobalStyles;
