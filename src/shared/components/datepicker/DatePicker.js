import React from 'react';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {KeyboardDatePicker, KeyboardDateTimePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';
import Grid from '@material-ui/core/Grid';

export const DatePickerField = ({field, form, ...other}) => {
  const currentError = form.errors[field.name];
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          variant="inline"
          name={field.name}
          value={field.value}
          format="dd/MM/yyyy"
          inputVariant="outlined"
          helperText={currentError}
          error={Boolean(currentError)}
          onError={error => {// handle as a side effect
            if (error !== currentError) {
              form.setFieldError(field.name, error);
            }
          }}
          onChange={date => {
            form.setFieldValue(field.name, date, false);
          }}
          KeyboardButtonProps={{
            'aria-label': 'change date'
          }}
          {...other}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
};

export const DateTimePickerField = ({field, form, ...other}) => {
  const currentError = form.errors[field.name];
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDateTimePicker
        name={field.name}
        variant="inline"
        value={field.value}
        inputVariant="outlined"
        format="dd/MM/yyyy hh:mm a"
        helperText={currentError}
        error={Boolean(currentError)}
        onError={error => {// handle as a side effect
          if (error !== currentError) {
            form.setFieldError(field.name, error);
          }
        }}
        onChange={date => {
          form.setFieldValue(field.name, date, false);
        }}
        KeyboardButtonProps={{
          'aria-label': 'change date'
        }}
        {...other}
      />
    </MuiPickersUtilsProvider>
  );
};

