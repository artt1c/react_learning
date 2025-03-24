import axios from "axios";
import {IUser} from "../models/IUser";
import {IPosts} from "../models/IPost";
import {IComment} from "../models/IComment";

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

const getAllUsers = async ():Promise<IUser[]> => {
  return (await axiosInstance.get<IUser[]>('/users')).data;
}

const getAllPosts = async ():Promise<IPosts[]> => {
  return (await axiosInstance.get<IPosts[]>('/posts')).data;
}

const getComments = async ():Promise<IComment[]> => {
  return (await axiosInstance.get<IComment[]>('/comments')).data;
}

const getUserPosts = async (id:number):Promise<IPosts[]> => {
  return (await axiosInstance.get<IPosts[]>('/posts', {params:{userId: id}})).data;
}

const getPostComments = async (id:number):Promise<IComment[]> => {
  return (await axiosInstance.get<IComment[]>('/comments', {params:{postId: id}})).data;
}

export {
  getAllUsers,
  getAllPosts,
  getComments,
  getUserPosts,
  getPostComments,
};