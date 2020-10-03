import { Request, Response } from 'express';

import { axiosAuth0 as axios } from '../axios/axiosAuth0';

const getUser = async (req: Request, res: Response) => {
  try {
    const { data } = await axios.get('/api/v2/users');
    return res.json(data);
  } catch (e) {
    // console.log(e);
    return res.status(400).end('error');
  }
};

const setUserMetadata = async (req: Request, res: Response) => {
  try {

  } catch (e) {

  }
};

export { getUser };
