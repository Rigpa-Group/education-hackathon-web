import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  facebook: {
    color: '#3b5998',
    height: 50,
    width: 50,
    borderRadius: 25,
    cursor: 'pointer',
    '&:hover':{
      height: 55,
      width: 55,
    },
  },
  instagram: {
    backgroundImage: 'linear-gradient(to right, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D, #F56040, #F77737)',
    color: '#fff',
    height: 40,
    width: 40,
    marginTop: 10,
    marginLeft: 5,
    borderRadius: 10,
    cursor: 'pointer',

    '&:hover':{
      height: 45,
      width: 45,
    },
  },
  linked: {
    color: '#0e76a8',
    height: 50,
    marginTop: 10,
    width: 50,
    borderRadius: 25,
    cursor: 'pointer',

    '&:hover':{
      height: 55,
      width: 55,
    },
  },
  twitter: {
    color: '#00acee',
    height: 50,
    marginTop: 10,
    width: 50,
    cursor: 'pointer',
    borderRadius: 25,

    '&:hover':{
      height: 55,
      width: 55,
    },
  },

}));

export const SocialIcon = () => {
  const classes = useStyles();

  return (
    <div style={{position: 'fixed', marginTop: 200}}>
      <div>
        <FacebookIcon className={classes.facebook}/>
      </div>
      <div>
        <InstagramIcon className={classes.instagram}/>
      </div>
      <div>
        <LinkedInIcon className={classes.linked}/>
      </div>
      <div>
        <TwitterIcon className={classes.twitter}/>
      </div>
    </div>
  );
};