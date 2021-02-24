import styled from 'styled-components';

export const StyledDiv = styled.div`
  header {
    width: 100%;
    height: 96px;
    background-color: var(--font-white);
    padding: 0 3%;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      width: 190px;
      display: flex;
      text-align: right;
      font-size: 1.4rem;
      line-height: 27px;
      letter-spacing: 0.08em;
      text-transform: capitalize;
      color: var(--primary);

      svg {
        width: 40px;
      }
    }

    button {
      width: 86px;
      padding: 8px;
      margin: 10px;
      background-color: green;
    }

    .signin {
      background-color: var(--secondary);
      color: var(--font-secondary);
    }

    .signup {
      margin-right: 80px;
    }
  }

  main {
    display: flex;
    justify-content: space-between;

    section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;

      h2 {
        text-align: right;
        font-size: 4.8rem;
        line-height: 72px;
        letter-spacing: 0.08em;
        margin: 0;
        margin-right: 95px;

        span {
          display: block;
          color: var(--primary);
        }
      }

      p {
        width: 70%;
        margin: 40px auto;
        font-size: 1.8rem;
        line-height: 27px;
        text-align: right;
        letter-spacing: 0.08em;
      }

      a {
        margin-right: 100px;
        margin-bottom: 150px;
        button {
          width: 300px;
          padding: 15px 0;
        }
      }
    }

    div {
      position: relative;
      display: inline;
      margin-right: 30px;

      .plant {
        position: absolute;
        bottom: 20;
        right: 10;
      }
    }
  }

  .features {
    display: flex;
    justify-content: space-around;
    margin-top: 40px;
    padding: 180px 0;
    background-color: var(--background);

    .plantFeature {
      position: absolute;
      width: 500px;
      left: -40px;
      padding-top: 100px;
    }

    div {
      width: 260px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;

      img {
        width: 100px;
      }
    }
  }

  footer {
    display: flex;
    justify-content: center;
    padding-top: 300px;
    margin-bottom: 80px;

    div {
      width: 350px;

      div:first-of-type {
        display: flex;
        justify-content: space-around;
        margin-bottom: 30px;
      }

      div:last-child {
        display: flex;
        justify-content: space-between;
        color: var(--darktone);
        letter-spacing: 0.08em;

        span:nth-child(2) {
          padding: 0 7px;
          border-left: 1px solid var(--darktone);
          border-right: 1px solid var(--darktone);
        }
      }
    }
  }

  @media (max-width: 980px) {
    header {
      flex-direction: column;
      margin-bottom: 80px;

      nav {
        width: 400px;
        display: flex;
        justify-content: space-around;
        margin: 10px 0;

        .signup {
          margin-right: 0;
        }
      }
    }

    main {
      flex-direction: column;

      section {
        align-items: center;

        h2 {
          margin: 0 auto;
          margin-top: 40px;
          text-align: center;
        }

        p {
          text-align: center;
        }

        button {
          margin: 10px auto;
          margin-bottom: 40px;
          margin-left: 100px;
        }
      }
    }

    .features {
      flex-direction: column;
      align-items: center;
      padding: 60px 0;

      .plantFeature {
        display: none;
      }

      div {
        width: 50%;
        padding-bottom: 30px;
      }
    }

    footer {
      padding-top: 100px;
    }
  }
`;
