import React from 'react';
import {Card, Container, Grid, makeStyles} from '@material-ui/core';
import {Player} from 'video-react';
import Typography from '@material-ui/core/Typography';
import './Ongoing.scss';

const useStyles = makeStyles(theme => ({
  card: {
    width: '100%',
    marginBottom: 50,
  },
  media: {
    width: 278,
    height: 173
  },
  title: {
    fontWeight: 550,
    marginTop: 15
  },
  courseText: {
    fontWeight: 700,
    fontSize: 21,
    marginBottom: 20
  }
}));
export const OngoingCourses = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container>
        <Typography className={classes.courseText}><u>Courses</u></Typography>
        <Grid container spacing={2}>
          <Grid item lg={4} xs={12}>
            <Card className={classes.card}>
              <Grid container spacing={2}>
                <Grid item lg={5}>
                  <Player className={classes.media} poster='/assets/allImage.jpeg'
                          src="/assets/video.mp4" playsInline/>
                </Grid>
                <Grid item lg={7}>
                  <Typography gutterBottom className={classes.title} component="h2">
                    Annual Merek Sakten Festival
                  </Typography>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item lg={4} xs={12}>
            <Card className={classes.card}>
              <Grid container spacing={2}>
                <Grid item lg={5}>
                  <Player className={classes.media} poster='/assets/allImage.jpeg'
                          src="/assets/video.mp4" playsInline/>
                </Grid>
                <Grid item lg={7}>
                  <Typography gutterBottom className={classes.title} component="h2">
                    Annual Merek Sakten Festival
                  </Typography>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item lg={4} xs={12}>
            <Card className={classes.card}>
              <Grid container spacing={2}>
                <Grid item lg={5}>
                  <Player className={classes.media} poster='/assets/allImage.jpeg'
                          src="/assets/video.mp4" playsInline/>
                </Grid>
                <Grid item lg={7}>
                  <Typography gutterBottom className={classes.title} component="h2">
                    Annual Merek Sakten Festival
                  </Typography>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};