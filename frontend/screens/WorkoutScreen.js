import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  SectionList,
  StatusBar,
  Alert,
} from 'react-native';

const DATA = [
  {
    data: [
      'Start workout',
      'Create workout',
      'Workout Log',
      'Test',
      'Test2',
      'Test3',
      'Test4',
    ],
  },
];

export default function LoginScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.t}>
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={({item}) => (
            <View style={styles.item}>
              <Text onPress={() => Alert.alert(item)} style={styles.title}>
                {item}
              </Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#84a07c',
    width: '100%',
    height: '100%',
  },
  t: {
    marginTop: 10,
    height: '100%',
  },
  item: {
    backgroundColor: '#658354',
    padding: 20,
    marginVertical: 8,
    marginTop: 5,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
  },
});
