import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import UsersPage from "../pages/usersPage/UsersPage";
import PostsPage from "../pages/PostsPage";
import CommentsPage from "../pages/CommentsPage";
import UserFullInfoPage from "../pages/usersFullInfoPage/UserFullInfoPage";

export const router = createBrowserRouter([
  {path: '/', element: <MainLayout/>, children: [
      {index: true, element: <div>Home</div>},
      {path: 'users', element: <UsersPage/>, children: [
          {path:':id', element: <UserFullInfoPage/>}
        ]
      },
      {path: 'posts', element: <PostsPage/>},
      {path: 'comments', element: <CommentsPage/>},
    ]
  }
]);