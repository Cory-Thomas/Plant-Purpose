import React from 'react';
import { connect } from 'react-redux';
import { StyledDiv } from './styles/Calendar-styling';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const Calendar = ({ notes }) => {
  // const [change, setChange] = useState(false);

  // useEffect(() => {
  //   setChange(true);
  // }, []);

  const allEvents = notes.map((note) => {
    return {
      title: note.body,
      start: note.date.slice(0, 10).replace(/-/g, '-'), // starts event on day of plant creation
    };
  });

  return (
    <StyledDiv className='calendar'>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView='dayGridMonth'
        headerToolbar={{
          left: 'prev',
          center: 'title',
          right: 'next',
        }}
        events={allEvents}
      />
    </StyledDiv>
  );
};

const mapStateToProps = (state) => {
  return {
    plant: state.plantR.plants,
    notes: state.noteR.notes,
  };
};

export default connect(mapStateToProps, {})(Calendar);
