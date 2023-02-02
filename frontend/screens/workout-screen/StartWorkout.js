import * as React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';

export default function StartWorkout({navigation}) {
  return (
    <SafeAreaView>
      <Text>Start workout</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <Text>Go back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
