import React, { useState } from "react";
import Heading from "../component/Heading";

import { Navigate } from "react-router-dom";
import Editor from "../component/Editor";


export default function Createpost() {
  const [title, setTitle] = useState("");
  const [summery, setSummery] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");
  const [redirect, setRedirect] = useState(false);
async function createNewPost(ev){
    ev.preventDefault();
    const data = new FormData();
    data.set('title',title);
    data.set('summery',summery);
    data.set('content',content)
    data.set('file', files[0])    
  const response = await  fetch('http://localhost:8080/post',{
        method:'POST',
        body:data,
        credentials: 'include',
    })
   if(response.ok){
setRedirect(true)
   }
}

if(redirect){
  return <Navigate to={'/'}/>
}

  return (
    <div>
      <Heading />

      <form onSubmit={createNewPost}>
        <input
          type="title"
          placeholder={"Title"}
          value={title}
          onChange={ev=>setTitle(ev.target.value)}
          style={{
            border: "solid 1px #ccc",
            width: "100%",
            padding: "10px",
            margin: "10px",
          }}
        />
        <input
          type="summery"
          placeholder={"Summery"}
          value={summery}
          onChange={ev=>setSummery(ev.target.value)}
          style={{
            border: "solid 1px #ccc",
            width: "100%",
            padding: "10px",
            margin: "10px",
          }}
        />
        <input
          type="file"
          
          onChange={ev => setFiles(ev.target.files)}
          style={{
            border: "solid 1px #ccc",
            width: "100%",
            padding: "8px",
            margin: "10px",
          }}
        />
          <Editor value={content} onChange={setContent} />
        <button
          style={{
            width: "100%",
            backgroundColor: "black",
            color: "white",
            cursor: "pointer",
            padding: "10px",
            margin: "10px",
          }}
        >
          Create Post
        </button>
      </form>
    </div>
  );
}
