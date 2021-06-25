import React, {useContext, useEffect} from 'react';
import {Grid, Paper, Typography} from '@material-ui/core';
import '../../../assets/stylesheets/_utility.scss';
import './style.scss';
import {TextField} from 'formik-material-ui';
import Button from '@material-ui/core/Button';
import {Field, Form, Formik} from 'formik';
import {Link, useHistory} from 'react-router-dom';
import {useSnackbar} from 'notistack';
import {Notify, setProps} from '../../../shared/components/notification/Notification';
import {login} from '../../../services/AuthServices';
import {DispatchContext, StateContext} from '../../../store';
import {signInValidation} from '../AuthValidationSchema';

export const Login = () => {
  const history = useHistory();
  const snackbar = useSnackbar();
  const dispatch = useContext(DispatchContext);
  // const {user} = useContext(StateContext);
  // const dataList = user?.data?.relationships?.roles?.data;
  // const roles = fetchIncludedObjectList(dataList, user?.included);

  useEffect(() => {
    setProps(snackbar);
    // if (user?.authenticated) {
    //   if(roles?.attributes?.name === 'Admin'){
    //     history.push('/dashboard');
    //   }else {
    //     history.push('/');
    //   }
    // }
  }, []);

  const onLogin = (values, {setSubmitting}) => {
    login({user: {...values}}, dispatch).then(response => {
      setSubmitting(false);
      // if(roles?.attributes?.name === 'Admin') {
      //   history.push('/dashboard');
      // }else{
      //   history.push('/');
      // }
      // Notify('Login successfully', 'success');
    }).catch(err => {
      setSubmitting(false);
      // Notify(err, 'error');
    });
  };

  return (
    <div className="auth">
      <Grid container>
        <Grid item lg={12} xs={12} align="center">
          <Paper className="paper">
            <Typography variant="h5" color={'primary'} className="mb-5">
              EduTech
            </Typography>
            <Formik initialValues={{login: '', password: ''}} onSubmit={onLogin} validationSchema={signInValidation}>
              {({
                  values,
                  error,
                  isSubmitting,
                  dirty,
                  handleBlur,
                  handleChange,
                  ...formik
                }) => (
                <Form>
                  <Field component={TextField} name="login" label="Email Address/Username" type="email"
                         variant="outlined" fullWidth required style={{marginTop: 20}}/>
                  <Field component={TextField} name="password" label="Password" variant="outlined" required
                         fullWidth type="password" style={{marginTop: 20}}/>
                  <Button variant="contained" color="primary" className="login-btn" type="submit" disabled={!dirty || isSubmitting}>
                    Login
                  </Button>
                  <Button variant="contained" className="btn-redirect" onClick={() => history.push('/sign-up')}>
                    Create an Account
                  </Button>
                </Form>
              )}
            </Formik>
            <Link to="/" className="back-text">
              <Typography color={'primary'} style={{marginTop: 30, textDecoration: 'none'}}>
                Back to Home
              </Typography>
            </Link>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
