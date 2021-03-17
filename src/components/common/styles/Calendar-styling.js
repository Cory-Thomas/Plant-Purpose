import styled from 'styled-components';

export const StyledDiv = styled.div`
  background-color: var(--font-white);
  z-index: 0;

  .fc {
    /* the calendar root */
    height: 400px;

    h2 {
      font-size: 2.4rem;
      margin-top: 15px;
    }

    .fc-button {
      padding: 5px;
    }

    .fc-day-today {
      background-color: var(--lighttone);
    }

    .fc-icon,
    .fc-button {
      background-color: white;
      border: 0;
      color: black;
    }
  }
`;
