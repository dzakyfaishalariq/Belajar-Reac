import { useEffect, useState } from "react";

function Blog(){
    const [posts, setPost] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json)=>setPost(json))
    },[]);
    return (
        <>
            <h2>My blog post</h2>
            {posts.map((item,index)=>(
                <div key={index}>-{item.title}</div>
            ))}
        </>
    )
}

export default Blog;