import axios from 'axios';

import { IToken } from './../types/auth0';

const axiosAuth0 = axios.create({
  baseURL: process.env.AUTH0_DOMAIN,
  responseType: 'json'
});

axiosAuth0.interceptors.request.use(
  (configuration) => {
    let config = { ...configuration };
    config = {
      ...config,
      headers: {
        common: {
          ...config.headers.common,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    }
    return config;
  },
  error => Promise.reject(error),
);

axiosAuth0.interceptors.response.use(
  response => response,
  async ({ response, config }) => {
    if (response.status === 401) { // if no token
      try {
        const { data } = await axiosAuth0.post<IToken>('/oauth/token', {
          grant_type: 'client_credentials',
          client_id: process.env.AUTH0_CLIENT_ID,
          client_secret: process.env.AUTH0_CLIENT_SECRET,
          audience: process.env.AUTH0_AUDIENCE
        });

        axiosAuth0.defaults.headers.common.Authorization = `${data.token_type} ${data.access_token}`;
        return axiosAuth0(config); // repeat previous request
      } catch (e) {
        return Promise.reject(e);
      }
    }
  }
)

export { axiosAuth0 };
