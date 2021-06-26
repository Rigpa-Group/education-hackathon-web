import React, {useState} from 'react';
import {Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import {useSnackbar} from 'notistack';
import {useFormikContext} from 'formik';

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
    height: '100%',
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

export const SingleImageUpload = (props) => {
  const classes = useStyles();
  const snackbar = useSnackbar();
  const {setFieldValue} = useFormikContext();
  const {courseIndex} = props;
  const [image, setImage] = useState(null);

  const handleUpload = (files) => {
    setFieldValue(`course_units_attributes[${courseIndex}].photo_attributes.image`, files[0]);
    setImage({image: URL.createObjectURL(files?.[0])});
  };

  const handleDeleteImg = (img) => {
    setFieldValue(`course_units_attributes[${courseIndex}].photo_attributes`, null);
    setImage(null);
  };

  return (
    <React.Fragment>
      <div className={classes.border}>
        <Grid container spacing={4}>
          {image === null ?
            <Grid item lg={12} xs={12} align="center">
              <label className="hand-cursor">
                <div>
                  <CloudUploadIcon className={classes.iconFont}/>
                </div>
                <Typography variant="h6">{'Upload Image'}</Typography>
                <input
                  onChange={(e) => handleUpload(e.currentTarget?.files)}
                  type="file" accept="image/*"
                  hidden
                />
              </label>
            </Grid> :
            <Grid item xs={12} lg={7} align="center">
              <img className={classes.preview} src={image?.image} alt=""/>
              <CloseIcon className={classes.closeIcon} onClick={() => handleDeleteImg(image)}/>
            </Grid>
          }
        </Grid>
      </div>
    </React.Fragment>
  );
};
