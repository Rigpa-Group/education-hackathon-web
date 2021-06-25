import React from 'react';
import Grid from '@material-ui/core/Grid';
import {Avatar, Container} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import './SecondStripe.scss';
import Typography from '@material-ui/core/Typography';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));
export default function SecondStripe() {
  const classes = useStyles();
  return (
    <div className="stripe-areatwo">
      <Container>
        <Grid container spacing={2}>
          <Grid item lg={4}>
            <div className="item-flex">
              <CastForEducationIcon className={classes.large}/>
              <div className='item-inline'>
                <Typography className='title'>
                  Check courses
                </Typography>
                <Typography className='description'>
                  Explore to learn new things
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid item lg={4}>
            <div className="item-flex">
              <VerifiedUserIcon className={classes.large}/>
              <div className='item-inline'>
                <Typography className='title'>
                  Ask any Questions
                </Typography>
                <Typography className='description'>
                  Learning begins today
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid item lg={4}>
            <div className="item-flex">
              <PlayCircleFilledWhiteIcon className={classes.large}/>
              <div className='item-inline'>
                <Typography className='title'>
                  Dont have an account?
                </Typography>
                <Typography className='description'>
                  Sign up with EduTch to explore more
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
