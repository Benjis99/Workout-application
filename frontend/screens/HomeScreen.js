import * as React from 'react';
import {View, Text, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function HomeScreen({navigation}) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#84a07c',
      }}>
      <Text
        onPress={() => alert("This is the 'home' screen")}
        style={{fontSize: 26, fontWeight: 'bold'}}>
        Home Screen
      </Text>
      <View style={{alignItems: 'center'}}>
        <Image
          source={{
            uri: 'https://cdn.pixabay.com/photo/2017/01/12/21/14/sports-1975689__340.png',
          }}
          style={{
            width: 400,
            height: 290,
            position: 'absolute',
            bottom: -450,
          }}
        />
      </View>
    </SafeAreaView>
  );
}
