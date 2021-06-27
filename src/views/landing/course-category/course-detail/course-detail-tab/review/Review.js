import React from 'react';
import Typography from '@material-ui/core/Typography';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import {Rating} from '@material-ui/lab';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import ReviewList from './review-list/ReviewList';

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#1a90ff',
  },
}))(LinearProgress);

const useStyles = makeStyles((theme) => ({
  allProgress: {
    display: 'flex',
    flexDirection: 'row'
  },
  feedback: {
    fontSize: 15,
    fontWeight: 700
  },
  rating: {
    fontSize: 48,
    fontWeight: 700,
  },
  courseRating: {
    fontSize: 18,
    fontWeight: 700
  },
  progressBar: {
    marginBottom: 20
  },
  progressStar: {
    marginBottom: 0,
  },
  negativeMargin: {
    marginTop: '-10px'
  },
  percentageBar: {
    marginBottom: 8
  }
}));
export default function Review({course, unit}) {
  const classes = useStyles();


  return (
    <div>
      <Grid container spacing={2}>
        <Grid item lg={3}>
          <div>
            <Typography className={classes.feedback}>
              Student Feedback
            </Typography>
            <Typography className={classes.rating}>
              {course?.average_review}
            </Typography>
          </div>
          <Rating
            name="simple-controlled"
            value={course?.average_review}
            readOnly
          />
          <Typography className={classes.courseRating}>
            Course Rating
          </Typography>
        </Grid>
        <Grid item lg={5}>
          <div className={classes.progressBar}>
            <BorderLinearProgress variant="determinate" value={parseInt(course?.one_star)}/>
          </div>
          <div className={classes.progressBar}>
            <BorderLinearProgress variant="determinate" value={parseInt(course?.two_star)}/>
          </div>
          <div className={classes.progressBar}>
            <BorderLinearProgress variant="determinate" value={parseInt(course?.three_star)}/>
          </div>
          <div className={classes.progressBar}>
            <BorderLinearProgress variant="determinate" value={parseInt(course?.four_star)}/>
          </div>
          <div className={classes.progressBar}>
            <BorderLinearProgress variant="determinate" value={parseInt(course?.five_star)}/>
          </div>
        </Grid>
        <Grid item lg={2}>
          <div className={classes.negativeMargin}>
            <div className={classes.progressStar}>
              <Rating
                name="simple-controlled"
                value={1}
                readOnly
              />
            </div>
            <div className={classes.progressStar}>
              <Rating
                name="simple-controlled"
                value={2}
                readOnly
              />
            </div>
            <div className={classes.progressStar}>
              <Rating
                name="simple-controlled"
                value={3}
                readOnly
              />
            </div>
            <div className={classes.progressStar}>
              <Rating
                name="simple-controlled"
                value={4}
                readOnly
              />
            </div>
            <div className={classes.progressStar}>
              <Rating
                name="simple-controlled"
                value={5}
                readOnly
              />
            </div>
          </div>
        </Grid>
        <Grid item lg={2}>
          <div className={classes.negativeMargin}>
            <div className={classes.percentageBar}>
              {course?.one_star}%
            </div>
            <div className={classes.percentageBar}>
              {course?.two_star}%
            </div>
            <div className={classes.percentageBar}>
              {course?.three_star}%
            </div>
            <div className={classes.percentageBar}>
              {course?.four_star}%
            </div>
            <div className={classes.percentageBar}>
              {course?.five_star}%
            </div>
          </div>
        </Grid>
      </Grid>
      <ReviewList course={course} unit={unit}/>
    </div>
  );
}
