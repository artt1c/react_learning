import axios from "axios";
import {IUser} from "../models/IUser";
import {ITodo} from "../models/ITodo";

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

axiosInstance.interceptors.request.use((request) => {
  console.log(request.method);
  if (request.method === 'GET') {
    request.headers.set('Content-Type', 'application/json')
  }

  return request;
})

const getUsers = async ():Promise<IUser[]> => {
  const axiosResponse = await axiosInstance.get<IUser[]>('/users')
  return axiosResponse.data
}

const getTodosOfUser = async (user:IUser) => {
  const axiosResponse = await axiosInstance.get<ITodo[]>('/todos', {
    params: {userId: user.id}
  })
  return axiosResponse.data
}

export {
  getUsers,
  getTodosOfUser
}