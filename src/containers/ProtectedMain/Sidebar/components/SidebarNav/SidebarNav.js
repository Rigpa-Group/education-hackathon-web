import React, {forwardRef, useContext, useEffect, useState} from 'react';
import {NavLink as RouterLink, useHistory} from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import {Button, colors, List, ListItem} from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Divider from '@material-ui/core/Divider';
import {DispatchContext, StateContext} from '../../../../../store';
import {Notify, setProps} from '../../../../../shared/components/notification/Notification';
import {logout} from '../../../../../services/AuthServices';
import {useSnackbar} from 'notistack';
import {isAuthorized} from '../../../../../routes/RoleAuthorisation';

const useStyles = makeStyles(theme => ({
  root: {},
  item: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0
  },
  button: {
    color: colors.blueGrey[800],
    padding: '10px 8px',
    justifyContent: 'flex-start',
    textTransform: 'none',
    letterSpacing: 0,
    width: '100%',
    fontWeight: theme.typography.fontWeightMedium
  },
  icon: {
    color: theme.palette.icon,
    width: 24,
    height: 24,
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(1)
  },
  active: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
    '& $icon': {
      color: theme.palette.primary.main
    }
  },
  divider: {
    height: 1,
    color: '#000000',
    marginTop: 20,
    marginBottom: 20
  }
}));

const CustomRouterLink = forwardRef((props, ref) => (
  <div
    ref={ref}
    style={{flexGrow: 1}}
  >
    <RouterLink {...props} />
  </div>
));

const SidebarNav = props => {
  const snackbar = useSnackbar();
  const {pages, className, children, ...rest} = props;
  const [expanded, setExpanded] = React.useState(children?.props?.visible);
  const history = useHistory();
  const classes = useStyles();
  const [activeIndex, setActiveIndex] = useState(4);
  const dispatch = useContext(DispatchContext);
  const {user} = useContext(StateContext);

  useEffect(() => {
    setProps(snackbar);
    /*if (!user?.authenticated) {
      history.push('/login');
    }*/
  }, []);

  const onSignOut = () => {
    logout(dispatch).then(res => {
      history.push('/login');
      Notify('User logout successfully', 'success');
    }).catch(err => {
      Notify(err, 'error');
    });
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(!!isExpanded);
  };

  const navigationDetail = (route, index) => {
    setActiveIndex(index);
    setExpanded(true);
    history.push(route);
  };

  return (
    <List
      {...rest}
      className={clsx(classes.root, className)}
    >
      {pages?.filter(role => isAuthorized(user?.role_ids, role?.authorized))?.map(page => (
        <ListItem
          className={classes.item}
          disableGutters
          key={page.title}
        >
          {page?.children?.length > 0 ?
            <Accordion style={{boxShadow: 'none'}} expanded={expanded} onChange={handleChange('user')}>
              <AccordionSummary
                style={{paddingLeft: 8, paddingRight: 0}}
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <div className={classes.icon}>{page.icon}</div>
                <Typography style={{marginTop: 2, color: colors.blueGrey[800], fontWeight: 300}}>
                  {page?.title}
                </Typography>
              </AccordionSummary>
              {page?.children?.map((child, index) => (
                <AccordionDetails onClick={() => navigationDetail(child.href, index)}
                                  style={{paddingTop: 0, cursor: 'pointer'}}
                                  key={index}>
                  <div style={{marginLeft: 40}} className={index === activeIndex ? classes.active : ''}>
                    {child?.icon}</div>
                  <Typography style={{marginLeft: 10}} className={index === activeIndex ? classes.active : ''}>
                    {child?.title}
                  </Typography>
                </AccordionDetails>
              ))}
            </Accordion> :
            <Button
              activeClassName={classes.active}
              className={classes.button}
              component={CustomRouterLink}
              to={page.href}
            >
              <div className={classes.icon}>{page?.icon}</div>
              {page.title}
            </Button>
          }
        </ListItem>
      ))}
      <Divider className={classes.divider}/>
      <ListItem
        className={classes.item}
        disableGutters
        key={'Notification'}
      >
        <Button
          className={classes.button}
          onClick={() => onSignOut()}
        >
          <div className={classes.icon}><ExitToAppIcon/></div>
          {'Logout'}
        </Button>
      </ListItem>

    </List>
  );
};

SidebarNav.propTypes = {
  className: PropTypes.string,
  pages: PropTypes.array.isRequired
};

export default SidebarNav;
