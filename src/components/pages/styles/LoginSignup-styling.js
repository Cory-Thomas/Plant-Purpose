import styled from 'styled-components';

export const StyledDiv = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .background {
    z-index: -1;
    position: absolute;
    bottom: 0;
    right: 0;
  }

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
  }

  section {
    width: 542px;
    height: 582px;
    /* background-color: rgba(248, 246, 245, 0.8); */
    border-radius: 5px;
    margin-bottom: 170px;
    margin-right: 100px;
    display: flex;
    flex-direction: column;
  }

  nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 5px;
    font-size: 2.4rem;
    line-height: 36px;
    letter-spacing: 0.08em;
    text-transform: capitalize;
    border-bottom: 3px solid #e4d5c7;
  }

  // allows the nav item's green border to overlap the nav's tan'ish border
  .signin,
  .signup {
    border-bottom: 3px solid green;
    padding: 7px;
    margin: -8px;
    font-weight: bold;
  }

  .form-main {
    width: 65%;
    margin: 0 auto;
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h2 {
    margin: 5px;
    font-weight: 800;
    font-size: 2.4rem;
    line-height: 36px;
    letter-spacing: 0.07em;
    text-transform: capitalize;
  }

  p {
    line-height: 18px;
    letter-spacing: 0.08em;
    font-size: 1.4rem;
    text-align: center;
  }

  form {
    height: 200px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    input {
      padding: 13px 10px;
      margin: 10px;
      font-size: 1.4rem;
      border: 1px solid var(--primary);
      border-radius: 4px;
      font-weight: bold;
      line-height: 21px;
      letter-spacing: 0.08em;
      color: var(--font-secondary);
    }

    // fixes autofill bug, without this the input text is too small
    input:-webkit-autofill::first-line {
      font-size: 1.4rem;
      font-weight: bold;
      line-height: 21px;
      letter-spacing: 0.08em;
    }

    input:active {
      border: 1px solid var(--primary);
    }

    button {
      height: 48px;
      margin: 10px;
      padding: 15px 5px;
    }
  }

  .guestSignin {
    width: 210px;
    padding: 15px;
    margin: 0 auto;
    margin-top: 5px;
    border-top: 1px solid var(--font-primary);
    display: flex;
    justify-content: center;

    button {
      width: 190px;
      padding: 5px;
    }
  }

  .error {
    color: #ff0033;
    margin: 6px;
    letter-spacing: 0.08em;
  }

  @media (max-width: 500px) {
    section {
      width: 100%;
      margin: 0 auto;

      .form-main {
        width: 100%;
      }
    }
  }
`;
