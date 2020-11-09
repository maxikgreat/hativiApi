import { Request, Response } from 'express';

import { axiosInsta as axios } from '../axios/axiosInsta';

const checkUser = async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    return res.status(200).json({ message: 'okey' });
    // const { data } = await axios.get(`/search?query=${query}`);
  } catch (e) {
    return res.status(400).end('error');
  }
}

export { checkUser };
