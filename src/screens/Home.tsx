import React from 'react';
import { NavigationFunctionComponent } from 'react-native-navigation';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import { useNavigation } from 'react-native-navigation-hooks/dist';

import { settingsRoot } from 'routes';

const s = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'whitesmoke',
  },
});

const Home: NavigationFunctionComponent = () => {
  const { push, setRoot } = useNavigation();
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    messaging().onNotificationOpenedApp((remoteMessage) => {
      console.log(
        '[Home.tsx] Notification caused app to open from background state:',
        remoteMessage.notification,
      );
      setRoot(settingsRoot);
    });

    messaging()
      .getInitialNotification()
      .then((remoteMessage) => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage.notification,
          );
          setRoot(settingsRoot);
        }
        setLoading(false);
      });
  }, [setRoot]);

  React.useEffect(() => {
    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);

  if (loading) {
    return null;
  }

  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (!enabled) {
      console.log('[Home.tsx] Notification authorization rejected by User.');
    }
    console.log('[Home.tsx] Authorization status:', authStatus);
  };

  return (
    <View style={s.root}>
      <Text>Hello World</Text>
      <Button
        title="IOS Request Permission"
        onPress={() => requestUserPermission()}
      />
      <Button title="settings" onPress={() => push('Settings')} />
    </View>
  );
};

Home.options = {
  topBar: {
    title: {
      text: 'Home',
    },
  },
};

export default Home;
