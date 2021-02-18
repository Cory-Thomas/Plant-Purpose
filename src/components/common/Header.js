import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { StyledHeader } from './styles/Header-styling';
import { Leaf } from '@styled-icons/fa-solid/Leaf';
import { Logout } from '@styled-icons/heroicons-outline/Logout';

export const Header = () => {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.clear();
    history.push('/');
  };

  return (
    <StyledHeader>
      <div>
        <Leaf className='leafIcon' />
        <h1>
          Plant
          <br />
          Purpose
        </h1>
      </div>

      <Link to='/' onClick={handleLogout}>
        <Logout />
        Logout
      </Link>
    </StyledHeader>
  );
};
