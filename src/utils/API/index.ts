import axios from "axios";
import { IPosts } from "../../types/types";

export default class PostService {
  static async getInteresting(limit = 9, page = 1) {
    const response = await axios.get<IPosts[]>(
      "https://jsonplaceholder.typicode.com/photos",
      {
        params: {
          _limit: limit,
          _page: page,
        },
      }
    );
    return response;
  }
}