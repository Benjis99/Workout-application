import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
  TextInput,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomButton from '../component/CustomButton';
Ionicons.loadFont();
MaterialIcons.loadFont();

export default function LoginScreen({navigation}) {
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', backgroundColor: '#84a07c'}}>
      <View style={{paddingHorizontal: 30}}>
        <View style={{alignItems: 'center'}}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/69/69840.png',
            }}
            style={{width: 300, height: 300}}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            paddingBottom: 8,
            marginBottom: 25,
            marginTop: 50,
          }}>
          <MaterialIcons
            name="alternate-email"
            size={20}
            color={'black'}
            style={{marginRight: 5}}
          />
          <TextInput
            placeholder="Email"
            placeholderTextColor="black"
            style={{flex: 1, paddingVertical: 0}}
            keyboardType="email-address"
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            paddingBottom: 8,
            marginBottom: 25,
          }}>
          <Ionicons
            name="ios-lock-closed-outline"
            size={20}
            color={'black'}
            style={{marginRight: 5}}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor="black"
            style={{flex: 1, paddingVertical: 0}}
            secureTextEntry={true}
          />
          <TouchableOpacity onPress={() => {}}>
            <Text style={{color: 'white', fontWeight: '700'}}>Forgot?</Text>
          </TouchableOpacity>
        </View>
        <CustomButton label={'Login'} onPress={() => {}} />
        <Text style={{textAlign: 'center', color: 'black', marginBottom: 30}}>
          login with...
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 30,
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: 'black',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
              flexDirection: 'row',
            }}>
            <Ionicons
              name="logo-facebook"
              size={24}
              color={'black'}
              style={{marginRight: 10}}
            />
            <Ionicons
              name="logo-google"
              size={24}
              color={'black'}
              style={{marginRight: 10}}
            />
            <Ionicons
              name="logo-twitter"
              size={24}
              color={'black'}
              style={{marginRight: 10}}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 30,
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('RegisterScreen');
            }}>
            <Text style={{color: 'white', fontWeight: 700}}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
