import React, {useEffect, useState} from 'react';
import {Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Typography from '@material-ui/core/Typography';
import {useSnackbar} from 'notistack';
import {useFormikContext} from 'formik';
import CloseIcon from '@material-ui/icons/Close';
import {Notify, setProps} from '../components/notification/Notification';

const useStyles = makeStyles(theme => ({
  icon: {
    color: 'blue',
    marginRight: 10
  },
  iconFont: {
    color: 'blue',
    marginRight: 10,
    fontSize: 60,
  },
  button: {
    border: '1px dashed black',
    textAlign: 'center',
    borderRadius: 4,
    margin: 'auto',
    padding: 8,
    cursor: 'pointer',
  },
  preview: {
    width: '100%',
    height: 75,
  },
  border: {
    border: '1px dashed black',
    padding: 20,
  },
  closeIcon: {
    position: 'absolute',
    cursor: 'pointer',
    color: 'red',
  },
  text: {
    fontWeight: 'bold',
    color: '#000000',
    fontSize: '0.5rem'
  }
}));

export const SharedImageUpload = (props) => {
  const {courseIndex} = props;
  const {values, handleChange, setFieldValue, errors} = useFormikContext();
  const classes = useStyles();
  const snackbar = useSnackbar();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    setProps(snackbar);
  }, []);

  const handleUpload = (files) => {
    if (videos.length < 5 && files.length > 0) {
      setFieldValue(`course_units_attributes[${courseIndex}].videos_attributes[${videos.length}].clip`, files[0]);
      videos.push({clip: URL.createObjectURL(files?.[0])});
    } else {
      Notify('You can upload only upto 5 images', 'error');
    }
  };

  const handleDeleteVideo = (img, index) => {
    videos.splice(index, 1);
    values.course_units_attributes[courseIndex].videos_attributes.splice(index, 1);
    setVideos([videos]);
  };

  return (
    <React.Fragment>
      <div className={classes.border}>
        <Grid container spacing={4}>
          {videos.map((video, index) => (
            <Grid item xs={3} lg={3} key={index}>
              <video className={classes.preview} src={video?.clip}/>
              <CloseIcon className={classes.closeIcon} onClick={() => handleDeleteVideo(video, index)}/>
            </Grid>
          ))}
          {videos.length > 0 ?
            <Grid item lg={6} xs={6} align="center">
              <label className={classes.button}>
                <div>
                  <CloudUploadIcon className={classes.icon} fontSize="large"/>
                </div>
                Upload Videos
                <input
                  onChange={(e) => handleUpload(e.currentTarget?.files)}
                  type="file" accept="video/*"
                  hidden
                />
              </label>
            </Grid> :
            <Grid item lg={12} xs={12} align="center">
              <label className="hand-cursor">
                <div>
                  <CloudUploadIcon className={classes.iconFont}/>
                </div>
                <Typography variant="h6">Upload Videos</Typography>
                <input
                  onChange={(e) => handleUpload(e.currentTarget?.files)}
                  type="file" accept="video/*"
                  hidden
                />
              </label>
            </Grid>
          }
        </Grid>
      </div>
      {errors?.course_units_attributes?.[courseIndex]?.videos_attributes?.length > 0 &&
      <Typography variant="subtitle2">
        <span style={{color: '#eb4326'}}>Image field is required</span>
      </Typography>}
    </React.Fragment>
  );
};
