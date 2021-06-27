import React, {useContext, useEffect, useState} from 'react';
import {Card, Container, Grid, makeStyles} from '@material-ui/core';
import {Player} from 'video-react';
import Typography from '@material-ui/core/Typography';
import './Ongoing.scss';
import {StateContext} from '../../../store';
import {usersAction} from '../../../services/UserServices';
import {useHistory} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  card: {
    width: '100%',
    marginBottom: 50,
  },
  media: {
    width: 278,
    height: 173
  },
  title: {
    fontWeight: 550,
    marginTop: 15,
    textTransform: 'capitalize',
  },
  courseText: {
    fontWeight: 700,
    fontSize: 21,
    marginBottom: 20
  }
}));
export const OngoingCourses = () => {
  const classes = useStyles();
  const history = useHistory();
  const {user} = useContext(StateContext);
  const [ongoingCourses, setOngoingCourses] = useState([]);

  useEffect(() => {
    if (user?.authenticated) {
      fetchOngoing();
    }
  }, []);

  const fetchOngoing = () => {
    usersAction('get', user?.id).then(response => {
      setOngoingCourses(response.user);
    });
  };

  return (
    <React.Fragment>
      {ongoingCourses?.participants?.length > 0 &&
      <Container>
        <Typography className={classes.courseText}><u>Courses</u></Typography>
        <Grid container spacing={2}>
          {ongoingCourses?.participants?.map((course, index) => (
            <Grid item lg={4} xs={12} key={course?.id}>
              {index < 4 &&
              <Card className={classes.card}
                    onClick={() => history.push(`/courses/detail/${course?.course_ids?.[0]?.id}`)}>
                <Grid container spacing={2}>
                  <Grid item lg={5}>
                    <Player className={classes.media}
                            poster={course?.course_ids?.[0]?.course_photo?.medium ?? '/assets/allImage.jpeg'}
                            src={'/assets/video.mp4'} playsInline/>
                  </Grid>
                  <Grid item lg={7}>
                    <Typography gutterBottom className={classes.title} component="h2">
                      {course?.course_ids?.[0]?.name}
                    </Typography>
                  </Grid>
                </Grid>
              </Card>}
            </Grid>
          ))}
        </Grid>
      </Container>}
    </React.Fragment>
  );
};
