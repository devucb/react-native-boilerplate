import React from 'react';
import {View} from 'react-native';
import {NavigationProp} from '@react-navigation/native';

import {styles} from './Splash.style';
import {RootStackParamList} from '@routes';

type SplashScreenNavigationProp = NavigationProp<RootStackParamList, 'Splash'>;

export default function Splash(): JSX.Element {
  return <View style={styles.safe}></View>;
}
