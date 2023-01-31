import * as React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  SectionList,
  StatusBar,
  ScrollView,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {ListItem} from '@rneui/themed';
import {Text, Tile} from '@rneui/themed';

export default function LoginScreen({navigation}) {
  return (
    <SafeAreaView>
      <View style={{alignItems: 'center', backgroundColor: '#84a07c'}}>
        <ScrollView style={{paddingVertical: 10}}>
          <Tile
            onPress={() => Alert.alert('start new workout')}
            imageSrc={{
              uri: 'https://www.mediastorehouse.com/p/191/sunset-porthmeor-beach-st-ives-cornwall-11702500.jpg.webp',
            }}
            title="Start new workout"
            titleStyle={{fontSize: 50}}
            featured
            activeOpacity={1}
            width={390}
            height={220}
          />
          <View style={{paddingTop: 20}}>
            <Tile
              onPress={() => Alert.alert('create new workout')}
              imageSrc={{
                uri: 'https://www.mediastorehouse.com/p/191/sunset-porthmeor-beach-st-ives-cornwall-11702500.jpg.webp',
              }}
              title="Create new workout"
              titleStyle={{fontSize: 50}}
              featured
              activeOpacity={0.8}
              width={390}
              height={220}
            />
          </View>
          <View style={{paddingTop: 20}}>
            <Tile
              onPress={() => Alert.alert('Workout log')}
              imageSrc={{
                uri: 'https://www.mediastorehouse.com/p/191/sunset-porthmeor-beach-st-ives-cornwall-11702500.jpg.webp',
              }}
              title="Workout log"
              titleStyle={{fontSize: 50}}
              featured
              activeOpacity={0.8}
              width={390}
              height={220}
            />
          </View>
          <View style={{paddingTop: 20}}>
            <Tile
              onPress={() => Alert.alert('Test')}
              imageSrc={{
                uri: 'https://www.mediastorehouse.com/p/191/sunset-porthmeor-beach-st-ives-cornwall-11702500.jpg.webp',
              }}
              title="Test"
              titleStyle={{fontSize: 50}}
              featured
              activeOpacity={0.8}
              width={390}
              height={220}
            />
          </View>
          <View style={{paddingTop: 20}}>
            <Tile
              onPress={() => Alert.alert('Test2')}
              imageSrc={{
                uri: 'https://www.mediastorehouse.com/p/191/sunset-porthmeor-beach-st-ives-cornwall-11702500.jpg.webp',
              }}
              title="Test2"
              titleStyle={{fontSize: 50}}
              featured
              activeOpacity={0.8}
              width={390}
              height={220}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  subHeader: {
    backgroundColor: 'black',
    color: 'white',
    textAlign: 'center',
    paddingVertical: 5,
    marginBottom: 10,
  },
});
