import {create} from "zustand/react";
import {IUser} from "./models/IUser";
import {IPost} from "./models/IPost";
import {IComment} from "./models/IComment";

type StoreType = {
  userSlice: {
    allUsers: IUser[],
    loadUsers: (users:IUser[]) => void
  },

  postSlice: {
    allPosts: IPost[],
    loadPosts: (posts:IPost[]) => void,
    singleUserPosts: IPost[],
    loadSingleUserPosts: (userId:number) => void
  },

  commentSlice: {
    allComments: IComment[],
    loadComments: (comments:IComment[]) => void,
    singlePostComments: IComment[],
    loadSinglePostComments: (postId:number) => void
  }
}

export const useStore = create<StoreType>()(set => ({
  userSlice: {
    allUsers: [],
    loadUsers: (users:IUser[]) => {
      return set(state => ({
        ...state,
        userSlice: {
          ...state.userSlice,
          allUsers: users
        }
      }))
    }
  },

  postSlice: {
    allPosts: [],
    loadPosts: (posts:IPost[]) => {
      return set(state => ({
        ...state,
        postSlice: {
          ...state.postSlice,
          allPosts: posts
        }
      }))
    },
    singleUserPosts: [],
    loadSingleUserPosts: (userId:number) => {
      return set(state => ({
        ...state,
        postSlice: {
          ...state.postSlice,
          singleUserPosts: state.postSlice.allPosts.filter((post:IPost) => post.userId === userId)
        }
      }))
    }
  },

  commentSlice: {
    allComments: [],
    loadComments: (comments:IComment[]) => {
      return set (state => ({
        ...state,
        commentSlice: {
          ...state.commentSlice,
          allComments: comments
        }
      }))
    },
    singlePostComments: [],
    loadSinglePostComments: (postId) => {
      return set(state => ({
        ...state,
        commentSlice: {
          ...state.commentSlice,
          singlePostComments: state.commentSlice.allComments.filter((comment:IComment) => comment.postId === postId)
        }
      }))
    }
  }
}));