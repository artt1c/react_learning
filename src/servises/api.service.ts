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

const getAllComments = async ():Promise<IComment[]> => {
  return (await axiosInstance.get<IComment[]>('/comments')).data;
}

export {
  getAllUsers,
  getAllPosts,
  getAllComments,
};