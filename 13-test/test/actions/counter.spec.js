import expect from 'expect';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../actions';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
describe('actions', () => {
  describe('counter'), () => {
    it('increment should create increment action', () => {
      const expectedActions = [{ type: actions.INCREMENT }];
      const store = mockStore({ counter: 1 });
      store.dispatch(actions.incrementIfOdd());
      expect(store.getActions().toEqual(expectedActions));
    });

    it('decrement should create decrement action', () => {
      expect(actions.DECREMENT()).toEqual({ type: actions.DECREMENT });
    });
  };
});
