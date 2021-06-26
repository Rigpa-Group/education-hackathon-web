import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Card from '@material-ui/core/Card';
import {makeStyles, Typography} from '@material-ui/core';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import {CourseChapter} from './Chapters';

const category = [
  {title: 'Mathematics'},
  {title: 'Science'},
  {title: 'Language'},
  {title: 'Physics'},
];

const level = [
  {title: 'Tertiary'},
  {title: 'Higher'},
  {title: 'Middle'},
  {title: 'Lower'},
];

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

  return (
    <React.Fragment>
      <div>
        <Card className={classes.card}>
          <Typography color="primary" className={classes.add}>Add Course</Typography>
          <Grid container spacing={2}>
            <Grid item lg={4} xs={12}>
              <Autocomplete
                id="combo-box-demo"
                options={category}
                getOptionLabel={(option) => option.title}
                style={{width: '100%'}}
                renderInput={(params) => <TextField margin={'dense'} {...params} label="Select Category" variant="outlined"/>}
              />
            </Grid>
            <Grid item lg={4} xs={12}>
              <Autocomplete
                id="combo-box-demo"
                options={level}
                getOptionLabel={(option) => option.title}
                style={{width: '100%'}}
                renderInput={(params) => <TextField {...params} margin={'dense'} label="Education Level" variant="outlined"/>}
              />
            </Grid>
            <Grid item lg={4} xs={12}>
              <TextField variant="outlined" placeholder="Hacking course for beginners" label="Name of Course"
                         fullWidth margin={'dense'}/>
            </Grid>
            <Grid item lg={4} xs={12}>
              <TextareaAutosize color={'primary'} aria-label="minimum height" rowsMin={5}
                                placeholder="Course Description..."
                                style={{width: '94%', padding: 10, borderColor: '#c4c4c4'}}/>
            </Grid>
          </Grid>
          <div>
            <CourseChapter/>
          </div>
        </Card>
      </div>
    </React.Fragment>
  );
};