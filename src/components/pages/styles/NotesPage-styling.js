import styled from 'styled-components';

export const StyledDiv = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--background);

  main {
    display: grid;
    grid-template-areas: 'user notes notes notes';
    gap: 30px;
    margin: 30px;
    padding-bottom: 40px;

    div {
      border-radius: 4px;
    }

    .userMenu {
      grid-area: user;
    }

    .notes {
      grid-area: notes;
    }
  }
`;
