import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { StyledDiv } from './styles/Notes-styling';
import { ChevronRight } from '@styled-icons/boxicons-regular/ChevronRight';
import { useEffect } from 'react/cjs/react.development';
import { fetchAllNotes } from '../../store/actions/noteActions';

const Notes = ({ notes, plants, fetchAllNotes }) => {
  useEffect(() => {
    fetchAllNotes(plants);
  }, [fetchAllNotes, plants]);

  return (
    <StyledDiv className='notes'>
      <header>
        <h2>My Notes</h2>
        <Link to='/notes'>
          <span>View All</span>
          <ChevronRight />
        </Link>
      </header>

      {notes
        // .slice(0, 2)
        // .reverse()
        .map((note) => {
          let plantExists = true;
          return (
            <div key={note.id}>
              <h3>
                {plants.map((plant) => {
                  if (note.plant_id === plant.id) {
                    return plant.nickname;
                  } else {
                    // adding in 'else' to prevent a warning caused by the map not returning a value
                    plantExists = false;
                    return null;
                  }
                })}
              </h3>
              {plantExists ? null : <p>{note.body}</p>}
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

export default connect(mapStateToProps, { fetchAllNotes })(Notes);
