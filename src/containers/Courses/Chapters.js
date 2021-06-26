import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import {TextField} from 'formik-material-ui';
import {Accordion, AccordionDetails, makeStyles, Typography} from '@material-ui/core';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import {SharedImageUpload} from '../../shared/ImageUpload/ImageUpload';
import {Field, FieldArray, useFormikContext} from 'formik';
import {addCourses} from './CourseModel';
import {SingleImageUpload} from '../../shared/ImageUpload/SingleImageUpload';

const useStyles = makeStyles(theme => ({
  card: {
    padding: 20,
    backgroundColor: '#f6f1f1'
  },
  add: {
    marginBottom: 10,
    marginTop: 20,
    fontWeight: 550,
    fontSize: 18
  },
  addMore: {
    backgroundColor: theme.primary,
    color: 'white',
    textTransform: 'capitalize',
    width: '40%',
    marginTop: 10
  },
  button: {
    backgroundColor: theme.primary,
    color: 'white',
    textTransform: 'capitalize',
    width: '100%',
    marginTop: 10,
  }
}));
export const CourseChapter = () => {
  const classes = useStyles();
  const {values, handleChange} = useFormikContext();

  return (
    <React.Fragment>
      <div>
        <Typography color="primary" className={classes.add}>Chapter or Units</Typography>
        <FieldArray name="course_units_attributes" render={(arrayHelpers) => (
          <React.Fragment>
            <Grid container spacing={2}>
              {values?.course_units_attributes?.map((course, index) => (
                <Grid lg={4} md={4} xs={12}>
                  <Accordion square expanded={true} key={index}>
                    <AccordionDetails>
                      <Grid container spacing={2}>
                        <Grid item lg={12} xs={12}>
                          <Field component={TextField} variant="outlined" placeholder="Chapter 3"
                                 label="Unit/Chapter" name={`course_units_attributes[${index}].name`}
                                 fullWidth margin={'dense'}/>
                        </Grid>
                        <Grid item lg={12} xs={12}>
                          <TextareaAutosize color={'primary'} aria-label="minimum height" rowsMin={5}
                                            placeholder="Chapter Description..."
                                            onChange={handleChange}
                                            name={`course_units_attributes[${index}].description`}
                                            style={{width: '94%', padding: 10, borderColor: '#c4c4c4'}}/>
                        </Grid>
                        <Grid item lg={12} xs={12}>
                          <SingleImageUpload courseIndex={index}/>
                        </Grid>
                        <Grid item lg={12} xs={12}>
                          <SharedImageUpload courseIndex={index}/>
                        </Grid>
                        {/*<Grid item lg={12} xs={12} align="right">
                          <Button className={classes.addMore}>Add More</Button>
                        </Grid>*/}
                      </Grid>
                    </AccordionDetails>
                  </Accordion>
                  {(values?.course_units_attributes?.length - 1) === index &&
                  <Grid item lg={12} md={12} xs={12}>
                    <Button className={classes.button} onClick={() => addCourses(arrayHelpers)}>Add More</Button>
                  </Grid>}
                </Grid>))}
            </Grid>
          </React.Fragment>
        )}/>
      </div>
    </React.Fragment>
  );
};
