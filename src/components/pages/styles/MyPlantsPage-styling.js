import styled from 'styled-components';

export const StyledDiv = styled.div`
  width: 100%;
  background-color: var(--background);

  main {
    display: grid;
    grid-template-areas:
      'user plants plants plants'
      'user plants plants plants'
      'user plants plants plants'
      'user addPlants addPlants addPlants';
    gap: 30px;
    margin: 30px;
    padding-bottom: 40px;

    div {
      border-radius: 4px;
    }

    .userMenu {
      grid-area: user;
      max-width: 300px;

      .item-myPlants {
        background-color: var(--lighttone);
      }
    }

    .myPlants {
      grid-area: plants;
    }

    .addPlant {
      grid-area: addPlants;
      padding: 30px;
    }
  }

  @media (max-width: 1080px) {
    main {
      grid-template-areas:
        'user addPlants '
        'plants plants ';
    }
  }

  @media (max-width: 780px) {
    main {
      grid-template-areas:
        'user'
        'plants '
        'addPlants';
    }
  }
`;
