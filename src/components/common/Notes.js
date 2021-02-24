import React from 'react';
import { StyledDiv } from './styles/Notes-styling';

export const Notes = () => {
  return (
    <StyledDiv className='notes'>
      <h2>My Notes</h2>
      <div>
        <h3>Swiss Cheese Plant</h3>
        <p>Consectetur fugiat nulla duis officia sunt.</p>
      </div>
      <div>
        <h3>Philodendron Heartleaf</h3>
        <p>
          Quis velit enim labore tempor sunt. Cillum minim quis in officia sint
          aliquip qui exercitation eu laboris aliquip.
        </p>
      </div>
    </StyledDiv>
  );
};
