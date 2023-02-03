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

export default function ForgotPasswordScreen({navigation}) {
  const [email, setEmail] = useState();

  //const for buttons
  const onSendPressed = () => {
    console.warn('onSendPressed');
  };

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
              fontSize: 30,
              fontWeight: '200',
              color: 'white',
              marginBottom: 30,
            }}>
            Reset your password
          </Text>

          <InputField
            label={'Email'}
            value={email}
            setValue={setEmail}
            icon={
              <MaterialIcons
                name="alternate-email"
                size={20}
                color={'black'}
                style={{marginRight: 5}}
              />
            }
          />

          <View>
            <CustomButton
              label={'Send'}
              onPress={() => {
                navigation.navigate('ResetPasswordScreen');
              }}
            />
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
              style={{
                backgroundColor: 'white',
                padding: 10,
                borderRadius: 10,
                marginBottom: 30,
                opacity: 0.8,
              }}>
              <Text>Back to Sign in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
