const yargs = require('yargs');
const fs = require('fs');

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const n = capitalizeFirstLetter(yargs.argv.name);

const tsxFile = `
import { I${n} } from './${n}.interface';
export default function ${n}() {
    const Temp: I${n} = () => {};
}`;

const interfaceFile = `export interface I${n} {}`;

const importFile = `export { default as ${n}Controller } from './${n}Controller/${n}';`;

fs.mkdir(`src/controllers/${n}Controller`, { recursive: true }, (err) => {
  if (err) throw err;
  fs.writeFile(`src/controllers/${n}Controller/${n}.tsx`, tsxFile, (err) => {
    if (err) throw err;
  });

  fs.writeFile(
    `src/controllers/${n}Controller/${n}.interface.tsx`,
    interfaceFile,
    (err) => {
      if (err) throw err;
    },
  );

  fs.appendFile('src/controllers/index.tsx', importFile, function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
});
