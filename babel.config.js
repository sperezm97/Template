module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ts', '.tsx', '.json'],
        alias: {
          '@components': './src/components',
          '@store': './src/store',
          '@config': './src/config',
          '@assets': './src/assets',
          '@screens': './src/screens',
          '@utils': './src/utils',
          '@hooks': './src/hooks',
        },
      },
    ],
  ],
};
