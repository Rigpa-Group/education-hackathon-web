import React, {useEffect, useState} from 'react';
import {Card, Container, makeStyles} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import './CourseDetail.scss';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import CourseDetailTab from './course-detail-tab/CourseDetailTab';
import CourseVideoAccordian from './course-detail-tab/course-video-list/CourseVideoList';
import {Player} from 'video-react';
import {useParams} from 'react-router-dom';
import {courseAction} from '../../../../services/CourseServices';
import {useSnackbar} from 'notistack';
import {Notify, setProps} from '../../../../shared/components/notification/Notification';

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

export default function CourseDetail({index}) {
  const classes = useStyles();
  const snackbar = useSnackbar();
  const params = useParams();
  const [course, setCourse] = useState({});
  const [image, setImage] = useState({});
  const [video, setVideo] = useState({});

  useEffect(() => {
    setProps(snackbar);
    fetchCourse();
  }, []);

  const fetchCourse = () => {
    courseAction('get', params?.id).then(response => {
      setCourse(response.course);
      setImage(response.course?.course_units_attributes?.[0]?.photo?.large);
      setVideo(response.course?.course_units_attributes?.[0]?.videos_attributes?.[0]?.clip_url);
    }).catch(err => Notify(err, 'error'));
  };

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item lg={8}>
          <div style={{marginBottom: 20, marginTop: 20}}>
            <Player className={classes.media} poster={image || `/assets/images/categoryImg.png`}
                    src={video ?? `https://media.w3.org/2010/05/sintel/trailer_hd.mp4`} playsInline/>
          </div>
          <Typography className='video-title text-capitalize'>
            {course?.name}
          </Typography>
          <Typography className='tutor-name text-capitalize'>
            {course?.user?.profile_attributes?.first_name} {course?.user?.profile_attributes?.last_name}
          </Typography>
          <div>
            <Divider style={{marginTop: '2%', marginBottom: '2%'}}/>
          </div>
          <div>
            <CourseDetailTab course={course}/>
          </div>
        </Grid>
        <Grid item lg={4}>
          <Card className='cardContainer'>
            <Typography className='course-list'>
              Course list
            </Typography>
            <Divider/>
            <div>
              <CourseVideoAccordian/>
            </div>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
