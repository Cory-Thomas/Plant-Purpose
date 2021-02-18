import { axiosWithAuth } from '../utils/axiosWithAuth';

const getUsername = () => {
  return axiosWithAuth()
    .get(`/users/${localStorage.getItem('id')}`)
    .then((res) => res.data);
};

export { getUsername };
