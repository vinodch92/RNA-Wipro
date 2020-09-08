import React from 'react';
import FlatListSlider from '../FlatListSlider';
import { render } from '@testing-library/react-native';

describe('FlatListSlider', () => {
  it('matches snapshot', () => {
    expect(render(<FlatListSlider />)).toMatchSnapshot();
  });
});
