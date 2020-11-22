import { Request, Response } from 'express';

import { axiosAuth0 as axios } from '../axios/axiosAuth0';
import { UserMetadata } from '../types/auth0';

export interface MetadataBody {
  userId: string,
  metadata: UserMetadata,
}

const changeMetadata = async (req: Request, res: Response) => {
  try {
    const { userId, metadata }: MetadataBody = req.body;
    const { data } = await axios.get(`/api/v2/users/${userId}`);

    let userMetadata = {...data.user_metadata};

    let key: keyof UserMetadata;
    for (key in metadata) {
      if (metadata[key]) {
        userMetadata = {
          ...userMetadata,
          [key]: metadata[key]
        }
      }
    }

    const response = await axios.patch(`/api/v2/users/${userId}`, { user_metadata: metadata });
    return res.status(response.status || 200).json({ message: 'Changed' });
  } catch ({ response }) {
    return res.status(response.status || 400).json({ 
      message: response.data?.message ?? 'Internal Server Error'
    });
  }
}

export { changeMetadata };
