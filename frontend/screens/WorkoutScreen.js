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
  Image,
} from 'react-native';
import {ListItem} from '@rneui/themed';
import {Text, Card, Button, Icon} from '@rneui/themed';

export default function WorkoutScreen({navigation}) {
  return (
    <SafeAreaView
      style={{
        backgroundColor: '#84a07c',
        height: '100%',
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            alignItems: 'center', //Centered vertically
          }}>
          <View style={styles.titles}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('StartWorkout');
              }}>
              <Text style={styles.titlesText}>Start workout</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.titles}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('CreateWorkout');
              }}>
              <Text style={styles.titlesText}>Create workout</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.titles}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('WorkoutLog');
              }}>
              <Text style={styles.titlesText}>History</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titles: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingBottom: 5,
    width: 200,
    alignItems: 'center',
  },
  titlesText: {
    fontSize: 30,
    color: 'white',
    fontWeight: 300,
    paddingTop: 50,
  },
});
