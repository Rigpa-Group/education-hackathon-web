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

/*Questions api*/
export const courseQuestionsApi = (method, id, uid, payload = null, params = null) => {
  return baseApi(`/courses/${id}/course_units/${uid}/questions`, method, params, payload).then(response => {
    return response.data;
  });
};

/*Answers api*/
export const courseAnswersApi = (method, id, uid, qid, payload = null, params = null) => {
  return baseApi(`/courses/${id}/course_units/${uid}/questions/${qid}/answers`, method, params, payload).then(response => {
    return response.data;
  });
};

/*Reviews api*/
export const reviewCoursesApi = (method, id, payload = null, params = null) => {
  return baseApi(`/courses/${id}/reviews`, method, params, payload).then(response => {
    return response.data;
  });
};
