import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

function Blog(){
    // const [posts, setPost] = useState([]);
    // useEffect(()=>{
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then((response) => response.json())
    //     .then((json)=>setPost(json))
    // },[]);
    const posts = useLoaderData()
    return (
        <>
            <h2>My blog post</h2>
            {posts.map((item,index)=>(
                <div key={index}>
                    <Link to={`/blog/${item.id}`}>- {item.title}</Link>
                </div>
            ))}
        </>
    )
}

export default Blog;