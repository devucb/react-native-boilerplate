module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        extensions: ['.ts', '.tsx'],
        root: ['./src'],
        alias: {
          '@store': './src/store',
          '@store/*': './src/store/*',
          '@components': './src/components',
          '@enums': './src/enums',
          '@utils': './src/utils',
          '@models': './src/models',
          '@routes': './src/routes',
          '@screens': './src/screens',
          '@assets': './src/assets',
          '@controllers': './src/controllers',
          '@providers': './src/providers',
          '@theme': './src/theme',
          '@theme/*': './src/theme/*',
        },
      },
    ],
  ],
};
