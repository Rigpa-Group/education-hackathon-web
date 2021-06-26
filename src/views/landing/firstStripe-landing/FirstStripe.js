import React from 'react';
import Grid from '@material-ui/core/Grid';
import {Avatar, Container} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import './FirstStripe.scss';
import Typography from '@material-ui/core/Typography';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));
export default function FirstStripe() {
  const classes = useStyles();
  return (
    <div className="stripe-area">
      <Container>
        <Grid container spacing={2}>
          <Grid item lg={4}>
            <div className="item-flex">
              <Avatar className={classes.large}>
                h
              </Avatar>
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
              <LiveHelpIcon className={classes.large}/>
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
              <PermIdentityIcon className={classes.large}/>
              <div className='item-inline'>
                <Link to={`/sign-up?tutor=${true}`} style={{color: 'white', textDecoration: 'none'}}>
                <Typography className='instructor-login'>
                  Be instructor on EduTech?
                </Typography>
                <Typography className='description-instructor'>
                    Sign up with EduTch
                </Typography>
                </Link>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
