import React, { Component, PropTypes } from 'react';

const GITHUB_REPO = 'http://github.com/reactjs/redux';

export default class Explore extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.setInputValue(nextProps.value);
    }
  }

  getInputValue() {
    return this.refs.input.value;
  }

  setInputValue(val) {
    this.refs.input.value = val;
  }

  handleKeyUp(e) {
    if (e.code === '13') {
      this.handleGoClick();
    }
  }

  handleGoClick() {
    this.props.onChange(this.getInputValue());
  }

  render() {
    return (
      <div>
        <p>输入用户名或者repo，点击查询：</p>
        <input
          size="45"
          ref="input"
          defaultValue={this.props.value}
          onKeyUp={this.handleKeyUp}
        />
        <button onClick={this.handleGoClick}>
          查询
        </button>
        <p>
          code on <a href={GITHUB_REPO} target="_blank">github</a>
        </p>
      </div>
    );
  }
}

Explore.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
