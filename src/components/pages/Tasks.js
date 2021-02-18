import React from 'react';
import { StyledDiv } from './styles/Tasks-styling';
import { Header } from '../common/Header';
import { UserMenu } from '../common/UserMenu';

export const Tasks = () => {
  return (
    <StyledDiv>
      <Header />

      <main>
        <UserMenu />
        Tasks
      </main>
    </StyledDiv>
  );
};
