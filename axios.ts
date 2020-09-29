import axios from 'axios';


const instaUrl = 'https://instagramdimashirokovv1.p.rapidapi.com'

const client = axios.create({
  baseURL: instaUrl,
  responseType: 'json',
});

client.interceptors.request.use(
  (configuration) => {
    let config = { ...configuration };

    if (config.baseURL === instaUrl) {
      config = {
        ...config,
        headers: {
          ...config.headers,
          'x-rapidapi-host': 'InstagramdimashirokovV1.p.rapidapi.com',
          'x-rapidapi-key': '154036d22bmsh465d3a3758110ddp195036jsn2debbbbe3d78',
	        'useQueryString': true
        },
      };
    }

    return config;
  },
  (error) => Promise.reject(error),
);

export default client;
