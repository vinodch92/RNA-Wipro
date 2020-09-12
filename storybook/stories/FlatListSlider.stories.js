import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { FlatListSlider, ImageCard } from '../../app/components';
import { data } from '../../__fixture__/imagesSliderData';
import { Dimensions, StyleSheet } from 'react-native';

/* returns a component to render in flatlist */
const renderItem = ({ item }) => {
  return (
    <ImageCard
      id={item.id}
      authorName={item.author}
      textNumLines={1}
      containerStyle={styles.imageCardContainer}
    />
  );
};

/* Story for FlatListSlider component to demonstrate the use of FlatListSlider component*/
storiesOf('FlatListSlider', module)
  .add('Default', () => <FlatListSlider />)
  .add('With horizontal scroll', () => <FlatListSlider data={data} renderItem={renderItem} />)
  .add('With vertical scroll', () => (
    <FlatListSlider data={data} renderItem={renderItem} horizontal={false} />
  ));

const styles = StyleSheet.create({
  imageCardContainer: {
    marginHorizontal: 20,
    width: Math.round(Dimensions.get('screen').width) - 40,
  },
});
