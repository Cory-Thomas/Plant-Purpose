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
      justify-content: space-around;
      align-items: center;
    }
  }

  section {
    display: flex;
    justify-content: space-around;
  }
`;
