import React from 'react';
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

export default function WorkoutScreen({navigation}) {
  return (
    <SafeAreaView>
      <View style={{alignItems: 'center', backgroundColor: '#84a07c'}}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{paddingVertical: 10}}>
          <Tile
            onPress={() => {
              navigation.navigate('StartWorkout');
            }}
            imageSrc={{
              uri: 'https://www.pngall.com/wp-content/uploads/5/Workout-PNG-Free-Download.png',
            }}
            title="Start"
            titleStyle={{fontSize: 30}}
            featured
            width={250}
            height={250}
          />
          <View style={{paddingTop: 20}}>
            <Tile
              onPress={() => {
                navigation.navigate('CreateWorkout');
              }}
              imageSrc={{
                uri: 'https://www.pngmart.com/files/15/Fitness-Female-Silhouette-Transparent-PNG.png',
              }}
              title="Create"
              titleStyle={{fontSize: 30}}
              featured
              activeOpacity={0.8}
              width={250}
              height={250}
            />
          </View>
          <View style={{paddingTop: 20}}>
            <Tile
              onPress={() => navigation.navigate('WorkoutLog')}
              imageSrc={{
                uri: 'https://cdn.pixabay.com/photo/2020/07/05/03/52/weightlifting-5371498_960_720.png',
              }}
              title="History"
              titleStyle={{fontSize: 30}}
              featured
              activeOpacity={0.8}
              width={250}
              height={250}
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
              width={200}
              height={200}
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
              width={200}
              height={200}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
