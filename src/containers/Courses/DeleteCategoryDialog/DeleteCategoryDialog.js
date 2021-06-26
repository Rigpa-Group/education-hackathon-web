import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import TextField from '@material-ui/core/TextField';
import DialogContentText from '@material-ui/core/DialogContentText';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function DeleteCategoryDialog({open, handleAction}) {

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={(e) => handleAction(false, e)}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title"
                     style={{color: '#e21142', textAlign: 'center'}}>{'Delete this Category?'}</DialogTitle>
        <DialogContent fullWidth>
          <DialogContentText id="alert-dialog-slide-description">
            All your related data will be erased. Are you sure you want to delete?
          </DialogContentText>
          <Button style={{textTransform: 'capitalize', marginRight: 10, width: 100, marginTop: 30}}
                  onClick={(e) => handleAction(false, e)} variant="contained">Cancel
          </Button>
          <Button onClick={(e) => handleAction(true, e)} style={{textTransform: 'capitalize', width: 120, marginTop: 30}}
                  variant="contained" color="secondary">Delete
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
