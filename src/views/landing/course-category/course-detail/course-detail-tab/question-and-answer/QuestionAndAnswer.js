import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import {Avatar, Container, Grid} from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import {Answer} from './Answer';

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
  },
}));

const questionLoop = ['1', '2', '3', '4'];

export default function QuestionAndAnswer() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div>
        <Button variant={'contained'} color={'primary'} style={{marginBottom: 20}}>
          Ask a question
        </Button>
        <Grid container>
          <Grid item lg={8} xs={12}>
            <TextField variant="outlined" label="Title" size="small" fullWidth/>
          </Grid>
          <Grid item lg={8} xs={12}>
            <TextareaAutosize color={'primary'} aria-label="minimum height" rowsMin={5}
                              placeholder="Description..." name="description"
              //onChange={handleChange}
                              style={{width: '96%', padding: 10, marginTop: 15, borderColor: '#c4c4c4'}}/>
          </Grid>
        </Grid>
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
            <Answer/>
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
