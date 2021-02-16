import React from 'react';
import { StyledDiv } from './styles/Tabs-styling';
import { Plant } from '@styled-icons/remix-fill/Plant';
import { CalendarCheck } from '@styled-icons/boxicons-solid/CalendarCheck';
import { Notifications } from '@styled-icons/material/Notifications';
import { SpeakerNotes } from '@styled-icons/material-rounded/SpeakerNotes';

export const Tabs = () => {
  return (
    <StyledDiv className='tabs'>
      <div className='tab'>
        <Plant className='icon' />
        Plants
      </div>
      <div className='tab'>
        <CalendarCheck className='icon' />
        Tasks
      </div>
      <div className='tab'>
        <Notifications className='icon' />
        Notification
      </div>
      <div className='tab'>
        <SpeakerNotes className='icon' />
        Notes
      </div>
    </StyledDiv>
  );
};
