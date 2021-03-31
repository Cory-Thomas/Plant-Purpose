import styled from 'styled-components';

export const StyledDiv = styled.div`
  background-color: var(--font-white);
  padding: 20px;

  h2,
  h3,
  p {
    margin: 0;
  }

  header {
    display: flex;
    justify-content: space-between;
  }

  h2 {
    font-size: 1.8rem;
    line-height: 27px;
    letter-spacing: 0.08em;
  }

  .noNotes {
    padding: 30px 20px;
  }

  div {
    background-color: var(--background);
    padding: 10px 6px;
    margin: 10px 0;

    header {
      display: flex;
      justify-content: space-between;

      svg {
        width: 25px;
        cursor: pointer;
      }

      svg:hover {
        color: var(--primary);
      }
    }
  }

  p {
    padding: 6px 0;
  }

  a {
    display: flex;

    span {
      margin: auto;
    }

    svg {
      width: 25px;
    }
  }
`;
