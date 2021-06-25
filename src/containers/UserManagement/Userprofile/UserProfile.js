import React, {useState} from 'react';
import {Grid, makeStyles, Paper, Typography} from '@material-ui/core';
import {UserEventCreated} from './UserEventCreated';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import {useHistory} from 'react-router-dom';
import {useTheme} from '@material-ui/core';

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
}));

export const UserProfile = () => {
  const history = useHistory();
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

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
              <img src={require('../../../assets/images/default.png').default} className={classes.image} alt=""/>
            </Grid>
            <Grid item lg={5} xs={6}>
              <Typography className={classes.name}>
                Name
              </Typography>
              <Typography className={classes.detail}>
                12345678
              </Typography>
              <Typography className={classes.detail}>
                <a href='mailto: kinga@gmail.com' target="_blank" rel="noreferrer noopener">
                  dawa@gmail.com
                </a>
              </Typography>
            </Grid>
          </Grid>
          <Grid item lg={12} xs={12} align="right">
            <IconButton style={{backgroundColor: theme.primary}}>
              <EditIcon style={{color: 'white'}} onClick={() => handleClickOpen()}/>
            </IconButton>
          </Grid>
        </Paper>
      </Grid>
      <Grid item lg={7} xs={12}>
        <Typography style={{fontWeight: 700, textAlign: 'center', marginBottom: 10}}>Courses Created</Typography>
        <UserEventCreated/>
      </Grid>
    </Grid>
  );
};
