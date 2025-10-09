import { createBrowserRouter } from "react-router-dom";

import Home from "../Pages/Home";
import Products from "../Pages/Products";
import MainLayouts from "../Layouts/MainLayouts";
import ErrorPage from "../Pages/ErrorPage";
import ProductDetails from "../Pages/ProductDetails";
import InstalledApps from "../Pages/InstalledApps";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts/>,
    
    hydrateFallbackElement: <p>Loading ...</p>,
    children:[
            {
             index:true,
             Component: Home,
             
            },
             {
              path: "/products",
              Component: Products,
             },
             {
              path: "/product/:id",
              Component: ProductDetails,
             },
              {
              path: "/installed", 
              Component: InstalledApps,
             },
             {
              path: "*",
              Component: ErrorPage,
            },
             
    ]
  },
//   {
//     path:'*',
//     element: <ErrorPage/>
//   }
 
 
]);

export default router;
