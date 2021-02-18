import React from 'react';
import { StyledDiv } from './styles/Notifications-styling';
import { Header } from '../common/Header';
import { UserMenu } from '../common/UserMenu';

export const Notifications = () => {
  return (
    <StyledDiv>
      <Header />

      <main>
        <UserMenu />
        Notifications
      </main>
    </StyledDiv>
  );
};
