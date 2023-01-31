import React from 'react';
import {View, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';

//Screens
import TabNavigator from './TabNavigator';
import WorkoutScreen from '../screens/WorkoutScreen';

const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen component={TabNavigator} name="Tabnavigator" />
    </Drawer.Navigator>
  );
};
export default AppStack;
