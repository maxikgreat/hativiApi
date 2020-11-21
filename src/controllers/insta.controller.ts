import { Request, Response } from 'express';

import { axiosInsta as axios } from '../axios/axiosInsta';
import { InstaUser } from '../types/insta';

interface RequestWithNickname extends Request{
  body: {
    nickname: string
  }
}

const data = {
  biography: 'Full stack developer',
  blocked_by_viewer: false,
  business_email: '',
  restricted_by_viewer: null,
  country_block: false,
  external_url: 'http://maxik.tech/',
  external_url_linkshimmed: 'https://l.instagram.com/?u=http%3A%2F%2Fmaxik.tech%2F&e=ATPir_-UrtVFkizA9QFymwvFW8ybDfMlPvjSfxbhJ2P9iXe4Du1v4jYIDuYCKMRUErCJqJT1ugmFneOI&s=1',
  edge_followed_by: { count: 458 },
  followed_by_viewer: false,
  edge_follow: { count: 345 },
  follows_viewer: false,
  full_name: 'Max Lavrov',
  has_ar_effects: false,
  has_clips: false,
  has_guides: false,
  has_channel: false,
  has_blocked_viewer: false,
  highlight_reel_count: 0,
  has_requested_viewer: false,
  id: '4207425438',
  is_business_account: true,
  is_joined_recently: false,
  business_category_name: 'General Interest',
  overall_category_name: null,
  category_enum: null,
  is_private: false,
  is_verified: false,
  edge_mutual_followed_by: { count: 0, edges: [] },
  profile_pic_url: 'https://scontent-frx5-1.cdninstagram.com/v/t51.2885-19/s150x150/60830820_448044719307622_7862965128944156672_n.jpg?_nc_ht=scontent-frx5-1.cdninstagram.com&_nc_ohc=gwzi9g0FBbcAX8gHqSd&_nc_tp=25&oh=f20ff8aa7a4d954d70ba337dcda81d13&oe=5FD3C9C5',
  profile_pic_url_hd: 'https://scontent-frx5-1.cdninstagram.com/v/t51.2885-19/s320x320/60830820_448044719307622_7862965128944156672_n.jpg?_nc_ht=scontent-frx5-1.cdninstagram.com&_nc_ohc=gwzi9g0FBbcAX8gHqSd&_nc_tp=25&oh=9f965e732e33c730901a540aaf12de0c&oe=5FD5EBB5',
  requested_by_viewer: false,
  username: 'lavrov_kh',
  connected_fb_page: null,
  edge_felix_video_timeline: {
    count: 0,
    page_info: { has_next_page: false, end_cursor: null },
    edges: []
  },
  edge_owner_to_timeline_media: {
    count: 26,
    page_info: {
      has_next_page: true,
      end_cursor: 'QVFERFBhUXc2MXM2Mk5tWlJlbHd2YzJ2bjdtN2xUc0E3NDVfS0gyODc5YnlyYXJFRWJCUmZhRGN6b0dwWkRNU1ZMdXpPajBBQmxtdzg0RWszcF82bDktYw=='
    },
    edges: [
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object]
    ]
  },
  edge_saved_media: {
    count: 0,
    page_info: { has_next_page: false, end_cursor: null },
    edges: []
  },
  edge_media_collections: {
    count: 0,
    page_info: { has_next_page: false, end_cursor: null },
    edges: []
  },
  edge_related_profiles: { edges: [] }
};

const checkUser = async (req: RequestWithNickname, res: Response) => {
  try {
    const { nickname } = req.body;
    if (!nickname) {
      return res.status(400).json({ message: 'Nickname is required '});
    }

    // 5 requests in a day

    // const { data } = await axios.get(`/user/${nickname}`);

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
    if (response.status === 404) {
      return res.status(404).json({ message: 'User not found' });
    }
    return res.status(400).json({
      message: response?.data?.message ?? 'Internal Server Error'
    });
  }
}

export { checkUser };
