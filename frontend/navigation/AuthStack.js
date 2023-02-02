import React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//screens
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/register-screen/RegisterScreen';
import LoginAlternative from '../screens/login-others/LoginAlternative';
import CreateWorkout from '../screens/workout-screen/CreateWorkout';
import StartWorkout from '../screens/workout-screen/StartWorkout';
import WorkoutLog from '../screens/workout-screen/WorkoutLog';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="LoginAlternative" component={LoginAlternative} />
    </Stack.Navigator>
  );
};
export default AuthStack;
