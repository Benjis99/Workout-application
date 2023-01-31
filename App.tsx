import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//Stacks
import AppStack from './frontend/navigation/AppStack';
import AuthStack from './frontend/navigation/AuthStack';
import TabNavigator from './frontend/navigation/TabNavigator';

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      {/*<TabNavigator />*/}
      {/*<AppStack />*/}
      <AuthStack />
    </NavigationContainer>
  );
}
export default App;
