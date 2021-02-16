import styled from 'styled-components';

export const StyledDiv = styled.div`
  width: 100%;
  background-color: var(--background);

  header {
    width: 100%;
    height: 96px;
    background-color: var(--font-white);
    padding: 0 3%;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
      width: 150px;
      height: 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      h1 {
        margin-left: 15px;
        font-size: 2.4rem;
      }
    }
  }

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
