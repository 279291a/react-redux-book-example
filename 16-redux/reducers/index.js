import { combineReducers } from 'redux';
import { SELECT_REDDIT, REQUEST_POSTS, RECEIVE_POSTS, INVALIDATE_REDDIT } from '../actions/';

const initialState = {
  isFetching: false,
  didInvalidate: false,
  items: [],
};

const selectedReddit = (state = 'reatjs', action) => {
  switch (action.type) {
    case SELECT_REDDIT:
      return action.reddit;
    default :
      return state;
  }
};

const posts = (state = initialState, action) => {
  switch (action.type) {
    case INVALIDATE_REDDIT:
      return Object.assign({}, state, { didInvalidate: true });
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false,
      });
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        receivetAt: action.receivetAt,
        items: action.posts,
      });
    default:
      return state;
  }
};

const postsByReddit = (state = {}, action) => {
  switch (action.type) {
    case INVALIDATE_REDDIT:
    case REQUEST_POSTS:
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        [action.reddit]: posts(state[action.reddit], action),
      });
    default:
      return state;
  }
};

const rootReducer = combineReducers({ selectedReddit, postsByReddit });

export default rootReducer;
