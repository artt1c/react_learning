import axios from "axios";
import {IDJResponse} from "../models/IDJResponse";
import {IRecipe} from "../models/IRecipe";

const axiosInstance = axios.create({
  baseURL: 'https://dummyjson.com',
  headers: {
    'Content-Type': 'application/json',
  }
});

export const apiService = {
  recipes: {
    getAll: async (page:number):Promise<IDJResponse & { recipes:IRecipe[]}> => {

      const limit = 10;
      const skip = (page - 1) * limit;

      const {data} = (await axiosInstance.get<IDJResponse & { recipes:IRecipe[] }>('/recipes', {
        params: {
          limit: limit,
          skip: skip
        }
      }));

      return data;
    }
  }
}