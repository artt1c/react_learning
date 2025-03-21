import axios from "axios";
import {BaseResponseType} from "../models/BaseResponseType";
import {IProduct} from "../models/IProducts";

const axiosInstance = axios.create({
  baseURL: 'https://dummyjson.com',
})

export const getProducts = async ():Promise<IProduct[]> => {
  const { data:{products} } = await axiosInstance.get<BaseResponseType & { products: IProduct[]}>("/product");
  return products;
}

export const getProduct = async (id:string):Promise<IProduct> => {
   return (await axiosInstance.get<IProduct>('/product/' + id)).data;
}