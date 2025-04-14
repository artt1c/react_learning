import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getAllComments} from "../servises/api.service";
import {IComment} from "../models/IComment";

type commentSliceType = {
  comments: IComment[];
}

const initialState: commentSliceType = {
  comments: [],
}

const loadComments = createAsyncThunk('commentSlice/loadComments', async (_, thunkAPI) => {
  try {
    const comments = await getAllComments();
    return thunkAPI.fulfillWithValue(comments)
  } catch (e) {
    return thunkAPI.rejectWithValue(e)
  }
});

export const commentSlice = createSlice({
  name: 'commentSlice',
  initialState: initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(loadComments.fulfilled, (state, action) => {
        state.comments = action.payload
      })
      .addCase(loadComments.rejected, (state, action) => {
        console.log(action.payload)
      })
});

export const commentActions = {
  ...commentSlice.actions,
  loadComments,
}