import {baseApi} from '../utils/ApiUtils';

export const eduLevelsApi = (method, payload = null, params = null) => {
  return baseApi(`/education_levels`, method, params, payload).then(response => {
    return response.data;
  });
};

export const courseCategoryApi = (method, payload = null, params = null) => {
  return baseApi(`/course_categories`, method, params, payload).then(response => {
    return response.data;
  });
};

export const courseCategoryAction = (method, id, payload = null, params = null) => {
  return baseApi(`/course_categories/${id}`, method, params, payload).then(response => {
    return response.data;
  });
};

export const courseApi = (method, payload = null, params = null) => {
  return baseApi(`/courses`, method, params, payload).then(response => {
    return response.data;
  });
};

export const courseAction = (method, id, payload = null, params = null) => {
  return baseApi(`/courses/${id}`, method, params, payload).then(response => {
    return response.data;
  });
};
