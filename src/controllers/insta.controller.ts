import { Request, Response } from 'express';

import { axiosInsta as axios } from '../axios/axiosInsta';
import { axiosAuth0 } from '../axios/axiosAuth0';
import { InstaUser } from '../types/insta';

interface RequestWithNickname extends Request{
  body: {
    nickname: string,
    forceCheck: boolean | undefined
  }
}

const checkUser = async (req: RequestWithNickname, res: Response) => {
  try {
    const { nickname, forceCheck } = req.body;
    if (!nickname) {
      return res.status(400).json({ message: 'Username is required'});
    }
  
    const { data: users } = await axiosAuth0.get(`/api/v2/users?q=user_metadata.instagram.user.username:${nickname}&search_engine=v3`);
    
    if (users.length > 0 && !forceCheck) {
      return res.status(409).json({ message: 'Someone\'s already use this username'})
    }
    
    const { data } = await axios.get(`/user/${nickname}`);

    const user: InstaUser = {
      biography: data.biography,
      businessEmail: data.business_email,
      externalUrl: data.external_url,
      followedBy: data.edge_followed_by.count,
      follow: data.edge_follow.count,
      fullName: data.full_name,
      isBusinessAccount: data.is_business_account,
      businessCategoryName: data.business_category_name,
      isPrivate: data.is_private,
      photoUrl: data.profile_pic_url_hd,
      username: data.username,
    };

    return res.status(200).json(user);
  } catch ({ response }) {
    console.log(response);
    if (response?.status === 404) {
      return res.status(404).json({ message: 'Instagram user not found' });
    }
    return res.status(400).json({
      message: response?.data?.message ?? 'Internal Server Error'
    });
  }
}

export { checkUser };



