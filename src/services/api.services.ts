import axios, {AxiosResponse} from "axios";
import {IUserWithToken} from "../models/IUserWithToken";
import {IUser} from "../models/IUser";
import {BaseResponseType} from "../models/BaseResponseType";
import {retrivelStorage} from "../helpers/helpers";
import {ITokenPair} from "../models/ITokenPair";

const axiosInstance = axios.create({
  baseURL: 'https://dummyjson.com/auth',
  headers: {}
});

axiosInstance.interceptors.request.use(request => {
  if (request.method?.toUpperCase() === 'GET') {
    const token = retrivelStorage<IUserWithToken>('user').accessToken
    request.headers.Authorization = 'Bearer ' + token
  }
  return request;
})

interface ILoginData {
  username: string;
  password: string;
  expiresInMins: number
}

export const apiServices = {
  user: {
    login: async ({username, password, expiresInMins}:ILoginData):Promise<IUserWithToken | undefined> => {
      try {
        const {data: userWithToken} = await axiosInstance.post<IUserWithToken>('/login', {username, password, expiresInMins});

        localStorage.setItem('user', JSON.stringify(userWithToken));

        console.log('logged');

        return userWithToken;
      } catch {
        console.log('invalid login or password');
      }
    },

    refresh: async () => {
      console.log('refresh');
      try {
        const userWithToken = retrivelStorage<IUserWithToken>('user');

        const {data: newTokens} = await axiosInstance.post<ITokenPair>('/refresh', {
          refreshToken: userWithToken.refreshToken,
          expiresInMins: 1
        })

        userWithToken.accessToken = newTokens.accessToken;
        userWithToken.refreshToken = newTokens.refreshToken;

        localStorage.setItem('user', JSON.stringify(userWithToken));
        return true;
      } catch (error) {
        console.log('refresh error');
        return false;
      }
    }
  },

  authResources: {
    users: {
      getFullResponse: async ():Promise<AxiosResponse<BaseResponseType & {users: IUser[]}>> => {
        return await axiosInstance.get<BaseResponseType & { users: IUser[] }>('/users')
      }
    }
  }
}