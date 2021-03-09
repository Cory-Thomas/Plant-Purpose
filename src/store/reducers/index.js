import { ADD_USER } from '../actions/userActions';

const initialState = {
  username: '',
  id: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      console.log('Payload: ', action.payload);
      console.log('User state: ', state);
      return {
        ...state,
        username: action.payload.data.username,
        id: action.payload.id,
      };
    default:
      return state;
  }
};

export default reducer;
