import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  height: 96px;
  background-color: var(--font-white);
  padding: 0 3%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    width: 140px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      margin-left: 7px;
      font-size: 2.4rem;
      color: var(--primary);
      font-weight: 300;
      line-height: 27px;
      text-align: right;
      letter-spacing: 0.08em;
      text-transform: capitalize;
    }
  }
`;
