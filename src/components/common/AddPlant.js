import React from 'react';
import { StyledDiv } from './styles/AddPlant-styling';
import { PlusCircle } from '@styled-icons/bootstrap/PlusCircle';
import pot from '../../assets/pot.PNG';

export const AddPlant = () => {
  return (
    <StyledDiv className='addPlant'>
      <img src={pot} alt=' ' />
      <PlusCircle className='icon' />
      <div>Add Plants</div>
    </StyledDiv>
  );
};
