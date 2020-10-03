import axios, { AxiosRequestConfig, AxiosInstance }  from 'axios';

export default class Axios {
  private axiosObj: AxiosInstance;
  constructor(private baseUrl: string) {
    this.axiosObj = axios.create({
      baseURL: this.baseUrl,
      responseType: 'json',
    });

    this.axiosObj.interceptors.request.use(
      (configuration) => {
        let config = { ...configuration };
  
        // default headers
        config = {
          ...config,
          headers: {
            common: {
              ...config.headers.common,
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          },
        }

        if (config.baseURL === process.env.INSTA_URL) {
          this.setInstagramHeaders(config);
        }

        return config;
      },
      (error) => Promise.reject(error),
    );
  };

  get axios() {
    return this.axiosObj;
  };

  setInstagramHeaders(config: AxiosRequestConfig): void {
    config = {
      ...config,
      headers: {
        ...config.headers,
        'x-rapidapi-host': process.env.RAPID_API_HOST,
        'x-rapidapi-key': process.env.RAPID_API_KEY,
        'useQueryString': true
      }
    }
  }
}