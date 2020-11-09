import { Request, Response } from 'express';

import { axiosAuth0 as axios } from '../axios/axiosAuth0';

interface RequestWithUserId extends Request {
  params: {
    userId: string,
  },
}

const getUsers = async (req: Request, res: Response) => {
  try {
    const { data } = await axios.get('/api/v2/users');
    return res.json(data);
  } catch (e) {
    // console.log(e);
    return res.status(400).end('error');
  }
}

export { getUsers };
