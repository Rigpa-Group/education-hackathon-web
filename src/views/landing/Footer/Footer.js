import React from 'react';
import {Container, makeStyles} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: '#03A2A5',
    padding: '20px 0 20px 0',
    color: 'white',
  }
}));

export const Footer = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.footer}>
        <Container>
          <p className="mt-3">Copyright @ 2021-{new Date().getFullYear()} EduTech. All rights reserved</p>
        </Container>
      </div>
    </div>
  );
};