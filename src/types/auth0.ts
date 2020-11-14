import { InstaUser, Category } from "./insta";

export interface IToken {
  access_token: string,
  scope: string,
  expires_in: number,
  token_type: string
}

export interface UserMetadata {
  user: InstaUser,
  category: Category,
  price: {
    story: number,
    post: number,
  }
}