module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@lib': './src/lib',
          '@components': './src/components',
          '@screens': './src/screens',
          '@utils': './src/utils',
          '@buttons': './src/buttons',
        },
      },
    ],
  ],
};
