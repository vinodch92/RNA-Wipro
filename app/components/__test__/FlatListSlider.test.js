import React from 'react';
import FlatListSlider from '../FlatListSlider';
import ImageCard from '../ImageCard';
import { data } from '../../../__fixture__/imagesSliderData';
import { render } from '@testing-library/react-native';
import { Dimensions } from 'react-native';

describe('FlatListSlider', () => {
  /* returns a component to render in flatlist */
  const renderItem = ({ item }) => {
    return (
      <ImageCard
        id={item.id}
        authorName={item.author}
        textNumLines={1}
        containerStyle={{
          marginHorizontal: 20,
          width: Math.round(Dimensions.get('screen').width) - 40,
        }}
      />
    );
  };

  const props = {
    data,
    renderItem: renderItem,
  };

  const dataLength = data.length;

  it('matches snapshot', () => {
    expect(render(<FlatListSlider />)).toMatchSnapshot();
    expect(render(<FlatListSlider {...props} dataLength={dataLength} />)).toMatchSnapshot();
  });
});
