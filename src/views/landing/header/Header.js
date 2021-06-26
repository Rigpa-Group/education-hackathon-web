import React, {useContext, useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Search from '../../../shared/Search/Search';
import './Header.scss';
import {Autocomplete} from '@material-ui/lab';
import TextField from '@material-ui/core/TextField';
import {useHistory} from 'react-router-dom';
import {Notify, setProps} from '../../../shared/components/notification/Notification';
import {courseCategoryApi} from '../../../services/CourseServices';
import {useSnackbar} from 'notistack';
import {DispatchContext, StateContext} from '../../../store';
import Avatar from '@material-ui/core/Avatar';
import RenderAuthorized from '../../../routes/RenderAuthorized';
import {Menu, MenuItem} from '@material-ui/core';
import {Link} from 'react-scroll';
import {logout} from '../../../services/AuthServices';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appbar: {
    backgroundColor: 'white',
  },
  blackColor: {
    color: 'black'
  },
  title: {
    flexGrow: 1,
    fontSize: 34,
    color: '#03A2A5',
    fontWeight: 700
  },
  name: {
    color: '#000',
    paddingTop: 10,
  },
  profile: {
    display: 'flex'
  }
}));

export default function Header() {
  const history = useHistory();
  const classes = useStyles();
  const [categories, setCategories] = useState();
  const snackbar = useSnackbar();
  const [inputSearch, setInputSearch] = useState('');
  const {user} = useContext(StateContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useContext(DispatchContext);

  useEffect(() => {
    setProps(snackbar);
    fetchAdminUsers();
  }, [inputSearch]);

  const fetchAdminUsers = () => {
    courseCategoryApi('get', null, {q: inputSearch}).then(response => {
      setCategories(response.course_categories);
    }).catch(err => Notify(err, 'error'));
  };

  const handleInputChange = (value) => {
    setInputSearch(value);
  };

  const truncate = (str) => {
    return str?.length > 1 ? str?.substring(0, 1) + '' : str;
  };

  const handleAdminDashboard = () => {
    history.push('/dashboard');
  };

  const handleTutorDashboard = () => {
    history.push('/profile');
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onSignOut = () => {
    logout(dispatch).then(res => {
      history.push('/login');
      Notify('User logout successfully', 'success');
    }).catch(err => {
      Notify(err, 'error');
    });
  };

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            EduTech
          </Typography>
          <div className="categorylist">
            <Autocomplete
              id="combo-box-demo"
              options={categories}
              getOptionLabel={(option) => option.name}
              onInputChange={(e, value) => handleInputChange(value)}
              renderInput={(params) => <TextField {...params} placeholder="Category"
                                                  size="small" variant="outlined"/>}
            />
          </div>
          <div className="search">
            <Search/>
          </div>
          {!user.authenticated ?
            <div>
              <Button className={classes.blackColor} variant={'outlined'} color="inherit"
                      onClick={() => history.push('/login')}>Login</Button>
              <Button style={{marginLeft: 12}} variant={'contained'} color="primary"
                      onClick={() => history.push('/sign-up')}>Sign Up</Button>
            </div>
            :
            <div>
              <div className={classes.profile}>
                <Avatar>{truncate(user?.profile_attributes?.first_name)}</Avatar>
                <Link to="/login" onClick={handleClick} style={{textDecoration: 'none'}}
                      className="head-link hand-cursor  text-capitalize">
                  <Typography
                    className={classes.name}>{user?.profile_attributes?.first_name} {''} {user?.profile_attributes?.last_name}
                  </Typography>
                </Link>
              </div>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <RenderAuthorized authorized={['Admin']}>
                  <MenuItem onClick={
                    handleAdminDashboard}>Dashboard</MenuItem>
                </RenderAuthorized>
                <RenderAuthorized authorized={['Tutor']}>
                  <MenuItem onClick={
                    handleTutorDashboard}>Dashboard</MenuItem>
                </RenderAuthorized>
                <RenderAuthorized authorized={['Learner']}>
                  <MenuItem>My Learning</MenuItem>
                </RenderAuthorized>
                <MenuItem onClick={() => onSignOut()}>Logout</MenuItem>
              </Menu>
            </div>
          }
        </Toolbar>
      </AppBar>
    </div>
  );
}
