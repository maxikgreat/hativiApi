import axios from '../axios';


export default class InstaUser {
  private data: any;

  public async getUser(name: string) {
    try {
      const response = await axios.get('/search/lavrov_kh');
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  }



}