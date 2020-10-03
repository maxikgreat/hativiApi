declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production',
      PORT: string,
      INSTA_URL: string,
      RAPID_API_KEY: string,
      RAPID_API_HOST: string,
      AUTH0_DOMAIN: string,
      AUTH0_CLIENT_ID: string,
      AUTH0_CLIENT_SECRET: string,
      AUTH0_AUDIENCE: string
    }
  }
}

export {}