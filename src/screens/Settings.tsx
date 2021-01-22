import React from 'react';
import { NavigationFunctionComponent } from 'react-native-navigation';
import { Button, StyleSheet, Text, View } from 'react-native';

const s = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'whitesmoke',
  },
});

const Settings: NavigationFunctionComponent = () => {
  return (
    <View style={s.root}>
      <Text>Hello World</Text>
      <Button title="Press me" onPress={() => {}} />
    </View>
  );
};

Settings.options = {
  topBar: {
    title: {
      text: 'Settings',
    },
  },
};

export default Settings;
