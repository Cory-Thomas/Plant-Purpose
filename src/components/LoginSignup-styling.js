import styled from 'styled-components';

export const StyledDiv = styled.div`
  width: 542px;
  height: 582px;
  background-color: var(--background);
  border-radius: 4px;

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
    padding: 6px;
    margin: -8px;
    font-weight: bold;
  }

  section {
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
    font-weight: bold;
    font-size: 2.4rem;
    line-height: 36px;
    letter-spacing: 0.08em;
    text-transform: capitalize;
  }

  p {
    line-height: 18px;
    letter-spacing: 0.08em;
  }

  form {
    height: 150px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    button {
      height: 48px;
    }
  }
`;
