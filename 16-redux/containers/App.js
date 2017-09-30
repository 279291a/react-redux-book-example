import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Picker from './../components/Picker';
import Posts from './../components/Posts';
import { selectReddit, fetchPostsIfNeeded, invalidateReddit } from '../actions/';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.onRefresh = this.onRefresh.bind(this);
  }

  componentDidMount() {
    console.log('执行compnentDidMount');
    const { dispatch, selectedReddit } = this.props;
    dispatch(fetchPostsIfNeeded(selectedReddit));
  }

  componentWillReceiveProps() {
    console.log('执行componentWillReceiveProps');
  }

  onRefresh() {
    console.log('onrefresh');
  }

  handleChange() {
    console.log('handlechange');
  }

  render() {
    const { posts, selectedReddit, receiveAt } = this.props;

    return (
      <div>
        <Picker value={selectedReddit} handleChange={this.handleChange} options={['reactjs', 'frontend']} />
        <p>
          last updated at {receiveAt}
          <button onClick={this.onRefresh}>刷新</button>
        </p>
        <Posts posts={posts} />
      </div>
    );
  }
}

App.propTypes = {
  selectedReddit: PropTypes.string.isRequired,
  posts: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  receiveAt: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  const { selectedReddit, postsByReddit } = state;
  const {
    isFetching,
    receiveAt,
    items: posts,
  } = postsByReddit[selectedReddit] || {
    isFetching: true,
    items: [],
  };

  return {
    selectedReddit,
    posts,
    isFetching,
    receiveAt,
  };
}

export default connect(mapStateToProps)(App);
