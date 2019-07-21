import React from 'react';
import App from '../../Views/AppView/App';

let wrapped;

beforeEach(() => {
  wrapped = mount(<App />);
});

it('should take screenshot successfully', () => {
  expect(wrapped).toMatchSnapshot();
});
