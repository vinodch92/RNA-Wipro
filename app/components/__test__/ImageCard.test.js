import React from 'react';
import ImageCard from '../ImageCard';
import { render } from '@testing-library/react-native';
import config from '../../config';

describe('ImageCard', () => {
  const props = {
    containerStyle: { backgroundColor: config.colors.appTheme },
    textStyle: { color: config.colors.white },
    textNumLines: 1,
    imageWrapperStyle: { shadowColor: config.colors.black },
  };

  const authorName = 'Paul Jarvis';
  const id = 10;

  it('matches snapshot', () => {
    expect(render(<ImageCard {...props} />)).toMatchSnapshot();
    expect(render(<ImageCard {...props} authorName={authorName} id={id} />)).toMatchSnapshot();
  });

  it('renders the author name', () => {
    const { queryByTestId } = render(<ImageCard {...props} authorName={authorName} id={id} />);
    expect(queryByTestId(config.accessibilityStrings.AUTHOR_NAME_TEXT)).toBeTruthy();
  });

  it('does not render the author name', () => {
    const { queryByTestId } = render(<ImageCard {...props} />);
    expect(queryByTestId(config.accessibilityStrings.AUTHOR_NAME_TEXT)).toBeFalsy();
  });
});
