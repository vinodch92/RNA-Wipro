import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { ImageCard } from '../../app/components';
import config from '../../app/config';

/* Story for ImageCard component to demonstrate the use of ImageCard component*/
storiesOf('ImageCard', module)
  .add('Default', () => <ImageCard />)
  .add('With author name', () => <ImageCard id={10} authorName={'Paul Jarvis'} />)
  .add('With custom styling', () => (
    <ImageCard
      id={100}
      authorName={'Tina Rataj'}
      containerStyle={{ backgroundColor: config.colors.appTheme }}
      textStyle={{ color: config.colors.white }}
      textNumLines={1}
      imageWrapperStyle={{ shadowColor: config.colors.black }}
    />
  ));
