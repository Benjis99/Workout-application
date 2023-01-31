import * as React from 'react';
import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function HomeScreen({navigation}) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#84a07c',
      }}>
      <Text
        onPress={() => alert("This is the 'home' screen")}
        style={{fontSize: 26, fontWeight: 'bold'}}>
        Home Screen
      </Text>
    </SafeAreaView>
  );
}
