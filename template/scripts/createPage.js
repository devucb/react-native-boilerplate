const yargs = require('yargs');
const fs = require('fs');

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const n = capitalizeFirstLetter(yargs.argv.name);

const tsxFile = `
import React from 'react';
import { View, Text } from 'react-native-ui-lib';
import { useEffect } from 'react';
import { styles } from './${n}.style';
import { useNavigation } from '@react-navigation/native';
import { PageContainerComponent } from '@components';

export default function ${n}(): JSX.Element {
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      console.log("${n} Loaded")
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <PageContainerComponent>
        <View>
          <Text style={styles}>${n}</Text>
        </View>
    </PageContainerComponent>
    );
} 
`;

const styleFile = `
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({});
`;

const importFile = `export { default as ${n}Page } from './${n}Page/${n}';`;

fs.mkdir(`src/screens/${n}Page`, { recursive: true }, (err) => {
  if (err) throw err;
  fs.writeFile(`src/screens/${n}Page/${n}.tsx`, tsxFile, (err) => {
    if (err) throw err;
  });

  fs.writeFile(`src/screens/${n}Page/${n}.style.ts`, styleFile, (err) => {
    if (err) throw err;
  });

  fs.appendFile('src/screens/index.tsx', importFile, function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
});
