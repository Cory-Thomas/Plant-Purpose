import React from 'react';
import { StyledDiv } from './styles/Dashboard-styling';
import { Header } from '../common/Header';
import { UserMenu } from '../common/UserMenu';
import { Tabs } from '../common/Tabs';
import { MyPlants } from '../common/MyPlants';
import { Notes } from '../common/Notes';
import { Calendar } from '../common/Calendar';
import { AddPlant } from '../common/AddPlant';

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
