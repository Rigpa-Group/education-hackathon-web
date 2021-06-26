import React from 'react';
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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appbar: {
    backgroundColor: 'white',
    boxShadow: 'none'
  },
  blackColor: {
    color: 'black'
  },
  title: {
    flexGrow: 1,
    fontSize: 34,
    color: '#03A2A5',
    fontWeight: 700
  }
}));

export default function Header() {
  const history = useHistory();
  const classes = useStyles();

  const categoryList = [
    {title: 'Dzongkha'},
    {title: 'English'},
    {title: 'Maths'},
    {title: 'Nursery'},
    {title: 'Science'},
  ];
  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            EduTech
          </Typography>
          <div className='categorylist'>
            <Autocomplete
              id="combo-box-demo"
              options={categoryList}
              getOptionLabel={(option) => option.title}
              renderInput={(params) => <TextField {...params} placeholder='Category' variant="outlined"/>}
            />
          </div>
          <div className='search'>
            <Search/>
          </div>
          <Button className={classes.blackColor} variant={'outlined'} color="inherit" onClick={() => history.push('/login')}>Login</Button>
          <Button style={{marginLeft: 12}} variant={'contained'} color="primary" onClick={() => history.push('/sign-up')}>Sign Up</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
