import axios, {AxiosResponse} from "axios";
import {IPostForm} from "../models/IPostForm";

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
  }
});

export const apiService = {
  post: {
    createNewPost: async (newPost:IPostForm):Promise<AxiosResponse> => {
      return await axiosInstance.post<AxiosResponse>('/posts', {
        title: newPost.title,
        body: newPost.body,
        userId: newPost.userId,
      });
    }
  }
}