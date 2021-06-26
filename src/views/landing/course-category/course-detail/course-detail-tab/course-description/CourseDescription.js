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
export default function CourseDescription() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div>
        <Typography className={classes.titleDescription}>
          Description
        </Typography>
        <Typography className={classes.descriptionTitle}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto aspernatur dolorem dolores eum
          eveniet exercitationem, ipsam labore modi nemo perspiciatis possimus quae ratione rem reprehenderit velit,
          voluptate voluptates. Fugiat?

          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto aspernatur dolorem dolores eum
          eveniet exercitationem, ipsam labore modi nemo perspiciatis possimus quae ratione rem reprehenderit velit,
          voluptate voluptates. Fugiat?

          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto aspernatur dolorem dolores eum
          eveniet exercitationem, ipsam labore modi nemo perspiciatis possimus quae ratione rem reprehenderit velit,
          voluptate voluptates. Fugiat?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto aspernatur dolorem dolores eum
          eveniet exercitationem, ipsam labore modi nemo perspiciatis possimus quae ratione rem reprehenderit velit,
          voluptate voluptates. Fugiat?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto aspernatur dolorem dolores eum
          eveniet exercitationem, ipsam labore modi nemo perspiciatis possimus quae ratione rem reprehenderit velit,
          voluptate voluptates. Fugiat?
        </Typography>
      </div>
    </React.Fragment>
  );
}
