import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  /* as an empty array by default */
  sliderImagesData: [],
};

/**
 * This function is responsible to shuffle the data in array to show a different image each time app
 * refreshed
 * @param {*} arrData : array of images data
 */
const shuffleImagesDataRadomly = (arrData) => {
  let indexI, indexJ, temp;
  for (indexI = arrData.length - 1; indexI > 0; indexI--) {
    indexJ = Math.floor(Math.random() * (indexI + 1));
    temp = arrData[indexI];
    arrData[indexI] = arrData[indexJ];
    arrData[indexJ] = temp;
  }
  return arrData;
};

/**
 * This function will save the sliderImagesData data to redux
 * @param state : state having previous sliderImagesData
 * @param action : action called from app with next sliderImagesData
 */
const saveImagesData = (state, action) => {
  let data = action?.payload?.sliderImagesData ?? state.sliderImagesData;
  state.sliderImagesData = data.length > 0 ? shuffleImagesDataRadomly(data) : data;
};

// Create slice having sliceName, reducer and initialState
const SliderImagesSlice = createSlice({
  name: 'sliderImages',
  initialState: initialState,
  reducers: {
    saveSliderImagesData: saveImagesData,
  },
});

// Get actions from created SliderImagesSlice
const { saveSliderImagesData } = SliderImagesSlice.actions;

/**
 * Selector for selecting data from redux
 * @param sliderImagesData : sliderImagesData contains the data of images
 */
const selectSliderImagesData = ({ sliderImagesData }) => sliderImagesData?.sliderImagesData ?? [];

const sliderImagesReducer = SliderImagesSlice.reducer;

export { sliderImagesReducer, saveSliderImagesData, selectSliderImagesData };
