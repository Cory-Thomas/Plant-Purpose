import { axiosWithAuth } from '../../../utils/axiosWithAuth';

export const FETCH_PLANTS = 'fetch_plants';

export const fetchPlants = (id) => {
  return (dispatch) => {
    axiosWithAuth()
      .get(`/plants/user/${id}`)
      .then((res) => {
        dispatch({ type: FETCH_PLANTS, payload: { plants: res.data } });
      })
      .catch((err) => {
        console.log('Plants error: ', err);
      });
  };
};
