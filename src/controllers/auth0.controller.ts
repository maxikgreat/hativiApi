import { Request, Response } from 'express';

import Axios from '../Axios';

const axios = new Axios(process.env.AUTH0_DOMAIN as string).axios;

const authorize = async (req: Request, res: Response) => {
  try {
    const { data } = await axios.post('/oauth/token', {
      grant_type: 'client_credentials',
      client_id: process.env.AUTH0_CLIENT_ID,
      client_secret: process.env.AUTH0_CLIENT_SECRET,
      audience: process.env.AUTH0_AUDIENCE
    });
    console.log('result', data);
    res.json(data);
  } catch (e) {
    console.log('Error', e);
    res.status(400).end(e);
  }
};

const getUser = async (req: Request, res: Response) => {
  try {

  } catch (e) {

  }
};

const setUserMetadata = async (req: Request, res: Response) => {
  try {

  } catch (e) {

  }
};

export { authorize };
