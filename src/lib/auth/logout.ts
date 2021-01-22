import { Navigation } from 'react-native-navigation';
import { loginRoot } from 'routes';
import { removeToken } from './token';

const logout = async () => {
  await removeToken();

  Navigation.setRoot(loginRoot);
};

export default logout;
