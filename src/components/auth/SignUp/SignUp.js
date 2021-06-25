import React from 'react';
import {Grid, InputAdornment, Paper, Typography} from '@material-ui/core';
import '../../../assets/stylesheets/_utility.scss';
import './Signup.scss';
import 'date-fns';
import {TextField} from 'formik-material-ui';
import {Link, useHistory} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {Field, Form, Formik} from 'formik';
import {usersApi} from '../../../services/UserServices';
import {gender} from '../../../shared/functions/SharedModels';
import {Notify, setProps} from '../../../shared/components/notification/Notification';
import {useSnackbar} from 'notistack';
import {signUpValidation} from '../AuthValidationSchema';
import IconButton from '@material-ui/core/IconButton';
import {Visibility, VisibilityOff} from '@material-ui/icons';
import DateFnsUtils from '@date-io/date-fns';
import {KeyboardDatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';

export default function SignUp() {
  const history = useHistory();
  const snackbar = useSnackbar();
  setProps(snackbar);
  const [passwordValues, setPasswordValues] = React.useState({showPassword: false, showCpassword: false,});
  const initialValues = {
    email: '',
    phone: '',
    profile_attributes: {first_name: '', last_name: '', gender: '', dob: null},
    password: '',
    role_ids: [2]
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
    <Grid container>
      <Grid item lg={12} xs={12} align="center">
        <Paper className="signup-paper">
          <Typography variant="h5" className="mb-4 logo-text">
            EventBhutan
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
              <Form>
                <Field component={TextField} name="profile_attributes.first_name" label="First Name" type="text"
                       variant="outlined" required fullWidth/>
                <Field component={TextField} name="profile_attributes.last_name" label="Last Name" type="text"
                       variant="outlined" className="mt-3" fullWidth/>
                <Field component={TextField} name="phone" label="Phone" type="number" variant="outlined" fullWidth
                       required className="mt-3"/>
                <Field component={TextField} name="email" label="Email" type="email" variant="outlined" fullWidth
                       required className="mt-3"/>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <Field component={KeyboardDatePicker} name="profile_attributes.dob" label="Date of Birth"
                         inputVariant="outlined" fullWidth className="mt-3" variant="inline"
                         helperText={errors?.profile_attributes?.dob} format="dd/MM/yyyy" autoOk disableFuture
                         value={values?.profile_attributes?.dob} error={Boolean(errors?.profile_attributes?.dob)}
                         initialFocusedDate={new Date()}
                         onChange={date => {
                           formik.setFieldValue('profile_attributes.dob', date, false);
                         }}
                         KeyboardButtonProps={{'aria-label': 'change date'}}/>
                </MuiPickersUtilsProvider>
                <Autocomplete
                  id="combo-box-demo"
                  options={gender}
                  getOptionLabel={(option) => option.title}
                  onChange={(e, value) => formik.setFieldValue('profile_attributes.gender', value?.value)}
                  style={{width: '100%', marginTop: 15}}
                  renderInput={(params) => <Field component={TextField} name="profile_attributes.gender"
                                                  {...params} label="Gender" required variant="outlined"/>}
                />
                <Field component={TextField} name="password" label="Password" variant="outlined" required
                       type={passwordValues.showPassword ? 'text' : 'password'} fullWidth
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
                       className="mt-3"/>
                <Field component={TextField} name="confirmation_password" label="Confirm Password" required
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
                       className="mt-3"/>
                <Button variant="contained" className="signup-btn" type="submit">
                  SignUp
                </Button>
              </Form>
            )}
          </Formik>
          <Link to="/login" className="back-text">
            <Typography className="mt-3">
              Back to Login
            </Typography>
          </Link>
        </Paper>
      </Grid>
    </Grid>
  );
};
