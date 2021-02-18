import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { Dashboard } from '@styled-icons/material/Dashboard';
import { Plant } from '@styled-icons/remix-fill/Plant';
import { CalendarCheck } from '@styled-icons/boxicons-solid/CalendarCheck';
import { SpeakerNotes } from '@styled-icons/material-rounded/SpeakerNotes';
import { Settings } from '@styled-icons/ionicons-sharp/Settings';
import { Notifications } from '@styled-icons/material/Notifications';
import { StyledDiv } from './styles/UserMenu-styling';
import { UserCircle } from '@styled-icons/boxicons-solid/UserCircle';

export const UserMenu = () => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    axiosWithAuth()
      .get(`/users/${localStorage.getItem('id')}`)
      .then((res) => {
        setUsername(res.data.username);
      })
      .catch((err) => {
        console.log('Username error: ', err);
      });
  }, []);

  return (
    <StyledDiv className='userMenu'>
      <div className='userInfo'>
        <UserCircle className='icon' />
        <h3>{username}</h3>
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

        <div className='notesItem'>
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
    </StyledDiv>
  );
};
