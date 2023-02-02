import React from 'react';
import {View, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Screens
import TabNavigator from './TabNavigator';
import CreateWorkout from '../screens/workout-screen/CreateWorkout';
import StartWorkout from '../screens/workout-screen/StartWorkout';
import WorkoutLog from '../screens/workout-screen/WorkoutLog';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen component={TabNavigator} name="Tabnavigator" />
      <Stack.Screen component={CreateWorkout} name="CreateWorkout" />
      <Stack.Screen component={StartWorkout} name="StartWorkout" />
      <Stack.Screen component={WorkoutLog} name="WorkoutLog" />
    </Stack.Navigator>
  );
};
export default AppStack;
