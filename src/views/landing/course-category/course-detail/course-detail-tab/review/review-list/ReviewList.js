import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {Avatar, Container} from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '5vh',
  },
  titleReview: {
    fontSize: 20,
    fontWeight: 700
  },
  reviewRow: {
    display: 'flex',
    paddingTop: 20,
    paddingBottom: 10
  },
  avatarReview: {
    fontSize: 30
  },
  reviewName: {
    fontSize: 18,
    fontWeight: 700,
    paddingLeft: 10
  },
  reviewDescription: {
    fontSize: 15,
    paddingLeft: 10
  },
  moveRight: {
    display: 'flex',
    justifyContent: 'flex-end'
  }
}));

const reviewLoop = ['1', '2', '3', '4'];

export default function ReviewList() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.titleReview}>
        Review
      </Typography>
      {reviewLoop.map(val => (
        <Container className={classes.reviewRow}>
          <Avatar style={{width: 60, height: 60}}>
            <span className={classes.avatarReview}>P</span>
          </Avatar>
          <div className={classes.inlineFlex}>
            <Typography className={classes.reviewName}>
              Pema Dema
            </Typography>
            <Typography className={classes.reviewDescription}>
              I think it's better to use an array with the routes instead of using for loop multiple times.
            </Typography>
          </div>
        </Container>
      ))}
      <Divider/>
      <div className={classes.moveRight}>
        <Button>
          View more
        </Button>
      </div>
    </div>
  );
}
