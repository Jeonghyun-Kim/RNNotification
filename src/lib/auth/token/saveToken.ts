import AsyncStorage from '@react-native-async-storage/async-storage';

const saveToken = async (accessToken: string, refreshToken?: string) => {
  await AsyncStorage.setItem('@accessToken', accessToken);
  if (refreshToken) {
    await AsyncStorage.setItem('@refreshToken', refreshToken);
  }
};

export default saveToken;
