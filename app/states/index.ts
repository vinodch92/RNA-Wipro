import { combineReducers } from '@reduxjs/toolkit';
import * as SliderImagesData from './SliderImagesData';

const rootReducer = combineReducers({
  sliderImagesData: SliderImagesData.sliderImagesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export { rootReducer, SliderImagesData };
