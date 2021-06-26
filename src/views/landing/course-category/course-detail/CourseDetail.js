import React from 'react';
import {Card, Container, makeStyles} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import './CourseDetail.scss';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import CourseDetailTab from './course-detail-tab/CourseDetailTab';
import CourseVideoAccordian from './course-detail-tab/course-video-list/CourseVideoList';
import {Player} from 'video-react';

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

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item lg={8}>
          <div style={{marginBottom: 20}}>
            <Player className={classes.media} poster='/assets/images/categoryImg.png'
                    src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" playsInline/>
          </div>
          <Typography className='video-title'>
            Annual Merek Sakten Festival
          </Typography>
          <Typography className='tutor-name'>
            Sangay Dorji
          </Typography>
          <div>
            <Divider style={{marginTop: '2%', marginBottom: '2%'}}/>
          </div>
          <div>
            <CourseDetailTab/>
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
