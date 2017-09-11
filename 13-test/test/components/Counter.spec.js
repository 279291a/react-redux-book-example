
import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import Counter from '../../components/Counter';

// setup 函数用于被测试的组件、action 函数、组件中的四个按钮和p元素
function setup(counter = 0) {
  const actions = {
    increment: expect.createSpy(),
    incrementIfOdd: expect.createSpy(),
    incrementAsync: expect.createSpy(),
    decrement: expect.createSpy(),
  };
  const component = shallow(
    <Counter counter={counter} {...actions} />,
  );

  return {
    component,
    actions,
    buttons: component.find('button'),
    p: component.find('p'),
  };
}

describe('components', () => {
  describe('Counter', () => {
    it('should display counter', () => {
      const { p } = setup();
      expect(p.text()).toMatch(/^clicked: 0 times/);
    });

    it('first button should increment', () => {
      const { buttons, actions } = setup();
      buttons.at(0).simulate('click');
      expect(actions.increment).toHaveBeenCalled();
    });

    it('second button should decrement', () => {
      const { buttons, actions } = setup();
      buttons.at(1).simulate('click');
      expect(actions.decrement).toHaveBeenCalled();
    });

    it('third button should call incrementIfOdd', () => {
      const { buttons, actions } = setup(43);
      buttons.at(2).simulate('click');
      expect(actions.incrementIfOdd).toHaveBeenCalled();
    });

    it('fourth button should call incrementAsync', () => {
      const { buttons, actions } = setup();
      buttons.at(3).simulate('click');
      expect(actions.incrementAsync).toHaveBeenCalled();
    });
  });
});
