import { Request, Response } from 'express';

import { axiosAuth0 as axios } from '../axios/axiosAuth0';
import { UserMetadata } from '../types/auth0';

interface MetadataBody {
  userId: string,
  metadata: UserMetadata,
}


const changeMetadata = async (req: Request, res: Response) => {
  try {
    const { userId, metadata }: MetadataBody = req.body;
    const response = await axios.patch(`/api/v2/users/${userId}`, { user_metadata: metadata });
    console.log('user', response.data.app_metadata.roles);
    res.end('ok');
  } catch (error) {
    console.log('error', error);
    return res.json('Error');
  }
}

export { changeMetadata };
