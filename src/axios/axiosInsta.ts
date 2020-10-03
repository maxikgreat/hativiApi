import axios  from 'axios';

const axiosInsta = axios.create({
  baseURL: process.env.INSTA_URL,
  responseType: 'json'
});

axiosInsta.interceptors.request.use(
  (configuration) => {
    let config = { ...configuration };

    config = {
      ...config,
      headers: {
        common: {
          ...config.headers.common,
          'x-rapidapi-host': process.env.RAPID_API_HOST,
          'x-rapidapi-key': process.env.RAPID_API_KEY,
          'useQueryString': true
        },
      },
    };

    return config;
  },
  (error) => Promise.reject(error),
);

export { axiosInsta };
