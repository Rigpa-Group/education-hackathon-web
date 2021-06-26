import React, {useEffect, useState} from 'react';
import {Card, CardActionArea, CardContent, Container, makeStyles} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import './CourseCategory.scss';
import Box from '@material-ui/core/Box';
import {Player} from 'video-react';
import Rating from '@material-ui/lab/Rating';
import {Notify, setProps} from '../../../shared/components/notification/Notification';
import {courseApi} from '../../../services/CourseServices';
import {useSnackbar} from 'notistack';
import {useHistory} from 'react-router-dom';
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';

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
const courseLoop = ['1', '2', '3', '4'];

export default function CourseCategory({id}) {
  const classes = useStyles();
  const history = useHistory();
  const [value, setValue] = React.useState(2);
  const [courses, setCourses] = useState([]);
  const [open, setOpen] = useState(false);
  const snackbar = useSnackbar();

  useEffect(() => {
    setProps(snackbar);
    fetchCourses();
    setInterval(() => {
      setOpen(true);
    }, 200);
  }, []);

  const fetchCourses = () => {
    courseApi('get', null, {per_page: 4, category_id:id, status: 'approved'}).then(response => {
      setCourses(response.courses);
    }).catch(err => Notify(err, 'error'));
  };

  return (
    <Container>
      <Grid container spacing={2}>
        {open && courses.length > 0 ? courses.map((course) => (
          <Grid item lg={3} key={course?.id}>
            <Card className={classes.root} onClick={() => history.push(`/courses/detail/${course?.id}`)}>
              <CardActionArea>
                <Player className={classes.media} poster={course?.course_photo?.medium ?? `/assets/categoryImg.png`}
                        src="/assets/video.mp4" playsInline/>
                <CardContent>
                  <Typography gutterBottom className='title text-capitalize' component="h2">
                    {course?.name}
                  </Typography>
                  <Box component="fieldset" borderColor="transparent">
                    <Rating
                      name="simple-controlled"
                      value={course?.average_review === 0 ? 2 : course?.average_review}
                      readOnly={true}
                    />
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        )) : <Grid container spacing={3}>
          {[1, 2, 3, 4].map(val => (
            <Grid item lg={3} xs={6} className="mt-4" key={val}>
              <SkeletonTheme color="#e8eaed" highlightColor="#c8cccc">
                <Skeleton delay={1} duration={2} height={150} style={{borderRadius: 3}}/>
                <Typography>
                  <Skeleton delay={1} duration={2} height={15} width={'90%'}/>
                  <Skeleton delay={1} duration={2} height={15} width={'100%'}/>
                  <Skeleton delay={1} duration={2} height={15} width={150}/>
                </Typography>
              </SkeletonTheme>
            </Grid>))}
        </Grid>}
      </Grid>
    </Container>
  );
}
