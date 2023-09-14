import React from 'react';
import {View} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';

import {styles} from './Splash.style';
import {RootStackParamList} from '@routes';

type SplashScreenNavigationProp = NavigationProp<RootStackParamList, 'Splash'>;

export default function Splash(): JSX.Element {
  const navigation = useNavigation<SplashScreenNavigationProp>();
  return <View style={styles.safe}></View>;
}
