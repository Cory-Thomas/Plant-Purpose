import { ADD_USER } from '../actions/userActions';
import { LOGOUT } from '../actions/userActions';

const initialState = {
  username: '',
  id: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        username: action.payload.data.username,
        id: action.payload.id,
      };
    case LOGOUT:
      return {
        ...state,
        username: '',
        id: '',
      };

    default:
      return state;
  }
};

export default reducer;
