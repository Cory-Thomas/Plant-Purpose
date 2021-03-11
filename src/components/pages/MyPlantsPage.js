import React, { useState } from 'react';
import { StyledDiv } from './styles/MyPlantsPage-styling';
import Header from '../common/Header';
import UserMenu from '../common/UserMenu';
import MyPlants from '../common/MyPlants';
import { AddPlant } from '../common/AddPlant';

export const MyPlantsPage = () => {
  const [plantUpdate, setPlantUpdate] = useState(0);

  return (
    <StyledDiv>
      <Header />

      <main>
        <UserMenu />
        <MyPlants setPlantUpdate={setPlantUpdate} plantUpdate={plantUpdate} />
        <AddPlant setPlantUpdate={setPlantUpdate} plantUpdate={plantUpdate} />
      </main>
    </StyledDiv>
  );
};
