import {IUser} from "../models/IUser";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getAllUsers} from "../servises/api.service";

type userSliceType = {
  users: IUser[],
  user: IUser | null,
}

const initialState: userSliceType = {
  users: [],
  user: null
}

const loadUsers = createAsyncThunk('userSlice/loadUsers', async (_, thunkAPI) => {
  try {
    const users = await getAllUsers();
    return thunkAPI.fulfillWithValue(users)
  } catch (e) {
    return thunkAPI.rejectWithValue(e)
  }
});

export const userSlice = createSlice({
  name: 'userSlice',
  initialState: initialState,
  reducers: {
    loadUser: (state, action:PayloadAction<IUser>) => {
      state.user = action.payload
    }
  },
  extraReducers: builder =>
    builder
      .addCase(loadUsers.fulfilled, (state, action) => {
        state.users = action.payload
      })
      .addCase(loadUsers.rejected, (state, action) => {
        console.log(action.payload)
      })
});

export const userActions = {
  ...userSlice.actions,
  loadUsers,
}