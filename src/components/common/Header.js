import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../store/actions/userActions';
import { StyledHeader } from './styles/Header-styling';
import plantLogo from '../../assets/plantLogo.svg';
import { Logout } from '@styled-icons/heroicons-outline/Logout';

const Header = ({ logout }) => {
  const history = useHistory();

  const handleLogout = () => {
    logout(history);
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

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, { logout })(Header);
