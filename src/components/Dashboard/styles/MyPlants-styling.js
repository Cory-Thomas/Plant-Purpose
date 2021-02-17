import styled from 'styled-components';

export const StyledDiv = styled.div`
  background-color: var(--font-white);
  padding: 20px;

  h2 {
    margin: 0;
    font-size: 1.8rem;
    line-height: 27px;
    letter-spacing: 0.08em;
  }

  h3 {
    font-size: 1.8rem;
    line-height: 27px;
    display: flex;
    align-items: center;
    letter-spacing: 0.08em;
    color: var(--font-secondary);
  }

  .plantGallery {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 200px;
  }
`;
