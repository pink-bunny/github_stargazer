import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import Repositories from '../component';

const mockNavigate = jest.fn();
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: mockNavigate,
  }),
}));

describe('Repositories component.', () => {
  it('Opening Add repository screen', () => {
    const { queryByTestId } = render(<Repositories />);

    fireEvent.press(queryByTestId('ctaAddRepository'));
    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith('AddRepository');
  });

  it('Empty screen', () => {
    const { queryByTestId, toJSON } = render(<Repositories />);

    expect(queryByTestId('emptyView')).toBeEnabled();
    expect(queryByTestId('emptyViewText')).toHaveTextContent('No repositories added');
    expect(toJSON()).toMatchSnapshot();

    expect(queryByTestId('repositories')).toBeNull();
  });

  it('Repositories screen', () => {
    const props = {
      repositories: [{ id: 0 }, { id: 1 }],
    };
    const { queryAllByTestId, toJSON } = render(<Repositories {...props} />);

    expect(queryAllByTestId('repositoryItem')).toHaveLength(2);
    expect(toJSON()).toMatchSnapshot();
  });
});

