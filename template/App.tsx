/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import './src/locale/i18n';
import {Button} from 'react-native-paper';
import {RootNavigationProvider} from '@routes';
function App(): JSX.Element {
  return (
    <Button
      rippleColor="#FF000020"
      icon="camera"
      mode="contained"
      onPress={() => console.log('Pressed')}>
      Press me
    </Button>
  );
}

export default App;
