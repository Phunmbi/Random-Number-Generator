import React from 'react';
import IndexView from '../../Views/IndexView';

const props = {
  history: {
    push: jest.fn()
  }
};

let wrapped;

beforeEach(() => {
  wrapped = mount (<IndexView {...props} />)
});

it('should take screenshot successfully', () => {
  expect(wrapped).toMatchSnapshot();
});

it('should simulate handle submit', () => {
  wrapped.find('.generator').find('form').simulate('submit');

  const inst = wrapped.instance();

  inst.handleSubmit = jest.fn();

  wrapped.find('.generator').find('form').simulate('submit');
  expect(inst.handleSubmit).toHaveBeenCalled();
});

it('should simulate handle change', () => {
  wrapped.find('.generator').find('form').find('.generator-input') .simulate('change');

  const inst = wrapped.instance();
  inst.handleChange = jest.fn();

  wrapped.find('.generator').find('form').find('.generator-input') .simulate('change');
  expect(inst.handleChange).toHaveBeenCalled();
});
