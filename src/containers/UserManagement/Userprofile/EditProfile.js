import React, {useContext, useEffect, useState} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import {Field, Form, Formik} from 'formik';
import {useSnackbar} from 'notistack';
import Grid from '@material-ui/core/Grid';
import {TextField} from 'formik-material-ui';
import Button from '@material-ui/core/Button';
import {DispatchContext} from '../../../store';
import {Notify, setProps} from '../../../shared/components/notification/Notification';
import {usersApi} from '../../../services/UserServices';

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  }
});
const DialogTitle = withStyles(styles)(props => {
  const {children, classes, onClose} = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon/>
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1)
  }
}))(MuiDialogActions);


function EditProfile(props) {
  const {handleClose, open, editUser} = props;
  const dispatch = useContext(DispatchContext);
  const [edit, setEdit] = useState();
  const snackbar = useSnackbar();
  const [userProfile] = useState({
    ...editUser?.user
  });

  useEffect(() => {
    setProps(snackbar);
  }, []);

  const userEdit = async (values) => {
    await usersApi('put', {user: {...values}}).then(res => {
      const storage = localStorage;
      storage.setItem('user', JSON.stringify(res));
      Notify('User updated successfully', 'success');
      handleClose();
    }).catch(err => {
      Notify(err, 'error');
    });
  };

  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Edit Profile
        </DialogTitle>
        <DialogContent dividers style={{padding: 50}}>
          < Formik
            onSubmit={userEdit}
            initialValues={userProfile}
            validateOnBlur={true}
          >
            {({
                isSubmitting, touched,
                errors, values,
                ...formik
              }) => (
              <Form autoComplete="off" noValidate>
                <Grid container spacing={1}>
                  <Grid item lg={6} xs={12}>
                    <Field component={TextField} name="profile_attributes.first_name" margin="dense" label="First Name"
                           type="text" variant="outlined" required fullWidth/>
                  </Grid>
                  <Grid item lg={6} xs={12}>
                    <Field component={TextField} name="profile_attributes.last_name" margin="dense" label="Last Name"
                           type="text" variant="outlined" fullWidth/>
                  </Grid>
                  <Grid item lg={6} xs={12}>
                    <Field component={TextField} name="phone" margin="dense" label="Phone" type="number"
                           variant="outlined" fullWidth required/>
                  </Grid>
                  <Grid item lg={6} xs={12}>
                    <Field component={TextField} name="email" margin="dense" label="Email" type="email"
                           variant="outlined" fullWidth required/>
                  </Grid>
                </Grid>
                <DialogActions>
                  <Button type="submit" color="primary" variant="contained">
                    SAVE
                  </Button>
                </DialogActions>
              </Form>
            )}
          </Formik>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default EditProfile;
