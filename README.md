# React Native Boilerplate

Quickly create a react-native project with this boilerplate

## Getting Started

### Prerequisites

[Makes sure you have completed the react native installation](https://reactnative.dev/docs/environment-setup)


### Installing


Open the terminal and paste below code. Wait for the installations to complete

```
npx react-native init <yourAppName> --template https://github.com/devucb/react-native-boilerplate.git
```

After the installation is completed, open a new branch and paste the code below.

```
npx react-native-rename "<yourAppName>" -b "<yourBundleID>"
```

This code will change the application name and bundleID

### Custom Scripts

If you want to create component, page or store you can use this scripts.

```
NAME=Example npm run create-component
```

```
NAME=Example npm run create-store
```

```
NAME=Example npm run create-page
```
Another scripts

This script clear your pods and node_modules and reinstall dependices.
```
npm run clean-build
```

Clear cache
```
npm run reset-cache
```

### Import Structure
You can use it wherever you want in the following way

```
import {ExampleComponent} from "@components"
import {ExamplePage} from "@screens"
import {useExample} from "@store"
```

If you want to use another src folder like @screens. Make sure to export the structure you want to use in the folder's index.ts file. For example you can inspect index.ts file in screens folder.

If you want to add another folder to src you need change tsconfig.json path and babel.config.js

