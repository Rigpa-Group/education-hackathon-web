import React from 'react';
import {useHistory} from 'react-router-dom';
import './styles.scss';
import Button from '@material-ui/core/Button';

export default function ForbiddenPage() {
  const history = useHistory();

  return (
    <div className="forbidden">
      <Button className="btn-back" onClick={() => history.push('/')}>
        Go back home
      </Button>
    </div>
  );
};
