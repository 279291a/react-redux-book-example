import fetch from 'isomorphic-fetch';

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const SELECT_REDDIT = 'SELECT_REDDIT';
export const INVALIDATE_REDDIT = 'INVALIDATE_REDDIT';

export const selectReddit = reddit => ({
  type: SELECT_REDDIT,
  reddit,
});

const requestPosts = reddit => ({
  type: REQUEST_POSTS,
  reddit,
});

const receivePosts = (reddit, json) => ({
  type: RECEIVE_POSTS,
  reddit,
  posts: json.data.children.map(child => child.data.title),
  receiveAt: Date.now(),
});

export const invalidateReddit = reddit => ({
  type: INVALIDATE_REDDIT,
  reddit,
});

const fetchPosts = reddit => (dispatch) => {
  dispatch(requestPosts(reddit));
  return fetch(`https://www.reddit.com/r/${reddit}.json`)
    .then(response => response.json())
    .then(json => dispatch(receivePosts(reddit, json)));
};

const shouldFetchPosts = (state, reddit) => {
  console.log(state.postsByReddit);
  const { posts } = state.postsByReddit[reddit];
  if (!posts) {
    return true;
  }

  if (posts.isFetching) {
    return false;
  }

  return posts.didInvalidate;
};

export const fetchPostsIfNeeded = reddit => (getState, dispatch) => {
  if (shouldFetchPosts(getState, reddit)) {
    return dispatch(fetchPosts(reddit));
  }

  return null;
};
