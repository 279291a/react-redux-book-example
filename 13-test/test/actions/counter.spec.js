import expect from 'expect';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../actions';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('actions', () => {
  describe('counter', () => {
    it('increment 创建一个 加  的动作', () => {
      expect(actions.onIncrement()).toEqual({ type: actions.INCREMENT });
    });

    it('decrement 创建 - 的动作', () => {
      expect(actions.onDecrement()).toEqual({ type: actions.DECREMENT });
    });

    it('incrementIfOdd 在counter 是奇数时  创建 + 动作', () => {
      const expectedActions = [{ type: actions.INCREMENT }];
      const store = mockStore({ counter: 1 });
      store.dispatch(actions.incrementIfOdd());
      expect(store.getActions().toEqual(expectedActions));
    });


    it('incrementIfOdd在counter 是偶数时  不创建 + 动作', () => {
      const expectedActions = [];
      const store = mockStore({ counter: 2 });
      store.dispatch(actions.incrementIfOdd());
      expect(store.getActions()).toEqual(expectedActions);
    });

    it('incrementAsync 创建一个+ 的动作', (done) => {
      const expectedActions = [{ type: actions.INCREMENT }];
      const store = mockStore({ counter: 0 });
      store.dispatch(actions.incrementAsync);
      setTimeout(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      }, 1000);
    });
  });
});
