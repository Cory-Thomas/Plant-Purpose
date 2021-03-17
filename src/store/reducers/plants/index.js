import { FETCH_PLANTS } from '../../actions/plantActions';

const initialState = {
  plants: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PLANTS:
      return {
        ...state,
        plants: action.payload.plants,
      };
    default:
      return state;
  }
};

export default reducer;
