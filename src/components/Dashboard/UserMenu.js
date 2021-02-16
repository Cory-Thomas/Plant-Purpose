import React from 'react';
import { Dashboard } from '@styled-icons/material/Dashboard';
import { Plant } from '@styled-icons/remix-fill/Plant';
import { CalendarCheck } from '@styled-icons/boxicons-solid/CalendarCheck';
import { SpeakerNotes } from '@styled-icons/material-rounded/SpeakerNotes';
import { Settings } from '@styled-icons/ionicons-sharp/Settings';
import { Notifications } from '@styled-icons/material/Notifications';

export const UserMenu = () => {
  return (
    <>
      <div class='userMenu'>
        <div class='userInfo'>
          <img src='#' alt='profile avatar' />
          <h3>Username</h3>
        </div>

        <section>
          <div>
            <Dashboard className='icon' />
            Dashboard
          </div>

          <div>
            <Plant className='icon' />
            My Plants
          </div>

          <div>
            <CalendarCheck className='icon' />
            Tasks
          </div>

          <div>
            <SpeakerNotes className='icon' />
            Notes
          </div>

          <div>
            <Settings className='icon' />
            Settings
          </div>

          <div>
            <Notifications className='icon' />
            Notifications
          </div>
        </section>
      </div>
    </>
  );
};
