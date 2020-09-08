import { combineReducers } from '@reduxjs/toolkit';
import * as SliderImagesData from './SliderImagesData';

const rootReducer = combineReducers({
  sliderImagesData: SliderImagesData.sliderImagesReducer,
});

export { rootReducer, SliderImagesData };
