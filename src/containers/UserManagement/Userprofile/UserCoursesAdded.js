import React from 'react';
import {Grid, makeStyles, Paper} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  image: {
    width: '100%',
    height: 150
  }
}));

export const UserCoursesAdded = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item lg={4} xs={12}>
        <Paper>
          <img src={require('../../../assets/images/default.png').default} className={classes.image} alt=""/>
          <div style={{padding: 15}}>
            <Typography style={{fontSize: 18, marginTop: 5, fontWeight: 600}}>
              Title
            </Typography>
            <Typography style={{color: 'gray', fontSize: 14, marginTop: 10}}>
              Pema Samdrup
            </Typography>
          </div>
        </Paper>
      </Grid>
      <Grid item lg={4} xs={12}>
        <Paper>
          <img src={require('../../../assets/images/default.png').default} className={classes.image} alt=""/>
          <div style={{padding: 15}}>
            <Typography style={{fontSize: 18, marginTop: 5, fontWeight: 600}}>
              Title
            </Typography>
            <Typography style={{color: 'gray', fontSize: 14, marginTop: 10}}>
              Sonam wangchuk
            </Typography>
          </div>
        </Paper>
      </Grid>
      <Grid item lg={4} xs={12}>
        <Paper>
          <img src={require('../../../assets/images/default.png').default} className={classes.image} alt=""/>
          <div style={{padding: 15}}>
            <Typography style={{fontSize: 18, marginTop: 5, fontWeight: 600}}>
              Title
            </Typography>
            <Typography style={{color: 'gray', fontSize: 14, marginTop: 10}}>
              Sonam wangchuk
            </Typography>
          </div>
        </Paper>
      </Grid>
      <Grid item lg={4} xs={12}>
        <Paper>
          <img src={require('../../../assets/images/default.png').default} className={classes.image} alt=""/>
          <div style={{padding: 15}}>
            <Typography style={{fontSize: 18, marginTop: 5, fontWeight: 600}}>
              Title
            </Typography>
            <Typography style={{color: 'gray', fontSize: 14, marginTop: 10}}>
              Sonam wangchuk
            </Typography>
          </div>
        </Paper>
      </Grid>
      <Grid item lg={4} xs={12}>
        <Paper>
          <img src={require('../../../assets/images/default.png').default} className={classes.image} alt=""/>
          <div style={{padding: 15}}>
            <Typography style={{fontSize: 18, marginTop: 5, fontWeight: 600}}>
              Title
            </Typography>
            <Typography style={{color: 'gray', fontSize: 14, marginTop: 10}}>
              Sonam wangchuk
            </Typography>
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
};
