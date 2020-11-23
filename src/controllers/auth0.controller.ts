import { Request, Response } from 'express';

import { axiosAuth0 as axios } from '../axios/axiosAuth0';
import { UserMetadata } from '../types/auth0';

export interface MetadataBody {
  userId: string,
  metadata: UserMetadata,
}

export interface EmailBody {
  userId: string,
  newEmail: string,
}

export interface NewPassBody {
  userId: string,
  email: string,
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

const changeEmail = async (req: Request, res: Response) => {
  try {
    const { userId, newEmail }: EmailBody = req.body;
    const response = await axios.patch(`/api/v2/users/${userId}`, { email: newEmail });
    return res.status(response.status || 200).json({ message: 'Changed' });
  } catch ({ response }) {
    return res.status(response.status || 400).json({ 
      message: response.data?.message ?? 'Internal Server Error'
    });
  }
}

const changePass = async (req: Request, res: Response) => {
  try {
    const { userId }: NewPassBody = req.body;
    const { data, status } = await axios.post(`/api/v2/tickets/password-change`, { 
      user_id: userId, 
      // TODO CHANGE IN PROD
      // result_url: 'localhost:3000/setting' 
    });

    return res.status(status || 200).json(data);
  } catch ({ response }) {
    return res.status(response.status || 400).json({ 
      message: response.data?.message ?? 'Internal Server Error'
    });
  }
}

export { changeMetadata, changeEmail, changePass };
