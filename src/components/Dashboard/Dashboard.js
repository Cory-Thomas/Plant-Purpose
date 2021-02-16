import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { StyledDiv } from './styles/Dashboard-styling';
import { UserMenu } from './UserMenu';
import { Tabs } from './Tabs';
import { MyPlants } from './MyPlants';
import { Notes } from './Notes';
import { Calendar } from './Calendar';
import { AddPlant } from './AddPlant';
import { Leaf } from '@styled-icons/fa-solid/Leaf';
import { Logout } from '@styled-icons/heroicons-outline/Logout';

export const Dashboard = () => {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.clear();
    history.push('/');
  };

  return (
    <StyledDiv>
      <header>
        <div>
          <Leaf />
          <h1>
            Plant
            <br />
            Purpose
          </h1>
        </div>

        <Link to='/' onClick={handleLogout}>
          <Logout />
          Logout
        </Link>
      </header>

      <main>
        <UserMenu />
        <Tabs />
        <MyPlants />
        <Notes />
        <Calendar />
        <AddPlant />
      </main>
    </StyledDiv>
  );
};
