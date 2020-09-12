import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useCallback } from 'react';
import { SliderImagesData } from '../states';
import { SafeAreaView, StyleSheet, Dimensions } from 'react-native';
import { FlatListSlider, ImageCard } from '../components';
import config from '../config';

/**
 * This is a ImagesSlider functional component screen for showing Images slider using custom components like
 * ImagesCard and FlatListSlider.
 */
const ImagesSlider = () => {
  /* useDispatch hook to dispatch an action */
  const dispatch = useDispatch();

  /* useSelector hook to select data from sliderImagesData reducer */
  const imagesData = useSelector(SliderImagesData.selectSliderImagesData);

  /* This useEffect hook is responsible for calling getSliderImagesList function to dispatch an action to
   * get the slider images from api
   */
  useEffect(() => {
    getSliderImagesList();
  }, [getSliderImagesList]);

  /**
   * This function is responsible for dispatching action for hitting slider images list api.
   */
  const getSliderImagesList = useCallback(() => {
    dispatch({ type: 'SLIDER_IMAGES_LIST', payload: '' });
  }, [dispatch]);

  /**
   * This function is responsible to render an item to flatlist
   * @param {*} item : as an object
   */
  const renderItem = ({ item }) => {
    return (
      <ImageCard
        id={item.id}
        authorName={item.author}
        textNumLines={1}
        containerStyle={styles.imageCardContainer}
        textStyle={styles.imageCardText}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {imagesData && imagesData.length > 0 ? (
        <FlatListSlider dataLength={imagesData.length} data={imagesData} renderItem={renderItem} />
      ) : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: config.colors.appTheme },
  imageCardContainer: {
    marginHorizontal: 20,
    width: Math.round(Dimensions.get('screen').width) - 40,
  },
  imageCardText: { color: config.colors.white },
});

export default ImagesSlider;
