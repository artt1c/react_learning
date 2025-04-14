import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "./user.slice";
import {useDispatch, useSelector} from "react-redux";
import {postSlice} from "./post.slice";
import {commentSlice} from "./comment.slice";

export const store = configureStore({
  reducer: {
    userReducer: userSlice.reducer,
    postReducer: postSlice.reducer,
    commentReducer: commentSlice.reducer,
  }
});

export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();
export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>();
