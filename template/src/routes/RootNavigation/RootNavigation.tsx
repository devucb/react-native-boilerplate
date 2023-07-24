import React from 'react';
import {RootStackParamList} from './RootNavigation.types';
import {SplashPage} from '@screens';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigation(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={SplashPage}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
