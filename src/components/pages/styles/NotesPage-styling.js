import styled from 'styled-components';

export const StyledDiv = styled.div`
  width: 100%;
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
      max-width: 300px;

      .item-notes {
        background-color: var(--lighttone);
      }
    }

    .notes {
      grid-area: notes;
    }
  }

  @media (max-width: 780px) {
    main {
      grid-template-areas:
        'user'
        'notes';
    }
  }
`;
