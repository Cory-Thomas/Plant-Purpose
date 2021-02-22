import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { StyledDiv } from './styles/MyPlantsDashboard-styling';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { ChevronRight } from '@styled-icons/boxicons-regular/ChevronRight';
import { ImageNotSupported } from '@styled-icons/material/ImageNotSupported';

export const MyPlantsDashboard = ({ plantUpdate }) => {
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
      <div className='header'>
        <h2>My Plants</h2>

        <Link to='/myplants'>
          <span>View All</span>
          <ChevronRight />
        </Link>
      </div>

      <div className='plantGallery'>
        {/* Only shows the newest three plants */}
        {plants
          .reverse()
          .slice(0, 2)
          .map((plant) => {
            return (
              <div key={plant.id}>
                {/* if plant image url doesn't exist then show a no image icon */}
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
