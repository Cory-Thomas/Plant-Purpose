import { axiosWithAuth } from '../../../utils/axiosWithAuth';

export const FETCH_PLANTS = 'fetch_plants';
export let captureId = null;

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

export const addPlant = (data, id) => {
  return () => {
    axiosWithAuth()
      .post(`/plants/user/${id}`, data)
      .then((res) => {
        captureId = res.data.plantId[0];
      })
      .catch((err) => {
        console.log('AddPlants error: ', err);
      });
  };
};

export const editPlant = (data, id) => {
  return () => {
    axiosWithAuth()
      .put(`/plants/${id}`, data)
      .then(() => {})
      .catch((err) => {
        console.log('Edit plants error: ', err);
      });
  };
};

export const deletePlant = (id) => {
  return () => {
    axiosWithAuth()
      .delete(`/plants/${id}`)
      .then(() => {})
      .catch((err) => {
        console.log('Delete Plant err: ', err);
      });
  };
};
