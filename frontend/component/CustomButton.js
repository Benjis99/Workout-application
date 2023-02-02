import {Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function CustomButton({label, onPress}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        marginBottom: 30,
        opacity: 0.8,
      }}>
      <Text
        style={{
          textAlign: 'center',
          fontWeight: '500',
          fontSize: 16,
          color: 'gray',
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}
