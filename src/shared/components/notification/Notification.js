import React, {Fragment} from "react";
import Button from "@material-ui/core/Button";

let PROPS;
export const setProps = (props) => {
  PROPS = props;
};

export const Notify = (message, type) => {
  return PROPS.enqueueSnackbar(message, {
    variant: type,
    preventDuplicate: true,
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    autoHideDuration: 3000,
    action: errorAction
  });
};
// Error Action Button
const errorAction = (key) => (
  <Fragment>
    <Button onClick={() => {
      PROPS.closeSnackbar(key)
    }}>
      {'X'}
    </Button>
  </Fragment>
);
