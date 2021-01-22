import AsyncStorage from '@react-native-async-storage/async-storage';

const removeToken = async () => {
  await AsyncStorage.removeItem('@accessToken');
  await AsyncStorage.removeItem('@refreshToken');
};

export default removeToken;
