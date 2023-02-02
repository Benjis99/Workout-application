import * as React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';

export default function WorkoutLog({navigation}) {
  return (
    <SafeAreaView>
      <Text>Workout history</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <Text>Go back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
