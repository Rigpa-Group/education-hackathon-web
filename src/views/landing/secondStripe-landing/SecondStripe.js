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
              <PlayCircleFilledWhiteIcon className={classes.large}/>
              <div className='item-inline'>
                <Typography className='title'>
                  Over 555,000 video courses and files on career and personal skills
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid item lg={4}>
            <div className="item-flex">
              <VerifiedUserIcon className={classes.large}/>
              <div className='item-inline'>
                <Typography className='title'>
                  Choose from top industry instructors / tutors across the Bhutan
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid item lg={4}>
            <div className="item-flex">
              <CastForEducationIcon className={classes.large}/>
              <div className='item-inline'>
                <Typography className='title'>
                  Learn with lifetime access on mobile and laptop
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
