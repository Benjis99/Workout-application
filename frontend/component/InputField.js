import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import * as React from 'react';

export default function InputField({
  label,
  icon,
  inputType,
  keyboardType,
  fieldButtonLabel,
  fieldButtonFunction,
  value,
  setValue,
}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingBottom: 8,
        marginBottom: 25,
      }}>
      {icon}
      {inputType == 'password' ? (
        <TextInput
          placeholder={label}
          keyboardType={keyboardType}
          placeholderTextColor="black"
          style={{flex: 1, paddingVertical: 0}}
          secureTextEntry={true}
          value={value}
          setValue={setValue}
        />
      ) : (
        <TextInput
          placeholder={label}
          keyboardType={keyboardType}
          placeholderTextColor="black"
          style={{flex: 1, paddingVertical: 0}}
          value={value}
          setValue={setValue}
        />
      )}
      <TouchableOpacity onPress={fieldButtonFunction}>
        <Text style={{color: 'white', fontWeight: '700'}}>
          {fieldButtonLabel}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
