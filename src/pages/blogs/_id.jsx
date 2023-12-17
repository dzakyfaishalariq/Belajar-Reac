import { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

function SinglePost(){
    // const params = useParams()
    // const [post, setPost] = useState(null)

    // useEffect (() =>{
    //     fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    //     .then((response)=>response.json())
    //     .then((json)=> setPost(json))
    // },[])// panggil sekali
    const post = useLoaderData()
    return (
        <>
        {/* kegunaan tandan tanya untuk mencegah api nya cress atau telat di panggil */}
            <h2>{post?.title}</h2>
            <div>
                {post?.body}
            </div>
        </>
    )
}
export default SinglePost;