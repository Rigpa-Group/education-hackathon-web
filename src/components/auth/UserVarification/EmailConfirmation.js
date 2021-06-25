import React, {useContext, useEffect} from 'react';
import {useSnackbar} from 'notistack';
import {useHistory, useLocation} from 'react-router-dom';
import {Notify, setProps} from '../../../shared/components/notification/Notification';
import {emailConfirmation} from '../../../services/AuthServices';
import {DispatchContext} from '../../../store';

export default function EmailConfirmation() {
  const history = useHistory();
  const snackbar = useSnackbar();
  const dispatch = useContext(DispatchContext);
  const location = useLocation();
  const params = new URLSearchParams(location?.search);
  const token = params.get('confirmation_token');

  useEffect(() => {
    setProps(snackbar);
    emailConfirmation({confirmation_token: token}, dispatch).then(response => {
      history.push('/dashboard');
      Notify('User confirmed successfully', 'success');
    }).catch(err => {
      history.push('/login');
      Notify(err, 'error');
    });
  }, []);

  return (
    <React.Fragment>

    </React.Fragment>
  );
}
