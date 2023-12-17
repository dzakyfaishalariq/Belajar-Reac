import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Homepage from "../pages/Index";
import About from "../pages/About";
import Blog from "../pages/blogs";
// penggunaan react router
export const router = createBrowserRouter([
    {
        path:"/",
        element: <RootLayout></RootLayout>,
        children:[
            {
                path:"/",
                element: <Homepage></Homepage>
            },
            {
                path:"/blog",
                element: <Blog></Blog>
            },
            {
                path:"/about",
                element: <About></About>
            }
        ]
    },
    // {
    //     path:"/about",
    //     element:<About></About>
    // }
])