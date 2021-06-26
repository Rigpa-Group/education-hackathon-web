import React from 'react';
import {Avatar, Container, makeStyles} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
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
  questionDetail: {
    fontSize: 15,
    paddingLeft: 10
  },
  reply: {
    display: 'flex',
    marginTop: 20
  }
}));

export const Answer = () => {
  const classes = useStyles();

  return (
    <div>
      <Container>
        <Button variant="outlined" color="primary" style={{marginTop: 20, marginBottom: 20}}>Back to Questions</Button>
        <div className={classes.people}>
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
            <div className={classes.reply}>
              <Avatar style={{width: 60, height: 60}}>
                <span className={classes.avaterCharacter}>P</span>
              </Avatar>
              <div style={{marginLeft: 20}}>
                <Typography style={{color: 'gray'}}>
                  Dawa Tshering
                </Typography>
                <Typography style={{color: 'gray', fontSize: 13}}>
                  a year ago
                </Typography>
                <Typography style={{color: '#797777', fontSize: 14, marginTop: 10, marginBottom: 20}}>
                  I think it's better to use an array with the routes instead of using for loop multiple times.
                  I think it's better to use an array with the routes instead of using for loop multiple times.
                </Typography>
              </div>
            </div>
          </div>
        </div>
        <TextField label="Reply" placeholder="Reply" variant="outlined" fullWidth multiline={true} rows={3}/>
      </Container>
    </div>
  );
};