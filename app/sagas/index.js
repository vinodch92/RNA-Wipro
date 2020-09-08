import { all, fork } from 'redux-saga/effects';
import { watchSliderImagesList } from './SliderImagesSaga';

export default function* rootSaga() {
  yield all([fork(watchSliderImagesList)]);
}
