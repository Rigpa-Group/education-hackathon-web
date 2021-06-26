import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import {Avatar, Container} from '@material-ui/core';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  titleQuestion: {
    fontSize: 15,
    fontWeight: 700,
    paddingTop: '5%',
    paddingBottom: '2%'
  },
  people: {
    display: 'flex',
    paddingTop: 10,
    paddingBottom: 10,

  },
  lernerName: {
    fontSize: 18,
    fontWeight: 700,
    paddingLeft: 10
  },
  questionTitle: {
    fontSize: 15,
    fontWeight: 600,
    paddingLeft: 10
  },
  inlineFlex: {
    display: 'inline',
    paddingLeft: 10
  },
  questionDetail: {
    fontSize: 15,
    paddingLeft: 10
  },
  avaterCharacter: {
    fontSize: 30
  },
  viewMore: {
    display: 'flex',
    justifyContent: 'flex-end'
  }
}));

const questionLoop = ['1', '2', '3', '4'];

export default function QuestionAndAnswer() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div>
        <Button variant={'contained'} color={'primary'}>
          Ask a question
        </Button>
      </div>
      <div>
        <Typography className={classes.titleQuestion}>
          Questions in this course (4)
        </Typography>
      </div>
      <Divider/>
      {questionLoop.map(val => (
        <Container className={classes.people}>
          <Avatar style={{width: 60, height: 60}}>
            <span className={classes.avaterCharacter}>P</span>
          </Avatar>
          <div className={classes.inlineFlex}>
            <Typography className={classes.lernerName}>
              Pema Dema
            </Typography>
            <Typography className={classes.questionTitle}>
              My point of view in a better way, instead of use it
            </Typography>
            <Typography className={classes.questionDetail}>
              I think it's better to use an array with the routes instead of using for loop multiple times.
            </Typography>
          </div>
        </Container>
      ))}
      <Divider/>
      <div className={classes.viewMore}>
        <Button>
          View more
        </Button>
      </div>
    </React.Fragment>
  );
}
