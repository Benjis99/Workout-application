import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
  SafeAreaView,
  TextInput,
} from 'react-native';

//Datepicker
import DatePicker from 'react-native-date-picker';

//Icons
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

//Components
import InputField from '../../component/InputField';
import CustomButton from '../../component/CustomButton';
MaterialIcons.loadFont();

export default function RegisterScreen({navigation}) {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [dobLabel, setDobLabel] = useState('Date of birth');
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', backgroundColor: '#84a07c'}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{paddingHorizontal: 30}}>
        <View
          style={{
            opacity: 0.05,
            marginTop: 200,
            position: 'absolute',
            alignContent: 'center',
          }}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/69/69840.png',
            }}
            style={{width: 330, height: 330}}
          />
        </View>
        <View style={{paddingTop: 120}}>
          <Text
            style={{
              fontSize: 40,
              fontWeight: '200',
              color: 'white',
            }}>
            Register
          </Text>
          <InputField
            label={'Full Name'}
            icon={
              <Ionicons
                name="person-outline"
                size={24}
                color={'black'}
                style={{marginRight: 10}}
              />
            }
          />

          <InputField
            label={'Email Address'}
            icon={
              <MaterialIcons
                name="alternate-email"
                size={20}
                color={'black'}
                style={{marginRight: 5}}
              />
            }
            keyboardType="email-address"
          />

          <InputField
            label={'Password'}
            icon={
              <Ionicons
                name="ios-lock-closed-outline"
                size={20}
                color={'black'}
                style={{marginRight: 5}}
              />
            }
            inputType="password"
          />
          <InputField
            label={'Confirm password'}
            icon={<Ionicons />}
            inputType="password"
          />

          <View
            style={{
              flexDirection: 'row',
              borderBottomColor: '#ccc',
              borderBottomWidth: 1,
              paddingBottom: 8,
              marginBottom: 30,
            }}>
            <Ionicons
              name="calendar-outline"
              size={20}
              color={'black'}
              style={{marginRight: 5}}
            />
            <TouchableOpacity onPress={() => setOpen(true)}>
              <Text style={{marginLeft: 5, marginTop: 5}}>{dobLabel}</Text>
            </TouchableOpacity>
          </View>

          <DatePicker
            modal
            open={open}
            date={date}
            mode={'date'}
            onConfirm={date => {
              setOpen(false);
              setDate(date);
              setDobLabel(date.toDateString());
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />

          <View>
            <CustomButton label={'Register'} onPress={() => {}} />
            <Text
              style={{textAlign: 'center', color: 'black', marginBottom: 30}}>
              register with...
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 30,
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('LoginAlternative');
              }}
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
            <Text>Already registered?</Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={{color: 'white', fontWeight: '700'}}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
