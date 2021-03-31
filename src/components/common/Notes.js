import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import { StyledDiv } from './styles/Notes-styling';
import { ChevronRight } from '@styled-icons/boxicons-regular/ChevronRight';
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';
import { Trash } from '@styled-icons/ionicons-solid/Trash';
import { useEffect } from 'react/cjs/react.development';
import { fetchAllNotes, deleteNote } from '../../store/actions/noteActions';

const Notes = ({ notes, plants, fetchAllNotes, deleteNote }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedNote, setSelectedNote] = useState([]);

  function openModal(props) {
    setSelectedNote(props);
    setIsOpen(true);
  }

  function closeModal() {
    setSelectedNote([]);
    setIsOpen(false);
  }

  function deleteSelectedNote() {
    deleteNote(selectedNote.id);
    setSelectedNote([]);

    closeModal();
  }

  useEffect(() => {
    fetchAllNotes(plants);
  }, [fetchAllNotes, plants, selectedNote, notes]);

  return (
    <StyledDiv className='notes'>
      <header>
        <h2>My Notes</h2>
        <Link to='/notes'>
          <span>View All</span>
          <ChevronRight />
        </Link>
      </header>

      {notes.map((note) => {
        return (
          <div key={note.id}>
            <header>
              <h3>
                {plants.map((plant) => {
                  if (note.plant_id === plant.id) {
                    return plant.nickname;
                  } else {
                    // adding in 'else' to prevent a warning caused by the map not returning a value

                    return null;
                  }
                })}
              </h3>
              <Trash onClick={() => openModal(note)} />
            </header>
            <p>{note.body}</p>
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
        <CloseOutline onClick={closeModal} className='exitLogo' />
        <div>Want to delete note?</div>
        <button onClick={deleteSelectedNote}>Yes</button>
        <button onClick={closeModal}>No</button>
      </Modal>
    </StyledDiv>
  );
};

const mapStateToProps = (state) => {
  return {
    plants: state.plantR.plants,
    notes: state.noteR.notes,
  };
};

export default connect(mapStateToProps, { fetchAllNotes, deleteNote })(Notes);
