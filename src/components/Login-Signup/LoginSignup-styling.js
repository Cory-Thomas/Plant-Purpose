import styled from 'styled-components';

export const StyledDiv = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  section {
    width: 542px;
    height: 582px;
    background-color: var(--background);
    border-radius: 4px;
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
    height: 100%;
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

  .error {
    color: #ff0033;
    margin: 6px;
    letter-spacing: 0.08em;
  }
`;
