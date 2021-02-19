import React from 'react';
import { StyledDiv } from './styles/AddPlant-styling';
import { PlusCircle } from '@styled-icons/bootstrap/PlusCircle';
import pot from '../../assets/pot.PNG';
import Modal from 'react-modal';
import { AddPlantForm } from './AddPlantForm';

export const AddPlant = ({ plantUpdate, setPlantUpdate }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setPlantUpdate(plantUpdate + 1);
    setIsOpen(false);
  }

  return (
    <StyledDiv className='addPlant'>
      <img src={pot} alt=' ' onClick={openModal} />
      <PlusCircle className='icon' onClick={openModal} />
      <div onClick={openModal}>Add Plants</div>

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
        <AddPlantForm />

        <button onClick={closeModal} className='modalButton'>
          close
        </button>
      </Modal>
    </StyledDiv>
  );
};
