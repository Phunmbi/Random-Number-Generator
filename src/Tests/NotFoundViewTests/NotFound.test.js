import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import NotFound from '../../Views/NotFoundView';

let wrapped;

beforeEach(() => {
  wrapped = mount (
    <MemoryRouter initialEntries={[{ key: 'testkey' }]}>
      <NotFound/>
    </MemoryRouter>
  );
});

it('should take screenshot successfully', () => {
  expect(wrapped).toMatchSnapshot();
});
