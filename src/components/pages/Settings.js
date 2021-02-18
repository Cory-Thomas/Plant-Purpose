import React from 'react';
import { StyledDiv } from './styles/Settings-styling';
import { Header } from '../common/Header';
import { UserMenu } from '../common/UserMenu';

export const Settings = () => {
  return (
    <StyledDiv>
      <Header />

      <main>
        <UserMenu />
        Settings
      </main>
    </StyledDiv>
  );
};
