import React, { useState, useEffect } from 'react';
import { StyledDiv } from './styles/MyPlants-styling';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { ImageNotSupported } from '@styled-icons/material/ImageNotSupported';
import Modal from 'react-modal';
import { PlantEditForm } from './PlantEditForm';

export const MyPlants = ({ plantUpdate, setPlantUpdate }) => {
  const [plants, setPlants] = useState([]);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [selectedPlant, setSelectedPlant] = useState([]);
  const [showForm, setShowForm] = useState(false);

  function openModal(props) {
    setSelectedPlant(props);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setSelectedPlant([]);
    setPlantUpdate(plantUpdate + 1);
    setShowForm(false);
  }

  useEffect(() => {
    axiosWithAuth()
      .get(`/plants/user/${localStorage.getItem('id')}`)
      .then((res) => {
        setPlants(res.data);
      })
      .catch((err) => {
        console.log('Plants error: ', err);
      });
  }, [plantUpdate]);

  return (
    <StyledDiv className='myPlants'>
      <h2>My Plants</h2>
      <div className='plantGallery'>
        {plants.map((plant) => {
          return (
            <div key={plant.id} onClick={() => openModal(plant)}>
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

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel='Example Modal'
          ariaHideApp={false}
          style={{
            content: {
              width: '50%',
              height: '50%',
              margin: '0 auto',
              backgroundColor: 'white',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              border: '2px var(--primary) solid',
              borderRadius: '10px',
            },
          }}
        >
          {showForm === true ? (
            <PlantEditForm
              plant={selectedPlant}
              showForm={showForm}
              setShowForm={setShowForm}
            />
          ) : (
            <div>
              {/* if plant image url doesn't exist then show a no image icon */}
              {selectedPlant.image_url === '' ? (
                <ImageNotSupported />
              ) : (
                <img src={selectedPlant.image_url} alt=' ' />
              )}
              <h3>{selectedPlant.nickname}</h3>
              <button onClick={() => setShowForm(!showForm)}>edit plant</button>
            </div>
          )}

          <button onClick={closeModal} className='modalButton'>
            close
          </button>
        </Modal>
      </div>
    </StyledDiv>
  );
};
