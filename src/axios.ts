import axios from 'axios';
import dotenv from 'dotenv';

const result = dotenv.config();
if (result.error) throw result.error;

const client = axios.create({
  baseURL: process.env.INSTA_URL,
  responseType: 'json',
});

client.interceptors.request.use(
  (configuration) => {
    let config = { ...configuration };

    if (config.baseURL === process.env.INSTA_URL) {
      config = {
        ...config,
        headers: {
          ...config.headers,
          'x-rapidapi-host': process.env.RAPID_API_HOST,
          'x-rapidapi-key': process.env.RAPID_API_KEY,
	        'useQueryString': true
        },
      };
    }

    return config;
  },
  (error) => Promise.reject(error),
);

export default client;
