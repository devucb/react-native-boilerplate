const yargs = require('yargs');
const fs = require('fs');

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const n = capitalizeFirstLetter(yargs.argv.name);

const tsxFile = `
import create from 'zustand'
import { T${n} } from './${n}.type';

const ${n} = create<T${n}>((set) => ({
  bears: 0,
  increasePopulation: () => set(state => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 })
}))
export default ${n};
`;

const typeFile = `
export type T${n} = {
  bears: number;
  increasePopulation: () => void;
  removeAllBears: () => void;
}
`;

const importFile = `export { default as use${n}} from './${n}Store/${n}';`;

fs.mkdir(`src/store/${n}Store`, { recursive: true }, (err) => {
  if (err) throw err;
  fs.writeFile(`src/store/${n}Store/${n}.tsx`, tsxFile, (err) => {
    if (err) throw err;
  });

  fs.writeFile(`src/store/${n}Store/${n}.type.tsx`, typeFile, (err) => {
    if (err) throw err;
  });

  fs.appendFile('src/store/index.tsx', importFile, function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
});
