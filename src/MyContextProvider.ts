import {createContext} from "react";
import {IUser} from "./models/IUser";

type StoreType = {
  userSlice: {
    allUsers: IUser[];
    user: IUser | null;
  }
}

export const defaultStoreValue:StoreType = {
  userSlice: {
    allUsers:[],
    user: null,
  }
}

export const MyContext = createContext<StoreType>(defaultStoreValue);