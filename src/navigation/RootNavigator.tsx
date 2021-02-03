import * as React from 'react';
import HomeScreen from 'screens/Home/HomeScreen';

import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export const RootNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  );
};
