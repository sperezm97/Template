import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { RootNavigator } from './RootNavigator';

const { Navigator, Screen } = createStackNavigator();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Home" component={RootNavigator} />
      </Navigator>
    </NavigationContainer>
  );
};
