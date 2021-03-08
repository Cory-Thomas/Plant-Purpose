import { axiosWithAuth } from '../../../utils/axiosWithAuth';

export const ADD_USER = 'add-user';

export const signin = (data, history) => {
  return (dispatch) => {
    axiosWithAuth()
      .post('/auth/login', data)
      .then((res) => {
        window.localStorage.clear();
        window.localStorage.setItem('token', res.data.token);
        window.localStorage.setItem('id', res.data.user.id);
        dispatch({ type: ADD_USER, payload: data });

        history.push('/dashboard');
      })
      .catch((err) => {
        console.log('login error: ', err);
      });
  };
};

export const signup = (data) => {
  console.log(data);
  return (dispatch) => {
    axiosWithAuth()
      .post('/auth/register', data)
      .then((response) => {
        console.log('signup response ', response.data.data);
        dispatch({ type: ADD_USER, payload: response.data.data });
        // history.push( "/login" );
      })
      .catch((error) => {
        console.log('signup error ', error);
      });
  };
};
