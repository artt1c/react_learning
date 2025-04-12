import {IUser} from "../models/IUser";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type UserSliceType = {
  users:IUser[],
  user:IUser | null,
}

const userInitState: UserSliceType = {
  users:[],
  user: null
}

export const userSlice = createSlice({
  name: 'userSlice',
  initialState: userInitState,
  reducers: {
    loadUsers: (state, action:PayloadAction<IUser[]>) => {
      state.users = action.payload;
    },

    loadUser: (state, action:PayloadAction<IUser>) => {
      state.user = action.payload;
    }
  }
});

export const {loadUser, loadUsers} = userSlice.actions;