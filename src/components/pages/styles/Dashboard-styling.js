import styled from 'styled-components';

export const StyledDiv = styled.div`
  width: 100%;
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
      max-width: 300px;

      .item-dashboard {
        background-color: var(--lighttone);
      }
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

    .wip {
      grid-area: wip;
    }
  }

  @media (max-width: 1260px) {
    main {
      grid-template-areas:
        'user tabs tabs'
        'user plants plants'
        'user calendar  addPlants'
        'user notes notes';
    }
  }

  @media (max-width: 1060px) {
    main {
      grid-template-areas:
        'user tabs '
        'user plants '
        'user addPlants'
        'user calendar'
        'user notes';
    }
  }

  @media (max-width: 910px) {
    main {
      grid-template-areas:
        'user'
        'tabs '
        'plants '
        'addPlants'
        'calendar'
        'notes';
    }
  }
`;
