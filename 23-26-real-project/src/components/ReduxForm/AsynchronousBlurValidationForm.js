/* eslint-disable react/prop-types */

import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { FormGroup, ControlLabel, FormControl, Button, ButtonToolbar } from 'react-bootstrap';

const validate = values => {
  const errors = {};
  if (!values.username) {
    errors.username = 'Required';
  }

  if (!values.password) {
    errors.password = 'Required';
  }

  return errors;
};

const asyncValidate = (values/* , dispatch*/) =>
  new Promise((resolve, reject) => {
    setTimeout(function () {
      if (['john', 'paul'].includes(values.username)) {
        reject({ username: 'That username is token' });
      } else {
        resolve();
      }
    }, 1000);
  });

const renderField = ({ input, label, type, meta: { asyncValidating, touched, error } }) => (
  <FormGroup controlId={input.name} validationState={error && touched ? 'error' : null}>
    <ControlLabel>{label}</ControlLabel>
    <FormControl type={type} placeholder={label} {...input} />
    <FormControl.Feedback>
      <span>
        {asyncValidating && <i className="fa fa-cog fa-spin fa-fw" />}
      </span>
    </FormControl.Feedback>
    {touched && error &&
    (<div className="text-danger">{error}</div>)}
  </FormGroup>
);

const AsyncValidationForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field name="username" type="text" component={renderField} label="Username" />
      <Field name="password" type="password" component={renderField} label="Password" />
      <ButtonToolbar>
        <Button bsStyle="primary" type="submit" disabled={submitting}>
          {submitting ? <i /> : <i />} Sign Up
        </Button>
        <Button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear values
        </Button>
      </ButtonToolbar>
    </form>
  );
};

export default reduxForm({
  form: 'asyncValidation',
  validate,
  asyncValidate,
  asyncBlurFields: ['username'],
})(AsyncValidationForm);
