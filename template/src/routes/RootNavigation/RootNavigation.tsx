import React from 'react';
import {RootStackParamList} from './RootNavigation.types';
import {SplashPage} from '@screens';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {navigationRef, routeNameRef} from '@routes';
import {usePage} from '@store';
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigation(): JSX.Element {
  const {currentPage, setCurrentPage} = usePage();
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() =>
        (routeNameRef.current = navigationRef.current?.getCurrentRoute()?.name)
      }
      onStateChange={async () => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.current?.getCurrentRoute()?.name;
        if (previousRouteName !== currentRouteName) {
          setCurrentPage(currentRouteName ?? 'Unknown');
          console.info('Page Logger', {
            screen_class: currentRouteName,
            screen_name: currentRouteName,
          });
        }
        routeNameRef.current = currentRouteName;
      }}>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={SplashPage}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
