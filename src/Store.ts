import {IUser} from "./models/IUser";
import {create} from "zustand/react";

type StoreType = {
  userSlice: {
    allUsers: IUser[];
    loadUsers: (users:IUser[]) => void;
  },
  postSlice: {
    allPosts: any[],
    loadPosts: (posts:any[]) => void,
  }
}

export const useStore = create<StoreType>()((set) => {
  return {
    userSlice: {
      allUsers: [],
      loadUsers: (users:IUser[]) => {
        return set(state => ({
            ...state,
            userSlice: {
              ...state.userSlice,
              allUsers: users,
            }
        }))
      }
    },
    postSlice: {
      allPosts: [],
      loadPosts: (posts) => {
        return set((state) => {
          return {...state,
            postSlice: {
              ...state.postSlice,
              allPosts: posts
          }
          };
        })
      }
    }
  }
});