import axios from 'axios';
import config from './Config';
import {createBrowserHistory} from 'history';
// import {logout} from '../services/AuthServices';

const history = createBrowserHistory();
axios.defaults.baseURL = config.API_URL;
axios.defaults.timeout = 0;

export const ApiUtils = {axios: axios.create({baseURL: config.API_URL, timeout: 0}), dispatch: null};

// Add a request interceptor
ApiUtils.axios.interceptors.request.use(function (config) {
  const token = JSON.parse(localStorage.getItem('token'));
  if (token != null) {
    config.headers.Authorization = token;
  }
  return config;
}, function (error) {
  if (!error.response) {
    return Promise.reject(error.message);
  }
  let message = error?.response?.data?.error || error?.response?.data?.errors.join(', ');
  // Do something with request error
  return Promise.reject(message);
});

ApiUtils.axios.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, function (error) {
  if (!error.response) {
    return Promise.reject(error.message);
  }
  if (401 === error.response.status) {
    sessionStorage.clear();
    localStorage.clear();
    // logout(ApiUtils.dispatch).then(res => {
    //   history.push('/login');
    // });
  }
  let message = error?.response?.data?.error || error?.response?.data?.errors.join(', ');
  return Promise.reject(message);
});

export const baseApi = (url, method, params, data, responseType) => ApiUtils.axios.request({
  url,
  method,
  params,
  data,
  responseType
});
