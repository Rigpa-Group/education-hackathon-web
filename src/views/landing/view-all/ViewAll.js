import React from 'react';
import {Card, CardActionArea, CardContent, Container, makeStyles} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './ViewStyles.scss';
import Rating from '@material-ui/lab/Rating';
import Pagination from '@material-ui/lab/Pagination';
import {Player} from 'video-react';

const useStyles = makeStyles({
  root: {
    maxWidth: 278,
    cardBorder: 'none',
    boxShadow: 'none'
  },
  media: {
    width: 278,
    height: 173
  },
  title: {
    fontSize: 24,
    fontWeight: 700,
    paddingBottom: 10
  },
  pagination: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: 10
  }
});
const viewAll = ['1', '2', '3', '4'];
const containerLoop = ['1', '2', '3', '4'];
export default function ViewAll() {
  const classes = useStyles();
  const [value, setValue] = React.useState(2);

  return (
    <Container>
      <Container>
        <Typography className={classes.title}>
          Courses
        </Typography>
      </Container>
      {containerLoop.map(val => (
        <Grid container spacing={2}>
          {viewAll.map(val => (
            <Grid item lg={3}>
              <Card className={classes.root}>
                <CardActionArea>
                  <Player className={classes.media} poster='/assets/allImage.jpeg'
                          src="/assets/video.mp4" playsInline/>
                  <CardContent>
                    <Typography gutterBottom className='title' component="h2">
                      Annual Merek Sakten Festival
                    </Typography>
                    <Typography variant="body2" className='name' component="p">
                      Sangay Dorji
                    </Typography>
                    <Box component="fieldset" borderColor="transparent">
                      <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                          setValue(newValue);
                        }}
                      />
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      ))}
      <div className={classes.pagination}>
        <Pagination count={10} color="primary"/>
      </div>
    </Container>
  );
}
