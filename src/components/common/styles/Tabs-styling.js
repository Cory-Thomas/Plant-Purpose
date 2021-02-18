import styled from 'styled-components';

export const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    background-color: var(--font-white);
    width: 120px;
    height: 110px;
    box-sizing: border-box;
  }

  .tab {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    padding-bottom: 14px;

    .icon {
      color: var(--font-secondary);
    }

    p {
      margin: 0;
    }

    .middle {
      padding: 5px 0;
    }
  }
`;
