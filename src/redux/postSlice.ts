import {IPost} from "../models/IPost";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type PostSliceType = {
  posts: IPost[];
  post: IPost | null;
}

const postInitState: PostSliceType = {
  posts: [],
  post: null,
}

export const postSlice = createSlice({
  name: 'postSlice',
  initialState: postInitState,
  reducers: {
    loadPosts: (state, action:PayloadAction<IPost[]>) => {
      state.posts = action.payload;
    },
    loadPost: (state, action:PayloadAction<IPost>) => {
      state.post = action.payload;
    },

    removePost: (state, action:PayloadAction<number>) => {
      const id = action.payload;
      state.posts.splice(id-1, 1);
    }
  }
});

export const {loadPost, loadPosts, removePost} = postSlice.actions;