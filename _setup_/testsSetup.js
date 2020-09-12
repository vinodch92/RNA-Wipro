import MockDate from 'mockdate';

jest.mock('@reduxjs/toolkit', () => ({
  configureStore: jest.fn(() => Promise.resolve()),
  combineReducers: jest.fn(() => Promise.resolve()),
  createSlice: jest.fn(() => Promise.resolve()),
  getDefaultMiddleware: jest.fn(() => Promise.resolve()),
  createAction: jest.fn(),
}));

jest.mock('../app/config/store', () => ({}));

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(() => Promise.resolve()),
  useSelector: jest.fn((data) => data),
}));

jest.mock('../app/states/SliderImagesData', () => {
  return {
    saveSliderImagesData: jest.fn(),
  };
});

const frameTime = 10;

global.requestAnimationFrame = (cb) => {
  // Default implementation of requestAnimationFrame calls setTimeout(cb, 0),
  // which will result in a cascade of timers - this generally pisses off test runners
  // like Jest who watch the number of timers created and assume an infinite recursion situation
  // if the number gets too large.
  //
  // Setting the timeout simulates a frame every 1/100th of a second
  setTimeout(cb, frameTime);
};

global.timeTravel = (time = frameTime) => {
  const tickTravel = () => {
    // The React Animations module looks at the elapsed time for each frame to calculate its
    // new position
    const now = Date.now();
    MockDate.set(new Date(now + frameTime));

    // Run the timers forward
    jest.advanceTimersByTime(frameTime);
  };

  // Step through each of the frames
  const frames = time / frameTime;
  let framesEllapsed;
  for (framesEllapsed = 0; framesEllapsed < frames; framesEllapsed++) {
    tickTravel();
  }
};

export {};
