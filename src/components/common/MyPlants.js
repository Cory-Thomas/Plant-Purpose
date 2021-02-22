import React, { useState, useEffect } from 'react';
import { StyledDiv } from './styles/MyPlants-styling';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { ImageNotSupported } from '@styled-icons/material/ImageNotSupported';

export const MyPlants = ({ plantUpdate }) => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get(`/plants/user/${localStorage.getItem('id')}`)
      .then((res) => {
        setPlants(res.data);
        console.log('here');
      })
      .catch((err) => {
        console.log('Plants error: ', err);
      });
  }, [plantUpdate]);

  console.log(plants);

  return (
    <StyledDiv className='myPlants'>
      <h2>My Plants</h2>
      <div className='plantGallery'>
        {plants.reverse().map((plant) => {
          return (
            <div key={plant.id}>
              {plant.image_url === '' ? (
                <ImageNotSupported />
              ) : (
                <img src={plant.image_url} alt=' ' />
              )}

              <h3>{plant.nickname}</h3>
            </div>
          );
        })}
      </div>
    </StyledDiv>
  );
};
