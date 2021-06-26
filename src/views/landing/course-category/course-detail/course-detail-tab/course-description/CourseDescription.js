import React from 'react';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  titleDescription: {
    fontSize: 15,
    fontWeight: 700
  },
  descriptionTitle: {
    marginTop: '2%'
  }
}));
export default function CourseDescription({course, unit}) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div>
        <Typography className={classes.titleDescription}>
          Description
        </Typography>
        <Typography className={classes.descriptionTitle}>
          {course?.description || unit?.description}
        </Typography>
      </div>
    </React.Fragment>
  );
}
