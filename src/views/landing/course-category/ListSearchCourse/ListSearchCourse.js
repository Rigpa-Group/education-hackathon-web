import React, {useContext, useEffect, useState} from 'react';
import {Card, CardActionArea, CardContent, Container, makeStyles} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import '../../view-all/ViewStyles.scss';
import Rating from '@material-ui/lab/Rating';
import Pagination from '@material-ui/lab/Pagination';
import {Player} from 'video-react';
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';
import {useSnackbar} from 'notistack';
import {Notify, setProps} from '../../../../shared/components/notification/Notification';
import {courseApi} from '../../../../services/CourseServices';
import {useHistory, useLocation} from 'react-router-dom';
import {StateContext} from '../../../../store';

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
    paddingBottom: 30,
    marginTop: 50,
  },
  pagination: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: 10
  }
});

export default function ListSearchCourse() {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const searchQuery = urlParams.get('search');
  const eId = urlParams.get('eid');
  const {user} = useContext(StateContext);
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
  }, [page, eId, searchQuery]);

  const fetchCourses = () => {
    courseApi('get', null, {
      per_page: 12,
      page: (searchQuery === '' || searchQuery === undefined || searchQuery === null) ? page : 1,
      status: 'approved',
      education_id: eId,
      q: searchQuery
    }).then(response => {
      setTotal(response.meta?.last_page);
      setCourses(response.courses);
    }).catch(err => Notify(err, 'error'));
  };

  const handleChangePage = (event, page) => {
    setOpen(false);
    setPage(page);
  };

  const viewDetail = (cid) => {
    if (user?.authenticated) {
      history.push(`/courses/detail/${cid}`);
    } else {
      Notify('You must have to sign to avail this services', 'error');
      history.push(`/login`);
    }
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
              <CardActionArea onClick={() => viewDetail(course?.id)}>
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
        )) : (open && courses.length === 0) ?
          <div className="bg-img" style={{marginLeft: 300}}/> :
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
      {total > 1 &&
      <div className={classes.pagination}>
        <Pagination count={total} page={page} onChange={handleChangePage} color="primary"/>
      </div>}
    </Container>
  );
}
