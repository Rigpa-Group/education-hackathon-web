import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {Avatar, Container} from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import {reviewCoursesApi} from '../../../../../../../services/CourseServices';
import {Notify} from '../../../../../../../shared/components/notification/Notification';
import {avatarTruncate} from '../../../../../../../shared/functions/TextTruncate';

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
    textTransform: 'capitalize',
    fontSize: 30
  },
  reviewName: {
    textTransform: 'capitalize',
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


export default function ReviewList({course, unit}) {
  const classes = useStyles();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    reviewCoursesApi('get', course?.id).then(response => {
      setReviews(response?.reviews);
    }).catch(err => Notify(err, 'error'));
  }, []);

  return (
    <div className={classes.root}>
      <Typography className={classes.titleReview}>
        Review
      </Typography>
      {reviews?.length > 0 && reviews?.map(review => (
        <Container className={classes.reviewRow}>
          <Avatar style={{width: 60, height: 60}}>
            <span className={classes.avatarReview}>
              {avatarTruncate(review?.user?.profile_attributes?.first_name, 1)}
            </span>
          </Avatar>
          <div className={classes.inlineFlex}>
            <Typography className={classes.reviewName}>
              {review?.user?.profile_attributes?.first_name} {review?.user?.profile_attributes?.last_name}
            </Typography>
            <Typography className={classes.reviewDescription}>
              {review?.comment}
            </Typography>
          </div>
        </Container>
      ))}
      <Divider/>
      {reviews.length > 6 &&
      <div className={classes.moveRight}>
        <Button>
          View more
        </Button>
      </div>}
    </div>
  );
}
