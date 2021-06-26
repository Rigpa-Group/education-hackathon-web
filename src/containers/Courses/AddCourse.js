import React, {useEffect, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import {TextField} from 'formik-material-ui';
import {Field, Form, Formik} from 'formik';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Card from '@material-ui/core/Card';
import {makeStyles, Typography} from '@material-ui/core';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import {CourseChapter} from './Chapters';
import {serialize as o2f} from 'object-to-formdata';
import {courseAction, courseApi, courseCategoryApi, eduLevelsApi} from '../../services/CourseServices';
import {initialCourse} from './CourseModel';
import Button from '@material-ui/core/Button';
import {Notify, setProps} from '../../shared/components/notification/Notification';
import {useSnackbar} from 'notistack';
import {useHistory, useLocation, useParams} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  card: {
    padding: 20
  },
  add: {
    marginBottom: 20,
    fontWeight: 550,
    fontSize: 18
  },
  button: {
    backgroundColor: theme.primary,
    color: 'white',
    textTransform: 'capitalize',
    width: '100%',
    marginTop: 10
  }
}));

export const AddCourse = () => {
  const classes = useStyles();
  const snackbar = useSnackbar();
  const history = useHistory();
  const location = useLocation();
  const search = new URLSearchParams(location.search);
  const edit = search.get('edit');
  const params = useParams();
  const [categories, setCategories] = useState([]);
  const [eduLevels, setEduLevels] = useState([]);
  const [course, setCourse] = useState();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setProps(snackbar);
    fetchCourse();
    eduLevelsApi('get').then(response => setEduLevels(response.education_levels));
    courseCategoryApi('get').then(response => setCategories(response.course_categories));
  }, []);

  const fetchCourse = () => {
    courseAction('get', params?.id).then(response => {
      let courseDetail = response.course;
      setCourse({
        id: courseDetail.id,
        name: courseDetail.name,
        description: courseDetail.description,
        education_level_id: courseDetail.education_level_id,
        course_category_id: courseDetail.course_category_id,
      });
      setOpen(true);
    }).catch(err => {
      setOpen(true);
      Notify(err, 'error');
    });
  };

  const courseUpdate= (values, {setSubmitting}) => {
    const formData = o2f({...values}, {indices: false, nullsAsUndefineds: true}, null, `course`);
    courseApi('put',params?.id, formData).then(response => {
      history.push('/course/list');
      Notify('File updated successfully', 'success');
      setSubmitting(false);
    }).catch(err => {
      Notify(err, 'error');
      setSubmitting(false);
    });
  };

  const courseUpload = (values, {setSubmitting}) => {
    const formData = o2f({...values}, {indices: false, nullsAsUndefineds: true}, null, `course`);
    courseApi('post', formData).then(response => {
      history.push('/course/list');
      Notify('File uploaded successfully', 'success');
      setSubmitting(false);
    }).catch(err => {
      Notify(err, 'error');
      setSubmitting(false);
    });
  };

  return (
    <React.Fragment>
      {open &&
      <div>
        <Formik initialValues={edit? course : initialCourse} onSubmit={edit? courseUpdate : courseUpload}>
          {({
              isSubmitting,
              handleChange,
              handleBlur,
              values,
              errors,
              ...formik
            }) => (
            <Form>
              <Card className={classes.card}>
                <Typography color="primary" className={classes.add}>Add Course</Typography>
                <Grid container spacing={2}>
                  <Grid item lg={4} xs={12}>
                    <Field component={TextField} variant="outlined" placeholder="Hacking course for beginners"
                           label="Name of Course"
                           fullWidth margin={'dense'} name="name"/>
                  </Grid>
                  <Grid item lg={4} xs={12}>
                    <Autocomplete
                      id="combo-box-demo"
                      options={categories}
                      getOptionLabel={(option) => option?.name}
                      onChange={(e, value) =>
                        formik.setFieldValue('course_category_id', value?.id)}
                      style={{width: '100%'}}
                      renderInput={(params) => <Field component={TextField} margin={'dense'} {...params}
                                                      label="Select Category"
                                                      variant="outlined" name="course_category_id"/>}
                    />
                  </Grid>
                  <Grid item lg={4} xs={12}>
                    <Autocomplete
                      id="combo-box-demo"
                      options={eduLevels}
                      getOptionLabel={(option) => option?.name}
                      onChange={(e, value) =>
                        formik.setFieldValue('education_level_id', value?.id)}
                      style={{width: '100%'}}
                      renderInput={(params) => <Field component={TextField} {...params} margin={'dense'}
                                                      label="Education Level" variant="outlined"
                                                      name="education_level_id"/>}
                    />
                  </Grid>
                  <Grid item lg={4} xs={12}>
                    <TextareaAutosize color={'primary'} aria-label="minimum height" rowsMin={5}
                                      placeholder="Course Description..." name="description"
                                      onChange={handleChange}
                                      style={{width: '94%', padding: 10, borderColor: '#c4c4c4'}}/>
                  </Grid>
                </Grid>
                <Grid item lg={12} md={12} xs={12}>
                  <CourseChapter/>
                </Grid>
                <Grid item lg={4} md={4} xs={12} className="pull-right">
                  <Button className="pull-right" variant="contained" style={{width: 100}}
                          type="submit" color="primary">Save</Button>
                </Grid>
              </Card>
            </Form>
          )}
        </Formik>
      </div>
      }
    </React.Fragment>
  );
};
