import React, {useContext, useState} from 'react';
import {Grid, makeStyles, Paper, Typography} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import {UserEventCreated} from './UserEventCreated';
import {StateContext} from '../../../../store';
import {fetchIncludedObject} from '../../../../shared/functions/IncludedBinding';
import Moment from 'react-moment';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import {useHistory} from 'react-router-dom';
import EditProfile from './EditProfile';
import RenderAuthorized from '../../../../routes/RenderAuthorized';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: 20
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 50
  },
  name: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 20,
    fontWeight: 600,
    textTransform: 'capitalize'
  },
  detail: {
    fontSize: 14,
    marginBottom: 3
  },
  button: {
    textTransform: 'capitalize',
    color: 'white',
    backgroundColor: '#3C1877',
    marginTop: 25,
    height: 30
  },
  registration: {
    marginTop: 40,
    fontWeight: 400,
    fontSize: 18,
    marginBottom: 10
  },
  registrationCard: {
    padding: 10,
    backgroundColor: '#c4c4c4',
  }
}));

export const UserProfile = () => {
  const history = useHistory();
  const classes = useStyles();
  const {user} = useContext(StateContext);
  const [profile, setProfile] = useState(user);
  const [open, setOpen] = useState(false);
  let relationship = profile?.data?.relationships?.profile_attributes?.data;

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid container spacing={2}>
      <Grid item lg={5} xs={12}>
        <Paper className={classes.paper}>
          <Grid container>
            <Grid item lg={3} xs={6}>
              <img src={require('../../../../assets/images/default.png').default} className={classes.image} alt=""/>
            </Grid>
            <Grid item lg={5} xs={6}>
              <Typography className={classes.name}>
                {fetchIncludedObject(relationship, profile?.included)?.attributes?.first_name ?? 'Event'}
                {' '}
                {fetchIncludedObject(relationship, profile?.included)?.attributes?.last_name ?? 'User'}
              </Typography>
              <Typography className={classes.detail}>
                {profile?.data?.attributes?.phone || '--'}
              </Typography>
              <Typography className={classes.detail}>
                <Moment format="DD-MM-YYYY">
                  {fetchIncludedObject(relationship, profile?.included)?.attributes?.dob ?? new Date()}
                </Moment>
              </Typography>
              <Typography className={classes.detail}>
                <a href={`mailto: ${profile?.data?.attributes?.email}`} target="_blank" rel="noreferrer noopener">
                  {profile?.data?.attributes?.email ?? '--'}
                </a>
              </Typography>
            </Grid>
            <RenderAuthorized authorized={['Admin']}>
              <Grid item lg={4} xs={6} align="right">
                <Button className={classes.button}>Deactivate</Button>
              </Grid>
            </RenderAuthorized>
          </Grid>
          <Grid item lg={12} xs={12} align="right">
            <IconButton style={{backgroundColor: 'blue'}}>
              <EditIcon onClick={() => handleClickOpen()}/>
            </IconButton>
          </Grid>
          <Typography className={classes.registration}>
            Registration Date
          </Typography>
          <Paper className={classes.registrationCard}>
            <Typography>
              <Moment format="DD-MM-YYYY">
                {profile?.data?.attributes?.created_at}
              </Moment>
            </Typography>
          </Paper>
        </Paper>
      </Grid>
      <EditProfile handleClose={handleClose} open={open} editUser={profile} relations={relationship}/>
      <Grid item lg={7} xs={12}>
        <Paper className="p-3">
          <Typography style={{fontWeight: 700, textAlign: 'center', marginBottom: 10}}>Events Created</Typography>
          <UserEventCreated/>
        </Paper>
      </Grid>
    </Grid>
  );
};
