import styled from 'styled-components';

export const StyledDiv = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--background);

  main {
    display: grid;
    grid-template-areas:
      'user tabs tabs calendar'
      'user plants plants calendar'
      'user plants plants addPlants'
      'user notes notes addPlants';
    gap: 30px;
    margin: 30px;
    padding-bottom: 40px;

    div {
      border-radius: 4px;
    }

    .userMenu {
      grid-area: user;
    }

    .tabs {
      grid-area: tabs;
    }

    .myPlants {
      grid-area: plants;
    }

    .notes {
      grid-area: notes;
    }

    .calendar {
      grid-area: calendar;
    }

    .addPlant {
      grid-area: addPlants;
    }
  }
`;
