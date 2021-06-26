import React from 'react';
import {Grid, InputAdornment, Paper, Typography} from '@material-ui/core';
import '../../../assets/stylesheets/_utility.scss';
import './Signup.scss';
import 'date-fns';
import {TextField} from 'formik-material-ui';
import {Link, useHistory, useLocation} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import {Field, Form, Formik} from 'formik';
import {usersApi} from '../../../services/UserServices';
import {Notify, setProps} from '../../../shared/components/notification/Notification';
import {useSnackbar} from 'notistack';
import {signUpValidation} from '../AuthValidationSchema';
import IconButton from '@material-ui/core/IconButton';
import {Visibility, VisibilityOff} from '@material-ui/icons';
import {Autocomplete} from '@material-ui/lab';
import {gender} from '../../../shared/functions/SharedModels';

export default function SignUp() {
  const history = useHistory();
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const isTutor = urlParams.get('tutor');
  const snackbar = useSnackbar();
  setProps(snackbar);
  const [passwordValues, setPasswordValues] = React.useState({showPassword: false, showCpassword: false,});
  const initialValues = {
    email: '',
    phone: '',
    profile_attributes: {first_name: '', last_name: '', gender: ''},
    password: '',
    role_ids: [isTutor ? 1 : 2]
  };

  const onSignUp = (values, {setSubmitting}) => {
    usersApi('post', {user: {...values}}).then(res => {
      setSubmitting(false);
      history.push('/login');
      Notify('Thank you for your registering.We have sent an email with a confirmation link to your email address.', 'success');
    }).catch(err => {
      setSubmitting(false);
      Notify(err, 'error');
    });
  };

  const handleClickShowPassword = (type) => {
    if (type === 'password') {
      setPasswordValues({...passwordValues, showPassword: !passwordValues.showPassword});
    } else if (type === 'confirmation') {
      setPasswordValues({...passwordValues, showCpassword: !passwordValues.showCpassword});
    }
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <div style={{backgroundColor: '#03A2A5', height: '100vh'}}>
      <Grid container>
        <Grid item lg={12} xs={12} align="center">
          <Paper className="signup-paper">
            <Typography variant="h5" color={'primary'} style={{marginBottom: 15}}>
              EduTech
            </Typography>
            <Formik initialValues={initialValues} onSubmit={onSignUp} validationSchema={signUpValidation}>
              {({
                  values,
                  errors,
                  isSubmitting,
                  dirty,
                  handleBlur,
                  handleChange,
                  ...formik
                }) => (
                <Form onSubmit={formik.handleSubmit}>
                  <Field component={TextField} name="profile_attributes.first_name" label="First Name" type="text"
                         variant="outlined" required fullWidth margin="dense"/>
                  <Field component={TextField} name="profile_attributes.last_name" label="Last Name" type="text"
                         variant="outlined" style={{marginTop: 10}} fullWidth margin="dense"/>
                  <Field component={TextField} name="phone" label="Phone" type="number" variant="outlined" fullWidth
                         required style={{marginTop: 10}} margin="dense"/>
                  <Field component={TextField} name="email" label="Email" type="email" variant="outlined" fullWidth
                         required style={{marginTop: 10}} margin="dense"/>
                  <Autocomplete
                    id="combo-box-demo"
                    options={gender}
                    getOptionLabel={(option) => option.title}
                    onChange={(e, value) => formik.setFieldValue('profile_attributes.gender', value?.value)}
                    style={{width: '100%', marginTop: 10}}
                    renderInput={(params) => <Field component={TextField} name="profile_attributes.gender"
                                                    {...params} label="Gender" required variant="outlined"
                                                    margin="dense"/>}
                  />
                  <Field component={TextField} name="password" label="Password" variant="outlined" required
                         type={passwordValues.showPassword ? 'text' : 'password'} fullWidth margin="dense"
                         InputProps={{
                           endAdornment: <InputAdornment position="end">
                             <IconButton
                               aria-label="toggle password visibility"
                               onClick={() => handleClickShowPassword('password')}
                               onMouseDown={handleMouseDownPassword}
                             >
                               {passwordValues.showPassword ? <Visibility/> : <VisibilityOff/>}
                             </IconButton>
                           </InputAdornment>,
                         }}
                         style={{marginTop: 10}}/>
                  <Field component={TextField} name="confirmation_password" margin="dense" label="Confirm Password"
                         required
                         type={passwordValues.showCpassword ? 'text' : 'password'}
                         variant="outlined" fullWidth
                         InputProps={{
                           endAdornment: <InputAdornment position="end">
                             <IconButton
                               aria-label="toggle password visibility"
                               onClick={() => handleClickShowPassword('confirmation')}
                               onMouseDown={handleMouseDownPassword}
                             >
                               {passwordValues.showCpassword ? <Visibility/> : <VisibilityOff/>}
                             </IconButton>
                           </InputAdornment>,
                         }}
                         style={{marginTop: 10}}/>
                  <Button variant="contained" color={'primary'} className="signup-btn" type="submit">
                    SignUp
                  </Button>
                </Form>
              )}
            </Formik>
            <Link to="/login" className="back-text">
              <Typography style={{marginTop: 20}} color={'primary'}>
                Back to Login
              </Typography>
            </Link>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
