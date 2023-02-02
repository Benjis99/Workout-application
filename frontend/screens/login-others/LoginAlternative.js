import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Alert,
} from 'react-native';
import React from 'react';

import {Tile} from '@rneui/themed';

//icons
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function LoginAlternative({navigation}) {
  return (
    <SafeAreaView
      style={{
        alignItems: 'center',
        backgroundColor: '#84a07c',
        height: '100%',
      }}>
      <ScrollView style={{}}>
        <View
          style={{
            flex: 2,
            justifyContent: 'space-around',
            paddingBottom: 50,
            paddingTop: 100,
          }}>
          <Tile
            onPress={() => Alert.alert('Google')}
            imageSrc={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Chrome_icon_%28September_2014%29.svg/1024px-Google_Chrome_icon_%28September_2014%29.svg.png',
            }}
            featured
            activeOpacity={1}
            width={150}
            height={150}
          />
        </View>
        <View
          style={{
            flex: 2,
            justifyContent: 'space-around',
            paddingBottom: 50,
          }}>
          <Tile
            onPress={() => Alert.alert('Facebook')}
            imageSrc={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png',
            }}
            featured
            activeOpacity={1}
            width={150}
            height={150}
          />
        </View>
        <View
          style={{
            flex: 2,
            justifyContent: 'space-around',
            paddingBottom: 10,
          }}>
          <Tile
            onPress={() => Alert.alert('Twitter')}
            imageSrc={{
              uri: 'https://icons.veryicon.com/png/Internet%20%26%20Web/Basic%20Round%20Social/twitter.png',
            }}
            featured
            activeOpacity={1}
            width={150}
            height={150}
          />
        </View>
        <View
          style={{
            paddingTop: 25,
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 30,
              }}>
              Go back
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
