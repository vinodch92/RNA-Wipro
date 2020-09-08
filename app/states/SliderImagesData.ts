import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ImagesObjectProps {
  /* as a string of image format */
  format?: string;
  /* as a number for maximum width of image */
  width?: number;
  /* as a number for maximum height of image */
  height?: number;
  /* as a string of image file name */
  filename?: string;
  /* as a number for id of data */
  id?: number;
  /* as a string of author name */
  author?: string;
  /* as a string of author url */
  author_url?: string;
  /* as a string of post url */
  post_url?: string;
}

interface SliderImagesDataProps {
  /* as an array of ImagesObjectProps type object*/
  sliderImagesData?: ImagesObjectProps[];
}

interface SliderImagesDataSelectorProps {
  /* as a type of SliderImagesDataProps for selector*/
  sliderImagesData?: SliderImagesDataProps;
}

const initialState: SliderImagesDataProps = {
  /* as an empty array by default */
  sliderImagesData: [],
};

/**
 * This function will save the sliderImagesData data to redux
 * @param state : state having SliderImagesDataProps
 * @param action : action called from app with SliderImagesDataProps
 */
const saveImagesData = (
  state: SliderImagesDataProps,
  action: PayloadAction<SliderImagesDataProps>
): void => {
  state.sliderImagesData = action.payload.sliderImagesData;
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
const selectSliderImagesData = ({ sliderImagesData }: SliderImagesDataProps): void => {
  console.log('sliderImagesData', sliderImagesData);
};

const sliderImagesReducer = SliderImagesSlice.reducer;

export { sliderImagesReducer, saveSliderImagesData, selectSliderImagesData };
