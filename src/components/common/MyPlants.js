import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPlants } from '../../store/actions/plantActions';
import { StyledDiv } from './styles/MyPlants-styling';
import { ImageNotSupported } from '@styled-icons/material/ImageNotSupported';
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';
import Modal from 'react-modal';
import PlantEditForm from './PlantEditForm';

const MyPlants = ({ plantUpdate, setPlantUpdate, id, fetchPlants, plants }) => {
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
    fetchPlants(id);
  }, [plants, fetchPlants, id]);

  return (
    <StyledDiv className='myPlants'>
      <h2>My Plants</h2>

      <div className='plantGallery'>
        {plants.length === 0 ? (
          <div className='noPlants'>No Plants Currently Uploaded</div>
        ) : (
          plants.map((plant) => {
            return (
              <div
                className='plant'
                key={plant.id}
                onClick={() => openModal(plant)}
              >
                {/* if plant image url doesn't exist then show a no image icon */}
                {plant.image_url === '' ? (
                  <ImageNotSupported />
                ) : (
                  <img src={plant.image_url} alt='plant' />
                )}

                <h3>{plant.nickname}</h3>
              </div>
            );
          })
        )}

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel='Example Modal'
          ariaHideApp={false}
          style={{
            content: {
              width: '60%',
              height: '630px',
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
          <CloseOutline onClick={closeModal} className='exitLogo' />

          {showForm === true ? (
            <PlantEditForm
              plant={selectedPlant}
              showForm={showForm}
              setShowForm={setShowForm}
              closeModal={closeModal}
            />
          ) : (
            <div className='plantCard'>
              {/* if plant image url doesn't exist then show a no image icon */}
              {selectedPlant.image_url === '' ? (
                <ImageNotSupported />
              ) : (
                <img src={selectedPlant.image_url} alt='plant' />
              )}
              <div className='plantDetails'>
                <div>
                  <span>Name: </span>
                  {selectedPlant.nickname}
                </div>

                <div>
                  <span>Species: </span>
                  {selectedPlant.species}
                </div>
              </div>

              <button onClick={() => setShowForm(!showForm)}>Edit Plant</button>
            </div>
          )}
        </Modal>
      </div>
    </StyledDiv>
  );
};

const mapStateToProps = (state) => {
  return {
    id: state.userR.id,
    plants: state.plantR.plants,
  };
};

export default connect(mapStateToProps, { fetchPlants })(MyPlants);
