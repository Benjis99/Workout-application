import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Auth
import {AuthProvider} from './frontend/context/AuthContext';
import AppNavigation from './frontend/navigation/AppNavigation';

const Stack = createNativeStackNavigator();
function App() {
  return (
    <AuthProvider>
      <AppNavigation />
    </AuthProvider>
  );
}
export default App;
