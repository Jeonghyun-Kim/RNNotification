/**
 * @format
 */

import { Navigation } from 'react-native-navigation';
import { withNavigationProvider } from 'react-native-navigation-hooks';
import messaging from '@react-native-firebase/messaging';

import Home from '@screens/Home';
import Settings from '@screens/Settings';
import { mainRoot } from 'routes';

messaging().setBackgroundMessageHandler(async (remoteMessage) => {
  console.log('[index.ts] Message handled in the background!', remoteMessage);
});

Navigation.registerComponent('Home', () => withNavigationProvider(Home));
Navigation.registerComponent('Settings', () =>
  withNavigationProvider(Settings),
);

Navigation.setDefaultOptions({
  layout: {
    orientation: ['portrait'],
  },
  // topBar: {
  //   visible: false,
  // },
  bottomTabs: {
    backgroundColor: 'whitesmoke',
  },
  bottomTab: {
    textColor: 'gray',
    selectedTextColor: 'black',
  },
});

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot(mainRoot);
});
