import React from 'react';
import clsx from 'clsx';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import {useMediaQuery} from '@material-ui/core';
import Header from '../header/Header';
import {Footer} from '../Footer/Footer';


const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 56,
    height: '100%',
    [theme.breakpoints.up('sm')]: {
      paddingTop: 64
    }
  },
}));

export const Home = props => {
  const {children} = props;
  const classes = useStyles();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true
  });

  return (
    <div
      className={clsx({
        [classes.root]: true,
      })}
    >
      <Header/>
      <main>
        {children}
      </main>
      <Footer/>
    </div>
  );
};