import { IInstaUser } from "./../types/instaUser"
import { model, Schema } from "mongoose"

const instaUserSchema: Schema = new Schema(
  {
    full_name: {
      type: String,
      required: true,
    },
    is_private: {
      type: Boolean,
      required: true,
    },
    pk: {
      type: String,
      required: true,
    },
    profile_pic_id: {
      type: String,
      required: true,
    },
    profile_pic_url: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

export default model<IInstaUser>('InstaUser', instaUserSchema)