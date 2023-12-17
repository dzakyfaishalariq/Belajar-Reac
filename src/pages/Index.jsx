import { useState, useEffect } from "react";
import postsData from "../psot.json"
import Articel from "../components/Articel"
import Search from '../components/Search';
function Homepage(){
    const [posts,setPosts] = useState(postsData) // membuat variabel state untuk ditampung dan diubah secara render
    const [totalPost,setTotalPosts] = useState(0)
    const [externalPost,setExternalPost] = useState([])
    const onChangeSerchLuar = (value) => {
        const filterPost = postsData.filter(item => item.title.includes(value)) // filter data json
        setPosts(filterPost)
        setTotalPosts(filterPost.length)
    }
    // componen Didmount
    // componen DidUpdate
    // componen Willamount 
    // gunanya menggunakan useEffect untuk menjalankan kode ini terlebih dahulu
    // useEffect(()=>{ //dijalankan pertama kali dan berfungsi untuk meload API
    //     console.log('render')
    //     // menghasilkan dua render
    //     return () => {// componen amount
    //         console.log("clenup")
    //     }
    // }, [posts]); 
    // array kosong untuk memantau stet yang berjalan dan tidak akan mengulang lagi dan cuma berjalan pertamakali saat di render
    // bisa untuk pemantauan contoh [posts]
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json)=>setExternalPost(json))
    },[]);
    // useEffect(()=>{
    //   console.log("ada post baru")  
    // },[posts]) // ini dijalankan saat perubahan post saja
    // useEffect(()=>{
    //     console.log('render')
    // }) // ini akan jalan terus tiap ada yang merender
    return (
        <>
            <h1>Simpel Blog</h1>
            <Search onChangeSerch={onChangeSerchLuar} totalPost={totalPost}></Search>
            <hr />
            {posts.map(({title,tags,date,isNow}, index) => ( // loop
                <div key={index}>
                    <Articel {...{title,tags,date,isNow}}/>
                </div>
            ))}
            <hr />
            <h2>External Post</h2>
            {externalPost.map((item,index)=>(
                <div key={index}>-{item.title}</div>
            ))}
        </>
    )
    // return (
    //        <>
    //         <h1>Simpel Blog</h1>
    //         <div>Cari Articel : <input onChange={onChangeSerch} type="text" /></div>
    //         <hr />
    //         {posts.map((post) => ( // loop
    //             <div>
    //                 <Articel title={post.title} tags={post.tags} date={post.date}></Articel>
    //             </div>
    //         ))}
    //     </>
    // )
}

export default Homepage;