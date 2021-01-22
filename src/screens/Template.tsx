import React from 'react';
import { NavigationFunctionComponent } from 'react-native-navigation';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
// import { useNavigation } from 'react-native-navigation-hooks/dist';

const s = StyleSheet.create({
  root: {},
});

const Template: NavigationFunctionComponent = () => {
  // const {} = useNavigation();

  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <SafeAreaView style={s.root} />
    </>
  );
};

export default Template;
