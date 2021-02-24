import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { StyledHeader } from './styles/Header-styling';
import plantLogo from '../../assets/plantLogo.svg';
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
        <img src={plantLogo} alt='Plant Purpose logo' />
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
