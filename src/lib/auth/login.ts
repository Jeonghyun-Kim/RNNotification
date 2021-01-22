import { API_URL } from 'defines';
import fetcher from 'lib/fetcher';
import { saveToken } from './token';

const login = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  const { accessToken, refreshToken, error } = await fetcher(
    `${API_URL}/auth`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    },
  );

  if (!accessToken || !refreshToken) {
    return error as ErrorFromServer;
  }

  await saveToken(accessToken, refreshToken);

  return null;
};

export default login;
