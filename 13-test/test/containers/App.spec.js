import expect from 'expect';
import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'redux';
import App from '../../containers/Connect';
import configureStore from '../../store/configureStore';

function setup(initialState) {
  const store = configureStore(initialState);
  const app = mount(
    <Provider>
      <App />
    </Provider>,
  );

  return {
    app,
    buttons: app.find('button'),
    p: app.find('p'),
  };
}

describe('containers', () => {
  describe('App', () => {
    it('should display initial count', () => {
      const { p } = setup();
      expect(p.text()).toMatch(/^clicked: 0 times/);
    });

    it('should display updated counter after increment button click', () => {
      const { buttons, p } = setup();
      buttons.at(0).simulate('click');
      expect(p.text()).toMatch(/^clicked: 1 times/);
    });

    it('should display updated counter after decrement button click', () => {
      const { buttons, p } = setup();
      buttons.at(1).simulate('click');
      expect(p.text()).toMatch(/^clicked: -1 times/);
    });

    it('shouldnt change if even and odd button clicked', () => {
      const { buttons, p } = setup();
      buttons.at(2).simulate('click');
      expect(p.text()).toMatch(/^clicked: 0 times/);
    });

    it('should change if even and odd button clicked', () => {
      const { buttons, p } = setup({ counter: 1 });
      buttons.at(2).simulate('click');
      expect(p.text()).toMatch(/^clicked: 2 times/);
    });
  });
});
