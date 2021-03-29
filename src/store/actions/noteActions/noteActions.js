import { axiosWithAuth } from '../../../utils/axiosWithAuth';

export const FETCH_NOTES = 'fetch_notes';

// export const fetchNotes = () => {
export const fetchNotes = (id) => {
  return (dispatch) => {
    axiosWithAuth()
      // .get(`/notes/`)
      .get(`/notes/plant/${id}`)
      .then((res) => {
        dispatch({ type: FETCH_NOTES, payload: { notes: res.data } });
      })
      .catch((err) => {
        console.log('Notes error: ', err);
      });
  };
};

export const addNote = (data, id) => {
  console.log(data, id);
  return () => {
    axiosWithAuth()
      .post(`/notes/plant/${id}`, data)
      .then(() => {})
      .catch((err) => {
        console.log('Add Note error: ', err);
      });
  };
};

export const deleteNote = (id) => {
  return () => {
    axiosWithAuth()
      .delete(`/notes/${id}`)
      .then(() => {})
      .catch((err) => {
        console.log('Delete Note error: ', err);
      });
  };
};
