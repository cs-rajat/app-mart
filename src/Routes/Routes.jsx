import { createBrowserRouter } from "react-router-dom";

import Home from "../Pages/Home";
import Products from "../Pages/Products";
import MainLayouts from "../Layouts/MainLayouts";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts/>,
    errorElement: <ErrorPage/>,
    hydrateFallbackElement: <p>Loading ...</p>,
    children:[
            {
             index:true,
             Component: Home,
             loader: ()=> fetch('./appData.json')
            },
             {
              path: "/products",
              Component: Products,
             },
    ]
  },
//   {
//     path:'*',
//     element: <ErrorPage/>
//   }
 
 
]);

export default router;
