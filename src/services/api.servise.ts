import axios from "axios";
import {IUser} from "../models/IUsers";
import {IPost} from "../models/IPosts";

const axiosInstance = axios.create({
  baseURL: 'https://dummyjson.com/',
})

export const getAllUsers = async ():Promise<IUser[]> => {
  const axiosResponse = await axiosInstance.get<{ users: IUser[] }>('/users')
  return axiosResponse.data.users;
}

export const getPostsOfUser = async (user:IUser):Promise<IPost[]> => {
  const axiosResponse = await axiosInstance.get<{ posts: IPost[] }>(`/users/${user.id}/posts`);
  return axiosResponse.data.posts;
}