import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import CustomErrorLayout from "../layouts/CustomErrorLayout";
import ProductsPage from "../pages/ProductsPage";
import RecieptsPage from "../pages/RecieptsPage";
import ProductDetailsPageState from "../pages/ProductDetailsPageState";

export const router = createBrowserRouter([
  { path: '/', element: <MainLayout/>, children: [
      {index: true, element: <HomePage/>},
      {path:'products', element: <ProductsPage/>},
      {path:'products/:id', element: <ProductDetailsPageState/>},
      {path:'recipes', element: <RecieptsPage/>},
    ],
    errorElement: <CustomErrorLayout/>
  },
]);