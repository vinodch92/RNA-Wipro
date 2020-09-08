import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * This functional component is ImageCard and useful to show images with author name for image slider.
 * @param {*} params : params consists of id of image, authorName, containerStyle object for customizing
 * main container, textStyle object for customizing authorName text style, imageWrapperStyle object for
 * customizing style of wrapper of image, textNumLines to specify the number of lines for Text element.
 */
const FlatListSlider = () => {
  return (
    <View style={[styles.container]}>
      <Text>FlatListSlider</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: 'center' },
});

export default FlatListSlider;
