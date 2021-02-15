import styled from 'styled-components';

export const StyledDiv = styled.div`
  width: 100%;
  height: 100%;

  header {
    width: 95%;
    height: 96px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
      width: 150px;
      height: 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      h1 {
        font-size: 2.4rem;
      }
    }
  }
`;
