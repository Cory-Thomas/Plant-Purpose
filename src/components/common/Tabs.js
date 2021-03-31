import React from 'react';
import { connect } from 'react-redux';
import { StyledDiv } from './styles/Tabs-styling';
import { Plant } from '@styled-icons/remix-fill/Plant';
import { CalendarCheck } from '@styled-icons/boxicons-solid/CalendarCheck';
import { Notifications } from '@styled-icons/material/Notifications';
import { SpeakerNotes } from '@styled-icons/material-rounded/SpeakerNotes';

const Tabs = ({ plant, notes }) => {
  return (
    <StyledDiv className='tabs'>
      <div className='tab'>
        <Plant className='icon' />
        <p className='middle'>{plant.length}</p> <p>Plants</p>
      </div>
      <div className='tab'>
        <CalendarCheck className='icon' />
        <p className='middle'>0</p> <p>Tasks</p>
      </div>
      <div className='tab'>
        <Notifications className='icon' />
        <p className='middle'>0</p> <p>Notifications</p>
      </div>
      <div className='tab'>
        <SpeakerNotes className='icon' />
        <p className='middle'>{notes.length}</p> <p>Notes</p>
      </div>
    </StyledDiv>
  );
};

const mapStateToProps = (state) => {
  return {
    plant: state.plantR.plants,
    notes: state.noteR.notes,
  };
};

export default connect(mapStateToProps, {})(Tabs);
