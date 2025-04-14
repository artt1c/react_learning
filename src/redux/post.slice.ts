import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getAllPosts} from "../servises/api.service";
import {IPosts} from "../models/IPost";

type postSliceType = {
  posts: IPosts[],
}

const initialState: postSliceType = {
  posts: [],
}

const loadPots = createAsyncThunk('postSlice/loadPots', async (_, thunkAPI) => {
  try {
    const posts = await getAllPosts();
    return thunkAPI.fulfillWithValue(posts)
  } catch (e) {
    return thunkAPI.rejectWithValue(e)
  }
});

export const postSlice = createSlice({
  name: 'postSlice',
  initialState: initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(loadPots.fulfilled, (state, action) => {
        state.posts = action.payload
      })
      .addCase(loadPots.rejected, (state, action) => {
        console.log(action.payload)
      })
});

export const postActions = {
  ...postSlice.actions,
  loadPots,
}