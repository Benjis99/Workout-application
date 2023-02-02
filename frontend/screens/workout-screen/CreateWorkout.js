import * as React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';

export default function CreateWorkout({navigation}) {
  return (
    <SafeAreaView>
      <Text>Create workout</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <Text>Go back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
