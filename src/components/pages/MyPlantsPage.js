import React from 'react';
import { StyledDiv } from './styles/MyPlantsPage-styling';
import { Header } from '../common/Header';
import { UserMenu } from '../common/UserMenu';
import { MyPlants } from '../common/MyPlants';
import { AddPlant } from '../common/AddPlant';

export const MyPlantsPage = () => {
  return (
    <StyledDiv>
      <Header />

      <main>
        <UserMenu />
        <MyPlants />
        <AddPlant />
      </main>
    </StyledDiv>
  );
};
