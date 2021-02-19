import React, { useState } from 'react';
import { StyledDiv } from './styles/Dashboard-styling';
import { Header } from '../common/Header';
import { UserMenu } from '../common/UserMenu';
import { Tabs } from '../common/Tabs';
import { MyPlants } from '../common/MyPlants';
import { Notes } from '../common/Notes';
import { Calendar } from '../common/Calendar';
import { AddPlant } from '../common/AddPlant';

export const Dashboard = () => {
  const [plantUpdate, setPlantUpdate] = useState(0);

  return (
    <StyledDiv>
      <Header />

      <main>
        <UserMenu />
        <Tabs />
        <MyPlants plantUpdate={plantUpdate} />
        <Notes />
        <Calendar />
        <AddPlant setPlantUpdate={setPlantUpdate} plantUpdate={plantUpdate} />
      </main>
    </StyledDiv>
  );
};
