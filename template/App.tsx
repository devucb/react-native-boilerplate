/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import './src/locale/i18n';
import {RootNavigationProvider} from '@routes';
import {SafeAreaProvider} from 'react-native-safe-area-context';
function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <RootNavigationProvider />
    </SafeAreaProvider>
  );
}

export default App;
