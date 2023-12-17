import { Link,Outlet,NavLink } from "react-router-dom";
import "../styles/index.css";

function RootLayout () {
    return (
        <>
            <NavLink className={({isActive,isPending})=> isActive ? "active" : isPending ? "pending" : ""} style={{ marginRight: "5px", marginLeft: "5px" }} to="/">Home</NavLink> | 
            <NavLink className={({isActive,isPending})=> isActive ? "active" : isPending ? "pending" : ""} style={{ marginRight: "5px", marginLeft: "5px" }} to="/about">About</NavLink> | 
            <NavLink className={({isActive,isPending})=> isActive ? "active" : isPending ? "pending" : ""} style={{ marginRight: "5px", marginLeft: "5px" }} to="/blog">Blog</NavLink>
            <hr />
            {/* Menampilkan kontenya di sini : */}
            <Outlet></Outlet> 
        </>
    )
}
export default RootLayout;