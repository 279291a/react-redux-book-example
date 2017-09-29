import React, { Component, PropTypes } from 'react';

import Picker from './../components/Picker';
import Posts from './../components/Posts';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.onRefresh = this.onRefresh.bind(this);
  }

  componentDidMount() {
    console.log('执行compnentDidMount');
  }

  componentWillReceiveProps() {
    console.log('执行componentWillReceiveProps');
  }

  handleChange() {
    console.log('handlechange');
  }

  onRefresh() {
    console.log('onrefresh');
  }
  render() {
    const { posts, value, receiveAt, options } = this.props;

    return (
      <div>
        <Picker value={value} handleChange={this.handleChange} options={options} />
        <p>
          last updated at {receiveAt}
          <button onClick={this.onRefresh}>刷新</button>
        </p>
        <Posts posts={posts} />
      </div>
    );
  }
}

export default App;
