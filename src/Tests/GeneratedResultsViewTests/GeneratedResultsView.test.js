import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import GeneratedResultsView from '../../Views/GeneratedResultsView';

const props = {
  location: {
    search: '?10',
  },
  history: {
    push: jest.fn(),
  }
};

let wrapped;

beforeEach(() => {
  wrapped = mount (
    <MemoryRouter initialEntries={[{ key: 'testkey' }]}>
      <GeneratedResultsView {...props} />
    </MemoryRouter>
  );
});

it('should take screenshot successfully', () => {
  expect(wrapped).toMatchSnapshot();
});

it('should simulate sort by ascending', () => {
  wrapped.find('.results-sort__ascending').simulate('click');
  expect(wrapped.find('GeneratedResultsView').exists()).toEqual(false);
});

it('should simulate sort by descending', () => {
  wrapped.find('.results-sort__descending').simulate('click');
  expect(wrapped.find('GeneratedResultsView').exists()).toEqual(false);
});

it('should simulate home redirect', () => {
  wrapped.find('.results-actions').find('.results-actions__redirect').simulate('click');
  expect(wrapped.find('GeneratedResultsView').exists()).toEqual(false);
});
