import React, {useState, useEffect } from 'react';
import Post from '../component/Post';
import Heading from '../component/Heading';

function Home() {

const [posts,setPosts] = useState([])

    useEffect(()=>{
        fetch('http://localhost:8080/post').then(response=>{
           response.json().then(posts=>{
           setPosts(posts)
           console.log(posts)
           });
        });
    },[])

    return (
        <div>
    <Heading/>
      {posts.length > 0 && posts.map(post =>(
        <Post   {...post}/>
      ))}
     
        </div>
    );
}

export default Home;