import { FETCH_NOTES } from '../../actions/noteActions';

const initialState = {
  notes: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTES:
      return {
        ...state,
        notes: action.payload.notes,
      };
    default:
      return state;
  }
};

export default reducer;
