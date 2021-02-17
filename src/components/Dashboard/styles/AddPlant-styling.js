import styled from 'styled-components';

export const StyledDiv = styled.div`
  background-color: var(--font-white);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 190px;
    border-radius: 4px;
  }

  .icon {
    margin: 35px 0;
  }

  div {
    font-size: 1.8rem;
    line-height: 27px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.08em;
  }
`;
