import React from 'react';
import { Header } from '../common/Header';
import { UserMenu } from '../common/UserMenu';
import { MyPlants } from '../common/MyPlants';
import { AddPlant } from '../common/AddPlant';

export const MyPlantsPage = () => {
  return (
    <>
      <Header />
      <UserMenu />
      <MyPlants />
      <AddPlant />
      My Plants
    </>
  );
};
