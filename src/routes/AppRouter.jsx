import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/Homepage";
import ProductPage from "../pages/ProductPage";

const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout/>,
    children:[
      {
        path:'/',
        element:<Homepage/>
      },
      {
        path:'/product/plant',
        element:<ProductPage/>
      }
    ]
  },
]);

export default router;
