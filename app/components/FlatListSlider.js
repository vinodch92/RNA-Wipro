import React, { useCallback, useEffect, useRef } from 'react';
import { StyleSheet, FlatList, Dimensions, LayoutAnimation } from 'react-native';

/**
 * This functional component is FlatListSlider and useful to show images with author name on sliding.
 * @param {*} params : params consists of contentContainerStyle object for customizing style of flatlist
 * component, dataLength and ...props are all props of flatlist.
 */
const FlatListSlider = ({ contentContainerStyle, dataLength, ...props }) => {
  /* useRef for creating a reference of scrollview */
  let flatListRef = useRef(null);

  /* useRef for creating a reference of sliderTimer */
  let sliderTimer = useRef(null);

  /* useEffect hook to start the auto play of slides */
  useEffect(() => {
    startAutoPlay();
  }, [startAutoPlay]);

  /**
   * This function is responsible to change the current index of slider array in to local state
   */
  const changeSliderListIndex = useCallback(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeIn);

    let slideIndex = 1;
    if (flatListRef?.current?.index && flatListRef.current.index < dataLength - 1) {
      slideIndex = flatListRef.current.index + 1;
    }
    flatListRef.current.index = slideIndex;

    flatListRef.current.scrollToIndex({
      index: slideIndex,
      animated: true,
    });
  }, [dataLength]);

  /**
   * This function is responsible to set the timeInterval for starting the autoplay of slider
   */
  const startAutoPlay = useCallback(() => {
    if (dataLength > 0) {
      sliderTimer.current = setInterval(changeSliderListIndex, 3000);
    }
  }, [changeSliderListIndex, dataLength]);

  /* keyExtractor for flatlist */
  const keyExtractor = (item, index) => `${item.id}_${index}`;

  return (
    <FlatList
      ref={flatListRef}
      pagingEnabled={true}
      snapToInterval={Math.round(Dimensions.get('screen').width)}
      decelerationRate="fast"
      bounces={false}
      horizontal
      getItemLayout={(data, index) => ({
        length: Math.round(Dimensions.get('screen').width),
        offset: Math.round(Dimensions.get('screen').width) * index,
        index,
      })}
      windowSize={1}
      initialNumToRender={1}
      maxToRenderPerBatch={1}
      removeClippedSubviews={true}
      showsHorizontalScrollIndicator={false}
      {...props}
      contentContainerStyle={[styles.contentContainer, contentContainerStyle]}
      keyExtractor={keyExtractor}
    />
  );
};

const styles = StyleSheet.create({
  contentContainer: { alignItems: 'center' },
});

export default FlatListSlider;
