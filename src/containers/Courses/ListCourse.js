import React from 'react';
import ViewAll from '../../views/landing/view-all/ViewAll';
import {makeStyles, Button} from '@material-ui/core';
import {useHistory} from 'react-router-dom'
import RenderAuthorized from '../../routes/RenderAuthorized';

const useStyles = makeStyles(theme => ({
  button: {
    backgroundColor: theme.primary,
    color: 'white',
    textTransform: 'capitalize',
    float: 'right',
    marginBottom: 30,
    marginRight: 25,
  }
}))

export const ListCourse = () => {
  const classes = useStyles();
  const history = useHistory();

  const addCourse = () => {
    history.push('/course/add')
  }

  return (
    <React.Fragment>
      <RenderAuthorized authorized={['Tutor']}>
      <section>
        <Button variant="contained" className={classes.button} onClick={addCourse}>Add Course</Button>
      </section>
      </RenderAuthorized>
      <ViewAll/>
    </React.Fragment>
  )
}