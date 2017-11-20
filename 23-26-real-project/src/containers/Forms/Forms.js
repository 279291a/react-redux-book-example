import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { Grid, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import serialize from 'serialize-javascript';
import * as ActionCreators from '../../actions/forms';
// import AsynchronousBlurValidationForm from "../../components/ReduxForm/AsynchronousBlurValidationForm";
// import SimpleForm from "../../components/ReduxForm/SimpleForm";
// import SynchronousValidationsForm from "../../components/ReduxForm/SynchronousValidationsForm";
import { AsynchronousBlurValidationForm, SimpleForm, SynchronousValidationsForm } from '../../components';

// eslint-disable-next-line
@connect(//eslint-disable-line
  state => ({
    form: state.async.forms,
    formState: state.async.loadState && state.async.loadState.forms
  }),
  ActionCreators
)

class Forms extends Component {
  static propTypes = {
    forms: PropTypes.any,
    formState: PropTypes.any,
    post: PropTypes.func.isRequired
  };

  render() {
    const styles = require('./Form.scss');
    const { form, formState, post } = this.props;

    return (
      <div className={styles.forms}>
        <Helmet title="表单" />
        <Grid>
          <Row>
            <Col xs={12} md={4}>
              <h4>SimpleForm</h4>
              <SimpleForm onSubmit={post} />
            </Col>
            <Col xs={12} md={8}>
              <Row>
                <Col xs={12} md={6}>
                  <h4>SynchronousValidattionForm</h4>
                  <SynchronousValidationsForm onSubmit={post} />
                </Col>

                <Col xs={12} md={6}>
                  <h4>AsynchronousBlurValidationForm</h4>
                  <AsynchronousBlurValidationForm onSubmit={post} />
                </Col>
              </Row>

              <br /><br />

              <Row className="container-fluid">
                表单提交后的响应结果:
                <pre>{serialize(form, { space: 2 })}</pre>
                <pre>{serialize(formState, { space: 2 })}</pre>
              </Row>
            </Col>
          </Row>
        </Grid>
      </div >
    )
  }
}

export default Forms;