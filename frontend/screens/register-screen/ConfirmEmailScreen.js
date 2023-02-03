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

export default function ConfirmEmailScreen({navigation}) {
  const [code, setCode] = useState();

  //const for buttons
  const onConfirmPressed = () => {
    console.warn('onConfirmPressed');
  };
  const onResendPress = () => {
    console.warn('onResendPressed');
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
              fontSize: 40,
              fontWeight: '200',
              color: 'white',
            }}>
            Confirm register
          </Text>

          <InputField
            label={'Enter your confirmation code'}
            value={code}
            setValue={setCode}
            icon={
              <MaterialIcons
                name="vpn-key"
                size={20}
                color={'black'}
                style={{marginRight: 5}}
              />
            }
          />

          <View>
            <CustomButton label={'Confirm'} onPress={onConfirmPressed} />
          </View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
              style={{paddingRight: 10}}>
              <Text>Back to Sign in</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onResendPress}>
              <Text style={{color: 'white'}}>Resend code</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
