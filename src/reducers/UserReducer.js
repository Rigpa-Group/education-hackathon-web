import {ADMIN, USER_PROFILE} from './ActionTypes';

export const userReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {authenticated: true, ...action.payload};
    case ADMIN:
      return ADMIN;
    case 'INVITED':
      return {...action.payload};
    case 'LOGOUT':
      return {};
    default:
      return state;
  }
};

export const userProfileReducer = (state, action) => {
  switch (action.type) {
    case USER_PROFILE:
      return {...action.payload};
    case 'LOGOUT':
      return {};
    default:
      return state;
  }
};

const initialUser = {
  authenticated: false,
  id: 0,
  token: JSON.parse(localStorage.getItem('token')) || JSON.parse(sessionStorage.getItem('token')) || '',
  ...(JSON.parse(localStorage.getItem('user')) || JSON.parse(sessionStorage.getItem('user')) || {})
};
initialUser.authenticated = !!initialUser.token;
export {initialUser};
