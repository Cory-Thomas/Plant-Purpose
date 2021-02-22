import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Dashboard } from '@styled-icons/material/Dashboard';
import { Plant } from '@styled-icons/remix-fill/Plant';
import { CalendarCheck } from '@styled-icons/boxicons-solid/CalendarCheck';
import { SpeakerNotes } from '@styled-icons/material-rounded/SpeakerNotes';
import { Settings } from '@styled-icons/ionicons-sharp/Settings';
import { Notifications } from '@styled-icons/material/Notifications';
import { StyledDiv } from './styles/UserMenu-styling';
import { UserCircle } from '@styled-icons/boxicons-solid/UserCircle';
import { getUsername } from '../../api';

export const UserMenu = () => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    getUsername()
      .then((res) => {
        setUsername(res.username);
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
        <Link to='/dashboard'>
          <div className='item-dashboard'>
            <Dashboard className='icon' />
            Dashboard
          </div>
        </Link>

        <Link to='/myplants'>
          <div className='item-myPlants'>
            <Plant className='icon' />
            My Plants
          </div>
        </Link>

        <Link to='/tasks'>
          <div className='item-tasks'>
            <CalendarCheck className='icon' />
            Tasks
          </div>
        </Link>

        <Link to='/notes'>
          <div className='notesItem item-notes'>
            <SpeakerNotes className='icon' />
            Notes
          </div>
        </Link>

        <Link to='/settings'>
          <div className='item-settings'>
            <Settings className='icon' />
            Settings
          </div>
        </Link>

        <Link to='/notifications'>
          <div className='item-notifications'>
            <Notifications className='icon' />
            Notifications
          </div>
        </Link>
      </section>
    </StyledDiv>
  );
};
