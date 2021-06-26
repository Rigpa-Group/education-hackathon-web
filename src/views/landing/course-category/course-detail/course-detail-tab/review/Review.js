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
export default function Review() {
  const classes = useStyles();
  const [value, setValue] = React.useState(2);

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item lg={3}>
          <div>
            <Typography className={classes.feedback}>
              Student Feedback
            </Typography>
            <Typography className={classes.rating}>
              3.7
            </Typography>
          </div>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
          <Typography className={classes.courseRating}>
            Course Rating
          </Typography>
        </Grid>
        <Grid item lg={5}>
          <div className={classes.progressBar}>
            <BorderLinearProgress variant="determinate" value={75}/>
          </div>
          <div className={classes.progressBar}>
            <BorderLinearProgress variant="determinate" value={90}/>
          </div>
          <div className={classes.progressBar}>
            <BorderLinearProgress variant="determinate" value={30}/>
          </div>
          <div className={classes.progressBar}>
            <BorderLinearProgress variant="determinate" value={50}/>
          </div>
          <div className={classes.progressBar}>
            <BorderLinearProgress variant="determinate" value={3}/>
          </div>
        </Grid>
        <Grid item lg={2}>
          <div className={classes.negativeMargin}>
            <div className={classes.progressStar}>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </div>
            <div className={classes.progressStar}>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </div>
            <div className={classes.progressStar}>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </div>
            <div className={classes.progressStar}>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </div>
            <div className={classes.progressStar}>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </div>
          </div>
        </Grid>
        <Grid item lg={2}>
          <div className={classes.negativeMargin}>
            <div className={classes.percentageBar}>
              75%
            </div>
            <div className={classes.percentageBar}>
              90%
            </div>
            <div className={classes.percentageBar}>
              30%
            </div>
            <div className={classes.percentageBar}>
              50%
            </div>
            <div className={classes.percentageBar}>
              3%
            </div>
          </div>
        </Grid>
      </Grid>
      <ReviewList/>
    </div>
  );
}
