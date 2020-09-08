import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  /* as an empty array by default */
  sliderImagesData: [],
};

/**
 * This function will save the sliderImagesData data to redux
 * @param state : state having SliderImagesDataProps
 * @param action : action called from app with SliderImagesDataProps
 */
const saveImagesData = (state, action) => {
  state.sliderImagesData = action?.payload?.sliderImagesData ?? state.sliderImagesData;
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
 * @param sliderImagesData : sliderImagesData consists of UserInfoSelectorProps like userName
 */
const selectSliderImagesData = ({ sliderImagesData }) => sliderImagesData?.sliderImagesData ?? [];

const sliderImagesReducer = SliderImagesSlice.reducer;

export { sliderImagesReducer, saveSliderImagesData, selectSliderImagesData };
