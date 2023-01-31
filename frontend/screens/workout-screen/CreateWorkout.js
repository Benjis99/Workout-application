import * as React from 'react';
import {View, Text} from 'react-native';

export default function CreateWorkout({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <ListItem.Swipeable
        leftContent={reset => (
          <Button
            title="Info"
            onPress={() => reset()}
            icon={{name: 'info', color: 'white'}}
            buttonStyle={{minHeight: '100%'}}
          />
        )}
        rightContent={reset => (
          <Button
            title="Delete"
            onPress={() => reset()}
            icon={{name: 'delete', color: 'white'}}
            buttonStyle={{minHeight: '100%', backgroundColor: 'red'}}
          />
        )}>
        <ListItem.Content>
          <ListItem.Title>Hello Swiper</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem.Swipeable>
    </SafeAreaView>
  );
}
