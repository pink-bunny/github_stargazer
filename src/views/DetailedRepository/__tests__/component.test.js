import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import DetailedRepository from '../component';

const mockGoBack = jest.fn();
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    goBack: mockGoBack,
  }),
}));

describe('DetailedRepository component.', () => {
  const projectName = 'kenwheeler/slick';
  const props = {
    fullData: projectName,
    stargazersCount: 26373,
    watchersCount: 26373,
    forksCount: 5522,
    languages: {
      CSS: 17372,
      HTML: 9449,
      JavaScript: 89981,
    },
  };

  it('matches snapshot', () => {
    const { toJSON } = render(<DetailedRepository {...props} />);

    expect(toJSON()).toMatchSnapshot();
  });

  it('Header', () => {
    const { queryByTestId } = render(<DetailedRepository {...props} />);

    fireEvent.press(queryByTestId('ctaGoBack'));
    expect(mockGoBack).toHaveBeenCalledTimes(1);

    expect(queryByTestId('headerTitle')).toHaveTextContent(projectName);
  });

  it('Content', () => {
    const { queryByTestId, getByText } = render(<DetailedRepository {...props} />);

    expect(queryByTestId('detailedRepoStatsTitle')).toHaveTextContent('Stats');
    expect(queryByTestId('detailedRepoStatsList')).toContainElement(getByText(/Watchers:\s\d+/i));
    expect(queryByTestId('detailedRepoStatsList')).toContainElement(getByText(/Stars:\s\d+/i));
    expect(queryByTestId('detailedRepoStatsList')).toContainElement(getByText(/Forks:\s\d+/i));

    expect(queryByTestId('detailedRepoLangTitle')).toHaveTextContent('Languages');
    expect(queryByTestId('detailedRepoLangList')).toContainElement(getByText(/CSS:\s\d+\.?\d?%/i));
    expect(queryByTestId('detailedRepoLangList')).toContainElement(getByText(/HTML:\s\d+\.?\d?%/i));
    expect(queryByTestId('detailedRepoLangList')).toContainElement(getByText(/JavaScript:\s\d+\.?\d?%/i));
  });
});
