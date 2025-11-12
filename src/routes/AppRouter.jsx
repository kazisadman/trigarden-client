import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/Homepage";
import ProductPage from "../pages/ProductPage";
import BlogPage from "../pages/BlogPage";
import BlogMainLayout from "../layout/BlogMainLayout";
import BlogDetailPage from "../pages/BlogDetailPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import ProductMainLayout from "../layout/ProductMainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/product",
        element: <ProductMainLayout />,
        children:[
          {
            path:':category',
            element:<ProductPage/>
          },
          {
            path:':category/:name',
            element:<ProductDetailPage/>
          }
        ]
      },
      {
        path: "/blog",
        element: <BlogMainLayout />,
        children: [
          {
            path: "",
            element: <BlogPage />,
          },
          {
            path: ":id",
            element: <BlogDetailPage />,
          },
        ],
      },
    ],
  },
]);

export default router;
