const yargs = require('yargs');
const fs = require('fs');

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const n = capitalizeFirstLetter(yargs.argv.name);

const tsxFile = `
import React from 'react';
import {
    createStackNavigator,
    TransitionPresets,
  } from '@react-navigation/stack';
import { BlurHeaderComponent } from '@components';
import { HomePage } from '@screens';
const Stack = createStackNavigator();
export default function ${n}() {
    return(
        <Stack.Navigator
            headerMode="screen"
            keyboardHandlingEnabled
            screenOptions={{
            ...TransitionPresets.SlideFromRightIOS,
            gestureEnabled: false,
            headerTitleAlign: 'center',
            headerTransparent: true,
            headerBackground: () => <BlurHeaderComponent />,
            }}>
            <Stack.Screen name="HomePage" component={HomePage} />
        </Stack.Navigator>
    )
}`;

const importFile = `export { default as ${n}Stack } from './${n}Stack/${n}';`;

fs.mkdir(`src/routes/${n}Stack`, { recursive: true }, (err) => {
  if (err) throw err;
  fs.writeFile(`src/routes/${n}Stack/${n}.tsx`, tsxFile, (err) => {
    if (err) throw err;
  });

  fs.appendFile('src/routes/index.tsx', importFile, function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
});
