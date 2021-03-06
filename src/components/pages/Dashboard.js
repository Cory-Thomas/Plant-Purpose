import React, { useState } from 'react';
import { StyledDiv } from './styles/Dashboard-styling';
import Header from '../common/Header';
import UserMenu from '../common/UserMenu';
import Tabs from '../common/Tabs';
import MyPlantsDashboard from '../common/MyPlantsDashboard';
import NotesDashboard from '../common/NotesDashboard';
import Calendar from '../common/Calendar';
import { AddPlant } from '../common/AddPlant';

export const Dashboard = () => {
  const [plantUpdate, setPlantUpdate] = useState(0);

  return (
    <StyledDiv>
      <Header />

      <main>
        <UserMenu />
        <Tabs />
        <MyPlantsDashboard plantUpdate={plantUpdate} />
        <NotesDashboard />
        <Calendar />
        <AddPlant setPlantUpdate={setPlantUpdate} plantUpdate={plantUpdate} />
      </main>
    </StyledDiv>
  );
};
