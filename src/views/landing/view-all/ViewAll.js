import React, {useEffect, useState} from 'react';
import {Card, CardActionArea, CardContent, Container, makeStyles} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './ViewStyles.scss';
import Rating from '@material-ui/lab/Rating';
import Pagination from '@material-ui/lab/Pagination';
import {Player} from 'video-react';
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';
import {useSnackbar} from 'notistack';
import {Notify, setProps} from '../../../shared/components/notification/Notification';
import {courseApi} from '../../../services/CourseServices';
import {useHistory} from 'react-router-dom';

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
  title: {
    fontSize: 24,
    fontWeight: 700,
    paddingBottom: 10
  },
  pagination: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: 10
  }
});

export default function ViewAll() {
  const classes = useStyles();
  const history = useHistory();
  const snackbar = useSnackbar();
  const [courses, setCourses] = useState([]);
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(1);


  useEffect(() => {
    setProps(snackbar);
    fetchCourses();
    setInterval(() => {
      setOpen(true);
    }, 2000);
  }, [page]);

  const fetchCourses = () => {
    courseApi('get', null, {per_page: 12, page: page}).then(response => {
      setTotal(response.meta?.last_page);
      setCourses(response.courses);
    }).catch(err => Notify(err, 'error'));
  };

  const handleChangePage = (event, page) => {
    setOpen(false);
    setPage(page);
  };


  return (
    <Container>
      <Container>
        <Typography className={classes.title}>
          Courses
        </Typography>
      </Container>
      <Grid container spacing={2}>
        {(open && courses.length > 0) ? courses.map(course => (
            <Grid item lg={3}>
              <Card className={classes.root}>
                <CardActionArea onClick={() => history.push(`/courses/detail/${course?.id}`)}>
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
          )) :
          <Grid container spacing={3}>
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
      <div className={classes.pagination}>
        <Pagination count={total} page={page} onChange={handleChangePage} color="primary"/>
      </div>
    </Container>
  );
}
