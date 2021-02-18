import React from 'react';
import { StyledDiv } from './styles/Dashboard-styling';
import { Header } from './Header';
import { UserMenu } from './UserMenu';
import { Tabs } from './Tabs';
import { MyPlants } from './MyPlants';
import { Notes } from './Notes';
import { Calendar } from './Calendar';
import { AddPlant } from './AddPlant';

export const Dashboard = () => {
  return (
    <StyledDiv>
      <Header />

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
