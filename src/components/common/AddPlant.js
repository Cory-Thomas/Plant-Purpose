import React from 'react';
import { StyledDiv } from './styles/AddPlant-styling';
import { PlusCircle } from '@styled-icons/bootstrap/PlusCircle';
import pot from '../../assets/pot.PNG';
import Modal from 'react-modal';
import { AddPlantForm } from './AddPlantForm';
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';

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
      <div className='addPlantCard' onClick={openModal}>
        <img src={pot} alt='empty pot' />
        <PlusCircle className='icon' />
        <div>Add Plants</div>
      </div>

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
        <CloseOutline onClick={closeModal} className='exitLogo' />
        <AddPlantForm
          closeModal={closeModal}
          plantUpdate={plantUpdate}
          setPlantUpdate={setPlantUpdate}
        />
      </Modal>
    </StyledDiv>
  );
};
