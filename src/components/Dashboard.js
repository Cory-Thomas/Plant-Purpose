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
      <p>Dashboard</p>
      <Link to='/' onClick={handleLogout}>
        Logout
      </Link>
    </>
  );
};
