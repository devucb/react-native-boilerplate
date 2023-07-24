const yargs = require('yargs');
const fs = require('fs');

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const n = capitalizeFirstLetter(yargs.argv.name);

const tsxFile = `
import React, { useEffect }  from 'react';
import { View, Text } from 'react-native-ui-lib';
import { P${n}} from './${n}.props';
import { styles } from './${n}.style';

export default function ${n}({ label }: P${n}): JSX.Element {

  useEffect(() => {
    console.log("${n} Component Loaded")
  }, []);

  return (
    <View>
      <Text>{label}</Text>
    </View>
  );
} 
`;

const styleFile = `
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({});
`;

const propFile = `
export interface P${n} {
  label: string;
}

`;

const importFile = `export { default as ${n}Component } from './${n}Component/${n}';`;

fs.mkdir(`src/components/${n}Component`, { recursive: true }, (err) => {
  if (err) throw err;
  fs.writeFile(`src/components/${n}Component/${n}.tsx`, tsxFile, (err) => {
    if (err) throw err;
  });

  fs.writeFile(
    `src/components/${n}Component/${n}.style.tsx`,
    styleFile,
    (err) => {
      if (err) throw err;
    },
  );

  fs.writeFile(
    `src/components/${n}Component/${n}.props.tsx`,
    propFile,
    (err) => {
      if (err) throw err;
    },
  );

  fs.appendFile('src/components/index.tsx', importFile, function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
});
