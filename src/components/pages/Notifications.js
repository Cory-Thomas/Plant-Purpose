import React from 'react';
import { StyledDiv } from './styles/Notifications-styling';
import Header from '../common/Header';
import UserMenu from '../common/UserMenu';
import { WIP } from '../common/WIP';

export const Notifications = () => {
  return (
    <StyledDiv>
      <Header />

      <main>
        <UserMenu />
        <WIP />
      </main>
    </StyledDiv>
  );
};
