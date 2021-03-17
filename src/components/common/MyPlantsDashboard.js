import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { StyledDiv } from './styles/MyPlantsDashboard-styling';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { ChevronRight } from '@styled-icons/boxicons-regular/ChevronRight';
import { ImageNotSupported } from '@styled-icons/material/ImageNotSupported';
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';
import { PlantEditForm } from './PlantEditForm';
import Modal from 'react-modal';

const MyPlantsDashboard = ({ id }) => {
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
    setShowForm(false);
  }

  useEffect(() => {
    let mounted = true;

    axiosWithAuth()
      .get(`/plants/user/${id}`)
      .then((res) => {
        if (mounted) {
          setPlants(res.data);
        }
      })
      .catch((err) => {
        console.log('Plants error: ', err);
      });

    return function cleanup() {
      mounted = false;
    };
  }, [plants, id]);

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
        {plants.length === 0 ? (
          <div className='noPlants'>No Plants Currently Uploaded</div>
        ) : (
          plants
            .reverse()
            .slice(0, 2)
            .map((plant) => {
              return (
                <div
                  onClick={() => openModal(plant)}
                  key={plant.id}
                  className='plant'
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
  };
};

export default connect(mapStateToProps, {})(MyPlantsDashboard);
