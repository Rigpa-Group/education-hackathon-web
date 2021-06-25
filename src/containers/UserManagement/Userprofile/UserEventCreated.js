import React from 'react';
import {Grid, makeStyles, Paper} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  image: {
    width: '100%',
    height: 150
  }
}));

export const UserEventCreated = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item lg={4} xs={12}>
        <Paper>
          <img src={require('../../../../assets/images/default.png').default} className={classes.image} alt=""/>
          <div className="p-2">
            <Typography style={{color: 'gray', fontSize: 14, marginTop: 10}}>
              Sun, 12/12/2020 7:00 AM
            </Typography>
            <Typography style={{color: 'gray', fontSize: 14, marginTop: 4}}>
              7:00 AM
            </Typography>
            <Typography style={{fontSize: 18, marginTop: 5, fontWeight: 600}}>
              Event Title
            </Typography>
            <Typography style={{fontSize: 16, marginTop: 10}}>
              Nu.500
            </Typography>
          </div>
        </Paper>
      </Grid>
      <Grid item lg={4} xs={12}>
        <Paper>
          <img src={require('../../../../assets/images/default.png').default} className={classes.image} alt=""/>
          <div className="p-2">
            <Typography style={{color: 'gray', fontSize: 14, marginTop: 10}}>
              Sun, 12/12/2020 7:00 AM
            </Typography>
            <Typography style={{color: 'gray', fontSize: 14, marginTop: 4}}>
              7:00 AM
            </Typography>
            <Typography style={{fontSize: 18, marginTop: 5, fontWeight: 600}}>
              Event Title
            </Typography>
          </div>
        </Paper>
      </Grid>
      <Grid item lg={4} xs={12}>
        <Paper>
          <img src={require('../../../../assets/images/default.png').default} className={classes.image} alt=""/>
          <div className="p-2">
            <Typography style={{color: 'gray', fontSize: 14, marginTop: 10}}>
              Sun, 12/12/2020 7:00 AM
            </Typography>
            <Typography style={{color: 'gray', fontSize: 14, marginTop: 4}}>
              7:00 AM
            </Typography>
            <Typography style={{fontSize: 18, marginTop: 5, fontWeight: 600}}>
              Event Title
            </Typography>
          </div>
        </Paper>
      </Grid>
      <Grid item lg={4} xs={12}>
        <Paper>
          <img src={require('../../../../assets/images/default.png').default} className={classes.image} alt=""/>
          <div className="p-2">
            <Typography style={{color: 'gray', fontSize: 14, marginTop: 10}}>
              Sun, 12/12/2020 7:00 AM
            </Typography>
            <Typography style={{color: 'gray', fontSize: 14, marginTop: 4}}>
              7:00 AM
            </Typography>
            <Typography style={{fontSize: 18, marginTop: 5, fontWeight: 600}}>
              Event Title
            </Typography>
            <Typography style={{fontSize: 16, marginTop: 10}}>
              Nu.500
            </Typography>
          </div>
        </Paper>
      </Grid>
      <Grid item lg={4} xs={12}>
        <Paper>
          <img src={require('../../../../assets/images/default.png').default} className={classes.image} alt=""/>
          <div className="p-2">
            <Typography style={{color: 'gray', fontSize: 14, marginTop: 10}}>
              Sun, 12/12/2020 7:00 AM
            </Typography>
            <Typography style={{color: 'gray', fontSize: 14, marginTop: 4}}>
              7:00 AM
            </Typography>
            <Typography style={{fontSize: 18, marginTop: 5, fontWeight: 600}}>
              Event Title
            </Typography>
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
};
