import { getToken, renewToken } from './auth/token';

const fetcher = async (input: RequestInfo, init?: RequestInit) => {
  const response = await fetch(input, init);

  return await response.json();
};

export const fetcherWithToken = async (
  input: RequestInfo,
  init?: RequestInit,
) => {
  const { accessToken, refreshToken } = await getToken();

  const response = await fetch(input, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      ...init?.headers,
    },
    ...init,
  });

  const { error, ...resJson } = await response.json();

  if (response.ok) {
    return resJson;
  }

  if (error.code === 100) {
    const newAccessToken = await renewToken(accessToken, refreshToken);

    const newResponse = await fetch(input, {
      headers: {
        Authorization: `Bearer ${newAccessToken}`,
        ...init?.headers,
      },
      ...init,
    });

    return await newResponse.json();
  }
};

export default fetcher;
