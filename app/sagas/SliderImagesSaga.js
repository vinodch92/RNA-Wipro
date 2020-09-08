import { put, call, takeLatest } from 'redux-saga/effects';
import { getSliderImagesData } from '../services';
import { SliderImagesData } from '../states';

/**
 * saga generator function used in fetching sliderImagesList
 * @param {Object} action - contain type and payload
 */
export function* sliderImagesList(action) {
  const apiResponse = yield call(getSliderImagesData);
  if (apiResponse?.length > 0) {
    yield put(SliderImagesData.saveSliderImagesData({ sliderImagesData: apiResponse }));
    return;
  }
}

/**
 * generator function is for takeLatest slider images list
 */
export function* watchSliderImagesList() {
  yield takeLatest('SLIDER_IMAGES_LIST', sliderImagesList);
}
