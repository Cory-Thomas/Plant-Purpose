import React from 'react';
import { Link } from 'react-router-dom';
import { StyledDiv } from './styles/Home-styling';
import { Leaf } from '@styled-icons/fa-solid/Leaf';

export const Home = () => {
  return (
    <StyledDiv>
      <header>
        <div className='logo'>
          <Leaf />
          <h1>Plant Purpose</h1>
        </div>
        <nav>
          <Link to='/login'>
            <button className='signin'>Sign In</button>
          </Link>
          <Link to='/signup'>
            <button className='signup'>Sign Up</button>
          </Link>
        </nav>
      </header>
      <main>
        <section>
          <h2>Welcome to Plant Purpose</h2>
          <p>
            A plant mangement system, which helps plant owners take better care
            of their plants
          </p>
          <button>Sign Up Now</button>
        </section>
        <div>Image</div>
      </main>
      <section>
        <div>Feature One</div>
        <div>Feature Two</div>
        <div>Feature Three</div>
      </section>
      <footer>Footer</footer>
    </StyledDiv>
  );
};
