import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import makeStyles from '@material-ui/core/styles/makeStyles';
import {Typography} from '@material-ui/core';
import {useHistory} from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    boxShadow: 'none',
    backgroundColor: '#F3F6F6'
  },
  menuButton: {
    color: 'blue',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  logo: {
    fontSize: 35,
    fontWeight: 700,
    color: theme.primary,
    cursor: 'pointer',

    [theme.breakpoints.down('sm')]: {
      fontSize: 21,
    }
  },
  profileIcon: {
    display: 'flex',
    flexDirection: 'row',

    [theme.breakpoints.down('sm')]: {
      display: 'none',
    }
  }
}));


export const ProtectedHeader = ({onSidebarOpen}) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <div onClick={() => history.push('/')}>
          <Typography className={classes.logo}>EduTech</Typography>
        </div>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={onSidebarOpen}
          className={classes.menuButton}
        >
          <MenuIcon/>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
