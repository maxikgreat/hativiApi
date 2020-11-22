import { InstaUser, Category } from "./insta";

export interface IToken {
  access_token: string,
  scope: string,
  expires_in: number,
  token_type: string
}

export interface UserMetadata {
  instagram?: InstagramMetadata,
  tiktok?: any,
  contactInfo?: ContactInfoMetadata
}

export interface InstagramMetadata {
  user: InstaUser,
  category: Category,
  price: {
    story: number,
    post: number,
  },
  desc: string,
}

export interface ContactInfoMetadata {
  contactEmail: string,
  messengers: {
    whatsApp: string,
    facebook: string,
  }
}