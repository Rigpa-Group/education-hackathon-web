import React from 'react';
import {Card, Container, makeStyles} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import './CourseDetail.scss';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import CourseDetailTab from './course-detail-tab/CourseDetailTab';
import CourseVideoAccordian from './course-detail-tab/course-video-list/CourseVideoList';
import {Player} from 'video-react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';
import Rating from '@material-ui/lab/Rating';
import TextField from '@material-ui/core/TextField';

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
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function CourseDetail() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [value, setValue] = React.useState(2);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item lg={8}>
          <div style={{marginBottom: 20, marginTop: 20}}>
            <Player className={classes.media} poster='/assets/images/categoryImg.png'
                    src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" playsInline/>
          </div>
          <Typography className='video-title'>
            Annual Merek Sakten Festival
          </Typography>
          <Typography className='tutor-name'>
            Sangay Dorji
          </Typography>
          <div>
            <Divider style={{marginTop: '2%', marginBottom: '2%'}}/>
          </div>
          <div>
            <CourseDetailTab/>
          </div>
        </Grid>
        <Grid item lg={4}>
          <Card className='cardContainer'>
            <Typography className='course-list'>
              Course list
            </Typography>
            <Divider/>
            <div>
              <CourseVideoAccordian/>
            </div>
          </Card>
        </Grid>
      </Grid>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent style={{width: 400}} align="center">
          <Typography style={{color: '#03A2A5', fontSize: 21, marginBottom: 10}}>Rate this course</Typography>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
          <Typography style={{color: '#03A2A5', fontSize: 21, marginBottom: 10, marginTop: 20}}>Review this
            course</Typography>
          <TextField variant="outlined" label="Review" placeholder="Write your review" multiline={true} rows={3}
                     fullWidth/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Done
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
