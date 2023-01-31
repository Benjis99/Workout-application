import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
Ionicons.loadFont();
//Screens
import HomeScreen from '../screens/HomeScreen';
import WorkoutScreen from '../screens/WorkoutScreen';
import SettingsScreen from '../screens/SettingsScreen';
//Screen names
const loginName = 'Login';
const homeName = 'Home';
const workName = 'Workout';
const settingsName = 'Settings';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={loginName}
      screenOptions={({route}) => ({
        tabBarActiveBackgroundColor: 'white',
        tabBarInactiveBackgroundColor: 'white',
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let rn = route.name;
          if (rn === homeName) {
            iconName = focused ? 'home' : 'home-outline';
          } else if (rn === workName) {
            iconName = focused ? 'barbell' : 'barbell-outline';
          } else if (rn === settingsName) {
            iconName = focused ? 'settings' : 'settings-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarActiveTintColor: 'black',
        }}
        name={homeName}
        component={HomeScreen}
      />
      <Tab.Screen
        options={{headerShown: false, tabBarActiveTintColor: 'black'}}
        name={workName}
        component={WorkoutScreen}
      />
      <Tab.Screen
        options={{headerShown: false, tabBarActiveTintColor: 'black'}}
        name={settingsName}
        component={SettingsScreen}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
