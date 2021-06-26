import {baseApi} from '../utils/ApiUtils';

export const usersApi = (method, payload = null, params = null) => {
  return baseApi(`/users`, method, params, payload).then(response => {
    return response.data;
  });
};

export const usersAction = (method, id, payload = null, params = null) => {
  return baseApi(`/users/${id}`, method, params, payload).then(response => {
    return response.data;
  });
};

export const profileAPi = (method, id, payload = null, params = null) => {
  return baseApi(`/users/profile`, method, params, payload).then(response => {
    return response.data;
  });
};

export const userCountAPi = (method, id, payload = null, params = null) => {
  return baseApi(`/dashboards`, method, params, payload).then(response => {
    return response.data;
  });
};
