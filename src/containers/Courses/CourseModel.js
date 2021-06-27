export const addCourses = (arrayFilters, index) => {
  arrayFilters.push({
    name: '', description: '', _destroy: 0,
    videos_attributes: [{
      clip: null
    }],
    attachments_attributes: [{
      file: null
    }]
  });
};

export const removeCourses = (arrayFilters, index) => {
  arrayFilters.remove(index);
};

export const initialCourse = {
  name: '', description: '', education_level_id: '', course_category_id: '',
  course_units_attributes: [
    {
      name: '',
      description: '',
      photo_attributes: {image: null},
      videos_attributes: [{clip: null}],
      attachments_attributes: [{file: null}]
    }
  ]
};
