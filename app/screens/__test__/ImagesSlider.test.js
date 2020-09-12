import React from 'react';
import ImagesSlider from '../ImagesSlider';
import { render } from '@testing-library/react-native';
import { Dimensions } from 'react-native';
import { Provider, useSelector, useDispatch } from 'react-redux';
import configureStore from 'redux-mock-store';
import { data } from '../../../__fixture__/imagesSliderData';

describe('ImagesSlider', () => {
  const dispatch = jest.fn();
  useDispatch.mockReturnValue(dispatch);

  const mockStore = configureStore([]);

  it('matches snapshot with empty image data', () => {
    const store = mockStore({
      sliderImagesData: {
        sliderImagesData: [],
      },
    });

    useSelector.mockImplementationOnce(() => store.getState());

    const { toJSON } = render(
      <Provider store={store}>
        <ImagesSlider dispatch={dispatch} />
      </Provider>
    );

    expect(toJSON()).toMatchSnapshot();
  });

  it('matches snapshot with image data', () => {
    const store = mockStore({
      sliderImagesData: {
        sliderImagesData: data,
      },
    });

    useSelector.mockImplementationOnce(() => store.getState().sliderImagesData.sliderImagesData);

    const { toJSON } = render(
      <Provider store={store}>
        <ImagesSlider dispatch={dispatch} />
      </Provider>
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
