import React from 'react';
import { StyledDiv } from './styles/AddPlant-styling';
import { PlusCircle } from '@styled-icons/bootstrap/PlusCircle';

export const AddPlant = () => {
  return (
    <StyledDiv className='addPlant'>
      <img src='#' />
      <PlusCircle className='icon' />
      <div>Add Plants</div>
    </StyledDiv>
  );
};
