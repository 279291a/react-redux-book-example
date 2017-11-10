/* eslint-disable react/prop-types */
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {
  FormGroup,
  ControlLabel,
  FormControl,
  Button,
  ButtonToolbar,
  Radio,
  Checkbox,
} from 'react-bootstrap';

const renderInput = ({ input, label, type }) => (
  <FormGroup controlId={input.name}>
    <ControlLabel>{label}</ControlLabel>
    <FormControl {...input} placeholder={label} type={type} />
  </FormGroup>
);

const renderRadio = ({ input, label }) => (
  <Radio inline {...input}>{label}</Radio>
);

const renderCheckBox = ({ input, label }) => (
  <FormGroup controlId={input.name}>
    <Checkbox inline {...input}>{label}</Checkbox>
  </FormGroup>
);

const renderTextarea = ({ input, label }) => (
  <FormGroup>
    <ControlLabel>{label}</ControlLabel>
    <FormControl
      componentClass="textarea"
      placeholder={label}
      {...input}
    />
  </FormGroup>
);

const renderSelect = ({ input, label, children }) => (
  <FormGroup controlId={input.name}>
    <ControlLabel>{label}</ControlLabel>
    <FormControl
      componentClass="select" {...input}
    >
      {children}
    </FormControl>
  </FormGroup>
);

const SimpleForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field name="firstName" component={renderInput} type="text" label="First Name" />
      <Field name="lastName" component={renderInput} type="text" label="Second Name" />
      <Field name="email" component={renderInput} type="email" label="Email" />

      <FormGroup>
        <Field name="sex" component={renderRadio} type="radio" value="male" label="Male" />
        <Field name="sex" component={renderRadio} type="radio" value="femae" label="Male" />
      </FormGroup>

      <Field name="favoriteColor" component={renderSelect} type="select" label="Favorite color">
        <option value="red">red</option>
        <option value="green">green</option>
        <option value="black">black</option>
      </Field>

      <Field name="employed" component={renderCheckBox} type="checkbox" label="Employed" />
      <Field name="notes" component={renderTextarea} label="Notes" type="textarea" />

      <ButtonToolbar>
        <Button
          type="submit"
          bsStyle={renderCheckBox}
          disabled={pristine || submitting}
        >
          {submitting ? <i /> : <i />}submit
        </Button>

        <Button
          disabled={pristine || submitting}
          onClick={reset}
        >
          {reset}
        </Button>
      </ButtonToolbar>
    </form>
  );
};

export default reduxForm({
  form: 'simple',
})(SimpleForm);
