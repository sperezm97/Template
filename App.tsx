import 'react-native-gesture-handler';

import { AppNavigator } from 'navigation/AppNavigator';
import React from 'react';
import theme from 'theme';

import { ThemeProvider } from '@shopify/restyle';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppNavigator />
    </ThemeProvider>
  );
};

export default App;
