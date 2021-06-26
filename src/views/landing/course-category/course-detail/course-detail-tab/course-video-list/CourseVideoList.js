import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Checkbox, FormControlLabel, FormGroup} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function CourseVideoAccordian({course, handleContent}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {course?.course_units_attributes?.length > 0 && course?.course_units_attributes?.map((unit, index) => (
        <Accordion key={unit?.id}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon/>}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>Course {index + 1}: </Typography>
            <Typography className={classes.heading}> {unit?.name}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {unit?.videos_attributes?.length > 0 && unit?.videos_attributes?.map(video => (
              <div key={video?.id}>
                <FormGroup row className="text-underline hand-cursor">
                  <FormControlLabel
                    control={<Checkbox color="primary" checked={false} name="checkedA"
                                       onClick={() => handleContent(video, unit)}/>}
                    label={video?.filename}
                  />
                </FormGroup>
              </div>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
