import { Document } from "mongoose"

export interface IInstaUser extends Document {
  full_name: string,
  is_private: boolean,
  pk: string,
  profile_pic_id: string,
  profile_pic_url: string,
  username: string
}