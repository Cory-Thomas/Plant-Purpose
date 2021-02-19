import React, { useState, useEffect } from 'react';
import { StyledDiv } from './styles/MyPlants-styling';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

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
        {/* Only shows first three plants if there are more than 3 plants */}
        {plants.length > 3
          ? plants
              .reverse()
              .slice(0, 3)
              .map((plant) => {
                return (
                  <div key={plant.id}>
                    <img
                      src={plant.image_url}
                      alt=' '
                      style={{ width: '30%' }}
                    />
                    <h3>{plant.nickname}</h3>
                  </div>
                );
              })
          : null}
      </div>
    </StyledDiv>
  );
};
