import { getToken, renewToken } from './token';

const checkLoggenIn = async () => {
  try {
    const { accessToken, refreshToken } = await getToken();

    await renewToken(accessToken, refreshToken);

    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
};

export default checkLoggenIn;
