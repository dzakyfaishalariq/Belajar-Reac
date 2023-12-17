import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Homepage from "../pages/Index";
import About from "../pages/About";
import Blog from "../pages/blogs";
import Post from "../pages/blogs/_id"
import { posts, postById } from "../apis/loaders";
import ErrorPage from "../components/ErrorPage";
// penggunaan react router
export const router = createBrowserRouter([
    {
        path:"/",
        element: <RootLayout></RootLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element: <Homepage></Homepage>
            },
            {
                path:"/blog",
                element: <Blog></Blog>,
                loader:posts
            },
            {
                path:"/blog/:id",
                element: <Post></Post>,
                loader:postById
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