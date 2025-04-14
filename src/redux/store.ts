import {configureStore} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";
import {userSlice} from "./user.slice";

export const store = configureStore({
  reducer: {
    userReducer: userSlice.reducer
  }
});

export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();
export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>();