import {createAsyncThunk, createSlice, isRejected, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../models/IUser";

type userSliceType = {
  users: IUser[];
  user: IUser | null;
}

const userInitState:userSliceType = {
  users: [],
  user: null,
}


const loadUsers = createAsyncThunk('userSlice/loadUsers', async (_, thunkAPI) => {
  try {
    const usersFromApi = await fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json());
    return thunkAPI.fulfillWithValue(usersFromApi)
  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
});

const loadUser = createAsyncThunk('userSlice/loadUser', async (id:number, thunkAPI) => {
  try {
    const user = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
      .then(res => res.json());
    return thunkAPI.fulfillWithValue(user)
  } catch (e) {
    return thunkAPI.rejectWithValue(e)
  }
});

export const userSlice = createSlice({
  name: 'userSlice',
  initialState: userInitState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(loadUsers.fulfilled, (state, action:PayloadAction<IUser[]>) => {
        state.users = action.payload
      })
      .addCase(loadUsers.rejected, (state, action:PayloadAction<any>) => {
        console.log(action.payload)
      })
      .addCase(loadUser.fulfilled, (state, action:PayloadAction<IUser>) => {
        state.user = action.payload
      })
      .addCase(loadUser.rejected, (state, action) => {
        console.log(action.payload)
      })
      .addMatcher(isRejected(loadUsers, loadUser), (state, action) => {
        // console.log(action.payload) // For match thunks
      })
});

export const userSliceActions = {
  ...userSlice.actions,
  loadUsers,
  loadUser
}