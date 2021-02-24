import styled from 'styled-components';

export const StyledDiv = styled.div`
  background-color: var(--font-white);
  padding: 20px;

  h2,
  h3,
  p {
    margin: 0;
  }

  h2 {
    font-size: 1.8rem;
    line-height: 27px;
    letter-spacing: 0.08em;
  }

  div {
    background-color: var(--background);
    padding: 10px 6px;
    margin: 10px 0;
  }

  p {
    padding: 6px 0;
  }
`;
