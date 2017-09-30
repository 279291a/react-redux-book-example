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

  componentWillReceiveProps(nextProps) {
    console.log('执行componentWillReceiveProps');
    if (nextProps.selectedReddit !== this.props.selectedReddit) {
      const { dispatch, selectedReddit } = nextProps;
      dispatch(fetchPostsIfNeeded(selectedReddit));
    }
  }

  onRefresh(e) {
    console.log('onrefresh');
    e.preventDefault();
    const { dispatch, selectedReddit } = this.props;
    dispatch(invalidateReddit(selectedReddit));
    dispatch(fetchPostsIfNeeded(selectedReddit));
  }

  handleChange(nextReddit) {
    this.props.dispatch(selectReddit(nextReddit));
  }

  render() {
    const { posts, selectedReddit, receiveAt, isFetching } = this.props;

    return (
      <div>
        <Picker value={selectedReddit} handleChange={this.handleChange} options={['reactjs', 'frontend']} />
        <p>
          last updated at {receiveAt}
          <button onClick={this.onRefresh}>刷新</button>
        </p>
        {isFetching ? <h3>loading...</h3> : <Posts posts={posts} />}
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
