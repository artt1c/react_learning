import axios from "axios";
import {IUserWithToken} from "../models/IUserWithToken";
import {BaseResponseModelType} from "../models/BaseResponseModelType";
import {IProduct} from "../models/IProduct";
import {retrivelStorage} from "../helpers/helpers";
import {ITokenPair} from "../models/ITokenPair";

const axiosInstance = axios.create({
  baseURL: 'https://dummyjson.com/auth',
  headers: {}
});

axiosInstance.interceptors.request.use(request => {
  if (request.method?.toUpperCase() === "GET") {
    let token = retrivelStorage<IUserWithToken>('user').accessToken;
    request.headers.Authorization = 'Bearer ' + token;
  }
  return request;
})

type LoginData = {
  username: string,
  password: string,
  expiresInMins: number
}


export const login = async ({username, password, expiresInMins}:LoginData):Promise<IUserWithToken> => {
  const {data:userWithToken} = await axiosInstance.post<IUserWithToken>('login', {username, password, expiresInMins});
  localStorage.setItem('user', JSON.stringify(userWithToken));
  return userWithToken;
}

export const loadAuthProducts = async ():Promise<IProduct[] | undefined> => {
  const {data} = await axiosInstance.get<BaseResponseModelType>('/products',);
  return data.products
}

export const refresh = async () => {
  console.log("refresh");
  const iUserWithToken = retrivelStorage<IUserWithToken>('user');

  const {data:{accessToken, refreshToken}} = await axiosInstance.post<ITokenPair>('refresh', {
    refreshToken: iUserWithToken.refreshToken,
    expiresInMins: 1
  });
  iUserWithToken.accessToken = accessToken;
  iUserWithToken.refreshToken = refreshToken;
  localStorage.setItem('user', JSON.stringify(iUserWithToken));
}