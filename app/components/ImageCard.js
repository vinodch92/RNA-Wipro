import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import config from '../config';

/**
 * This functional component is ImageCard and useful to show images with author name for image slider.
 * @param {*} params : params consists of id of image, authorName, containerStyle object for customizing
 * main container, textStyle object for customizing authorName text style, imageWrapperStyle object for
 * customizing style of wrapper of image, textNumLines to specify the number of lines for Text element.
 */
const ImageCard = ({
  id = 0,
  authorName,
  containerStyle,
  textStyle,
  textNumLines,
  imageWrapperStyle,
}) => {
  const imageSource = `${config.imagesDataBaseUrl}/${config.imageWidth}/${config.imageHeight}?image=${id}`;

  return (
    <View style={[styles.container, containerStyle]}>
      {authorName ? (
        <Text style={[styles.text, textStyle]} numberOfLines={textNumLines}>
          {authorName}
        </Text>
      ) : null}
      <View style={[styles.imageWrapper, imageWrapperStyle]}>
        <Image style={styles.image} source={{ uri: imageSource }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: 'center' },
  text: {
    fontSize: 16,
    fontWeight: config.fontWeights.FONT_WEIGHT_MEDIUM,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  imageWrapper: {
    borderRadius: 5,
    shadowColor: config.colors.black,
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  image: {
    width: config.imageWidth,
    height: config.imageHeight,
    resizeMode: 'contain',
    borderRadius: 5,
    marginBottom: 30,
  },
});

export default ImageCard;
