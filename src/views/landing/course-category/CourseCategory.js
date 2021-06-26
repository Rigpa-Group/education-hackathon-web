import React, {useEffect, useState} from 'react';
import {Card, CardActionArea, CardContent, CardMedia, Container, makeStyles} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import './CourseCategory.scss';
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';
import {Notify, setProps} from '../../../shared/components/notification/Notification';
import {courseCategoryApi} from '../../../services/CourseServices';
import {useSnackbar} from 'notistack';

const useStyles = makeStyles({
  root: {
    maxWidth: 278,
    cardBorder: 'none',
    boxShadow: 'none'
  },
  media: {
    width: 278,
    height: 173
  },
});
const courseLoop = ['1', '2', '3', '4', '5'];

export default function CourseCategory({index}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(2);
  const [courses, setCourses]= useState();
  const snackbar = useSnackbar();

  useEffect(() => {
    setProps(snackbar);
    fetchCourses();
  }, []);

  const fetchCourses = () => {
    courseCategoryApi('get',null, {category: index}).then(response => {
      setCourses(response.courses);
    }).catch(err => Notify(err, 'error'));
  };

  return (
    <Container>
      <Grid container spacing={2}>
        {courseLoop.map(val => (
          <Grid item lg={3}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={require('../../../assets/images/categoryImg.png').default}
                  title="Contemplative Reptile"/>
                <CardContent>
                  <Typography gutterBottom className='title' component="h2">
                    Annual Merek Sakten Festival
                  </Typography>
                  <Typography variant="body2" className='name' component="p">
                    Sangay Dorji
                  </Typography>
                  <Box component="fieldset" borderColor="transparent">
                    <Rating
                      name="simple-controlled"
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                    />
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
