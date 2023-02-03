import React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//screens
import LoginScreen from '../screens/LoginScreen';
import RegScreen from '../screens/register-screen/RegScreen';
import LoginAlternative from '../screens/login-others/LoginAlternative';
import ConfirmEmailScreen from '../screens/register-screen/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/register-screen/ForgotPasswordScreen';
import ResetPasswordScreen from '../screens/register-screen/ResetPasswordScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegScreen" component={RegScreen} />
      <Stack.Screen name="LoginAlternative" component={LoginAlternative} />
      <Stack.Screen name="ConfirmEmailScreen" component={ConfirmEmailScreen} />
      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
      />
      <Stack.Screen
        name="ResetPasswordScreen"
        component={ResetPasswordScreen}
      />
    </Stack.Navigator>
  );
};
export default AuthStack;
