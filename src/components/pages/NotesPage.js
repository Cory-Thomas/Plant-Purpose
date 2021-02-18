import React from 'react';
import { StyledDiv } from './styles/NotesPage-styling';
import { Header } from '../common/Header';
import { UserMenu } from '../common/UserMenu';
import { Notes } from '../common/Notes';

export const NotesPage = () => {
  return (
    <StyledDiv>
      <Header />
      <main>
        <UserMenu />
        <Notes />
      </main>
    </StyledDiv>
  );
};
