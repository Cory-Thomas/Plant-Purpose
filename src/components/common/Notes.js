import React from 'react';
import { connect } from 'react-redux';
import { StyledDiv } from './styles/Notes-styling';

const Notes = ({ notes, plants }) => {
  return (
    <StyledDiv className='notes'>
      <h2>My Notes</h2>
      {notes.map((note) => {
        return (
          <div key={note.id}>
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

            <p>{note.body}</p>
          </div>
        );
      })}
    </StyledDiv>
  );
};

const mapStateToProps = (state) => {
  return {
    plants: state.plantR.plants,
    notes: state.noteR.notes,
  };
};

export default connect(mapStateToProps, {})(Notes);
