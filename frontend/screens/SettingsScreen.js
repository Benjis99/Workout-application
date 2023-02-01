import React, {useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {AuthContext} from '../context/AuthContext';

export default function SettingsScreen({navigation}) {
  const {logout} = useContext(AuthContext);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text
        onPress={() => navigation.navigate('Home')}
        style={{fontSize: 26, fontWeight: 'bold'}}>
        Settings Screen
      </Text>

      <TouchableOpacity
        onPress={() => {
          logout();
        }}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
