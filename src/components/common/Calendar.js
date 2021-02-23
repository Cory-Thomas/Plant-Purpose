import React from 'react';
import { StyledDiv } from './styles/Calendar-styling';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

export const Calendar = () => {
  return (
    <StyledDiv className='calendar'>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView='dayGridMonth'
        headerToolbar={{
          left: '',
          center: 'title',
          right: 'prev,next',
        }}
        events=''
      />
    </StyledDiv>
  );
};
