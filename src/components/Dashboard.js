import React from 'react';
import { Link, useHistory } from 'react-router-dom';

export const Dashboard = () => {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.clear();
    history.push('/');
  };

  return (
    <>
      <header>
        <div>
          <img src='#' alt='logo' />
          <h1>
            Plant
            <br />
            Purpose
          </h1>
        </div>

        <Link to='/' onClick={handleLogout}>
          Logout
        </Link>
      </header>
    </>
  );
};
