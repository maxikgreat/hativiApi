import { Request, Response, NextFunction } from 'express';

import { IToken } from '../types/auth0';
import { axiosAuth0 as axios } from '../axios/axiosAuth0';

export const checkToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log(axios.defaults.headers.common.Authorization);
    // const { data } = await axios.post<IToken>('/oauth/token', {
    //   grant_type: 'client_credentials',
    //   client_id: process.env.AUTH0_CLIENT_ID,
    //   client_secret: process.env.AUTH0_CLIENT_SECRET,
    //   audience: process.env.AUTH0_AUDIENCE
    // });
    // console.log('result', data);
    // axios.defaults.headers.common.Authorization = `${data.token_type} ${data.access_token}`;
    // return res.json(data);
    next();
  } catch (e) {
    // console.log('Error', e);
    return res.status(400).end('error');
  }
}