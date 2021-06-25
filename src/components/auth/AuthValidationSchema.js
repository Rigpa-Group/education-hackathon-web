import * as Yup from 'yup';
import {messages} from '../../shared/functions/ValidationConstants';

export const signUpValidation = Yup.object().shape({
  email: Yup.string().email(messages.email).required(messages.required),
  phone: Yup.number().required(messages.required),
  password: Yup.string().required(messages.required),
  profile_attributes: Yup.object().shape({
    first_name: Yup.string().required(messages.required),
    gender: Yup.string().required(messages.required),
  }),
  confirmation_password: Yup.string().required(messages.required).when('password', {
    is: val => (!!(val && val.length > 0)),
    then: Yup.string().oneOf(
      [Yup.ref('password')],
      'Password Mismatch'
    )
  }),
});

export const signInValidation = Yup.object().shape({
  login: Yup.string().required(messages.required),
  password: Yup.string().required(messages.required),
});
