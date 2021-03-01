import React from 'react';
import { Link } from 'react-router-dom';
import { StyledDiv } from './styles/Home-styling';
import plantLogo from '../../assets/plantLogo.svg';
import wateringCan from '../../assets/wateringCan.svg';
import plant from '../../assets/plantFeatureLogo.svg';
import plantNotes from '../../assets/plantNotes.svg';
import plantPrimary from '../../assets/plantPrimary.svg';
import vectorBackground from '../../assets/vectorBackground.svg';
import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/twitter.svg';
import instagram from '../../assets/instagram.svg';
import plantFeature from '../../assets/plantFeature.svg';

export const Home = () => {
  return (
    <StyledDiv>
      <header>
        <div className='logo'>
          <img src={plantLogo} alt='Plant Purpose logo' />
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
          <h2>
            Welcome to
            <span>Plant Purpose</span>
          </h2>
          <p>
            A plant management system, which helps plant owners take better care
            of their plants
          </p>
          <Link to='/signup'>
            <button>Sign Up Now</button>
          </Link>
        </section>

        <div>
          <img src={plantPrimary} alt='plant' className='plant' />
          <img src={vectorBackground} alt='background for plant' />
        </div>
      </main>

      <section className='features'>
        <div>
          <img
            src={plantFeature}
            alt='plant background'
            className='plantFeature'
          />
        </div>
        <div>
          <img src={wateringCan} alt='watering can icon' />
          <h3>Feature 1 Details</h3>
          <p>Voluptate ullamco Voluptate ullamco Voluptate ullamco</p>
        </div>
        <div>
          <img src={plant} alt='plant icon' />
          <h3>Feature 2 Details</h3>
          <p>Voluptate ullamco Voluptate ullamco Voluptate ullamco</p>
        </div>
        <div>
          <img src={plantNotes} alt='notes icon' />
          <h3>Feature 3 Details</h3>
          <p>Voluptate ullamco Voluptate ullamco Voluptate ullamco</p>
        </div>
      </section>

      <footer>
        <div>
          <div>
            <img src={facebook} alt='facebook icon' />
            <img src={twitter} alt='twitter icon' />
            <img src={instagram} alt='instagram icon' />
          </div>
          <div>
            <span>Privacy Policy</span>
            <span>Terms of Use</span>
            <span>Contact Us</span>
          </div>
        </div>
      </footer>
    </StyledDiv>
  );
};
