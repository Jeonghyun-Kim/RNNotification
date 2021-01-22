import AsyncStorage from '@react-native-async-storage/async-storage';

const getToken = async () => {
  const accessToken = await AsyncStorage.getItem('@accessToken');
  const refreshToken = await AsyncStorage.getItem('@refreshToken');

  if (!accessToken || !refreshToken) {
    throw new Error('No stored tokens.');
  }

  return { accessToken, refreshToken };
};

export default getToken;
