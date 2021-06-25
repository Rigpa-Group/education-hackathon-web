import {baseApi} from '../utils/ApiUtils';


export const login = (payload, dispatch) => {
  return baseApi(`/users/sign_in`, 'post', null, payload).then(response => {
    if (response.data) {
      const token = response.headers['authorization'];
      const storage = localStorage;
      storage.setItem('user', JSON.stringify(response.data.user));
      storage.setItem('token', JSON.stringify(token));
      dispatch({type: 'LOGIN', payload: response.data.user});
    }
    return response.data;
  });
};

export const emailConfirmation = (payload, dispatch) => {
  return baseApi(`/users/confirmation`, 'get', payload).then((response) => {
    const token = response.headers['authorization'];
    const storage = localStorage;
    storage.setItem('user', JSON.stringify(response.data.user));
    storage.setItem('token', JSON.stringify(token));
    dispatch({type: 'LOGIN', payload: response.data.user});
    return response.data;
  });
};

export const logout = (dispatch) => {
  return baseApi(`/users/sign_out`, 'delete').then(response => {
    localStorage.clear();
    sessionStorage.clear();
    dispatch({type: 'LOGOUT'});
    return response;
  });
};
