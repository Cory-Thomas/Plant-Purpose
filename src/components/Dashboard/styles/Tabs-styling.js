import styled from 'styled-components';

export const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    background-color: var(--font-white);
    width: 130px;
    height: 120px;
  }

  .tab {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
