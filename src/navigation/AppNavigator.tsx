import React from 'react';
import HomeScreen from 'screens/Home/HomeScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Home" component={HomeScreen} />
      </Navigator>
    </NavigationContainer>
  );
};
