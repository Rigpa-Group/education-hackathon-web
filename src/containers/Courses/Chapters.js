import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import {makeStyles, Typography} from '@material-ui/core';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import {SharedImageUpload} from '../../shared/ImageUpload/ImageUpload';
import {SingleImageUpload} from '../../shared/ImageUpload/SingleImageUpload';

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
    marginTop: 10
  }
}));
export const CourseChapter = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div>
        <Typography color="primary" className={classes.add}>Chapter or Units</Typography>
        <Grid container>
          <Grid item lg={4} xs={12}>
            <Card className={classes.card}>
              <Grid container spacing={2}>
                <Grid item lg={12} xs={12}>
                  <TextField variant="outlined" placeholder="Chapter 3" label="Unit/Chapter"
                             fullWidth margin={'dense'}/>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item lg={12} xs={12}>
                  <TextareaAutosize color={'primary'} aria-label="minimum height" rowsMin={5}
                                    placeholder="Chapter Description..."
                                    style={{width: '94%', padding: 10, borderColor: '#c4c4c4'}}/>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item lg={12} xs={12}>
                  <SharedImageUpload/>
                </Grid>
                <Grid item lg={12} xs={12} align="right">
                  <Button className={classes.addMore}>Add More</Button>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
        <Grid item lg={2} xs={12}>
          <Button className={classes.button}>Add More</Button>
        </Grid>
      </div>
    </React.Fragment>
  );
};