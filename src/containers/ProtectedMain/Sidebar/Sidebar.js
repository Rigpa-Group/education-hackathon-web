import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {Divider, Drawer, makeStyles} from '@material-ui/core';
import SidebarNav from './components/SidebarNav/SidebarNav';
import Typography from '@material-ui/core/Typography';
import {pages} from './SideBarPages';

const useStyles = makeStyles(theme => ({
  drawer: {
    width: 240,
  },
  root: {
    backgroundColor: theme.palette.white,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: theme.spacing(2)
  },
  divider: {
    margin: theme.spacing(3, 0)
  },
  nav: {
    marginBottom: theme.spacing(2)
  }
}));

const Sidebar = props => {
  const {open, variant, onClose, className, children, ...rest} = props;
  const classes = useStyles();

  return (
    <Drawer
      anchor="left"
      classes={{paper: classes.drawer}}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div
        {...rest}
        className={clsx(classes.root, className)}
      >
        <img src={require('../../../assets/images/default.png').default}
             style={{width: 80, height: 80, borderRadius: 50, alignSelf: 'center'}} alt=""/>
        <Typography style={{textAlign: 'center'}} className="mt-3 text-capitalize">
          Zala Kinga Wangchuk
        </Typography>
        <Divider className={classes.divider}/>
        <SidebarNav
          children={children}
          className={classes.nav}
          pages={pages}
        />
      </div>
    </Drawer>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired
};

export default Sidebar;
