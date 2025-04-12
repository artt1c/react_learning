
import {configureStore} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";
import {userSlice} from "./user.slice";
import {postSlice} from "./postSlice";

export const store = configureStore({
  reducer: {
    userSlice: userSlice.reducer,
    postSlice: postSlice.reducer
  }
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector = useSelector.withTypes<RootState>()