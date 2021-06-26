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
import {courseAction, reviewCoursesApi} from '../../../../services/CourseServices';
import {useSnackbar} from 'notistack';
import {Notify, setProps} from '../../../../shared/components/notification/Notification';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';
import Rating from '@material-ui/lab/Rating';
import TextField from '@material-ui/core/TextField';

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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function CourseDetail({index}) {
  const classes = useStyles();
  const snackbar = useSnackbar();
  const params = useParams();
  const [course, setCourse] = useState({});
  const [comment, setComment] = useState('');
  const [video, setVideo] = useState({});
  const [unit, setUnit] = useState({});
  const [fetch, setFetch] = useState(true);
  const [open, setOpen] = React.useState(true);
  const [value, setValue] = React.useState(2);

  useEffect(() => {
    setProps(snackbar);
    fetchCourse();
  }, [fetch]);

  const handleContent = (videoData, unitData) => {
    setVideo(videoData);
    setUnit(unitData);
  };

  const fetchCourse = () => {
    courseAction('get', params?.id).then(response => {
      setCourse(response.course);
      setVideo(response.course?.course_units_attributes?.[0]?.videos_attributes?.[0]);
      setUnit(response.course?.course_units_attributes?.[0]);
    }).catch(err => Notify(err, 'error'));
  };

  const handleAction = (result) => {
    setFetch(!fetch);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onHandleReview = () => {
    const reviewData = {comment: comment, star: value};
    reviewCoursesApi('post', course?.id, {review: {...reviewData}}).then(response => {
      Notify('Thank you for your review', 'success');
      fetchCourse();
    }).catch(err => Notify(err, 'error'));
  };

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item lg={8}>
          <div style={{marginBottom: 20, marginTop: 20}}>
            <Player className={classes.media} poster={unit?.photo?.large || `/assets/images/categoryImg.png`}
                    src={video?.clip_url ?? `https://media.w3.org/2010/05/sintel/trailer_hd.mp4`}
                    playsInline/>
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
            <CourseDetailTab course={course} unit={unit} handleAction={handleAction}/>
          </div>
        </Grid>
        <Grid item lg={4}>
          <Card className='cardContainer'>
            <Typography className='course-list'>
              Course list
            </Typography>
            <Divider/>
            <div>
              <CourseVideoAccordian course={course} handleContent={handleContent}/>
            </div>
          </Card>
        </Grid>
      </Grid>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent style={{width: 400}} align="center">
          <Typography style={{color: '#03A2A5', fontSize: 21, marginBottom: 10}}>Rate this course</Typography>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
          <Typography style={{color: '#03A2A5', fontSize: 21, marginBottom: 10, marginTop: 20}}>Review this
            course</Typography>
          <TextField variant="outlined" label="Review" placeholder="Write your review" multiline={true} rows={3}
                     fullWidth onChange={(e) => setComment(e?.target?.value)}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={onHandleReview} color="primary">
            Done
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
