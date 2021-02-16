import React from 'react';
import { StyledDiv } from './styles/MyPlants-styling';

export const MyPlants = () => {
  return (
    <StyledDiv className='myPlants'>
      <h2>My Plants</h2>
      <div className='plantGallery'>
        <div>
          <img src='#' />
          <h3>plant name</h3>
        </div>
        <div>
          <img src='#' />
          <h3>plant name</h3>
        </div>
        <div>
          <img src='#' />
          <h3>plant name</h3>
        </div>
      </div>
    </StyledDiv>
  );
};
