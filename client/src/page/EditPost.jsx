import React, { useEffect, useState } from "react";
import Heading from "../component/Heading";
import { Navigate, useParams } from "react-router-dom";
import Editor from "../component/Editor";

const EditPost = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [summery, setSummery] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");
  //   const [cover, setCover] = useState("");

  const [redirect, setRedirect] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/post/" + id).then((response) => {
      response.json().then((postInfo) => {
        // console.log(postInfo.postDoc)
        setTitle(postInfo.postDoc.title);
        setSummery(postInfo.postDoc.summery);
        setFiles(postInfo.postDoc.files);
        setContent(postInfo.postDoc.content);
      });
    });
  }, []);

  async function updatePost(ev) {
    ev.preventDefault();
    const data = new FormData();
    data.set("title", title);
    data.set("summery", summery);
    data.set('id',id);
    data.set("content", content);
    if (files?.[0]) {
      data.set("file", files?.[0]);
    }
    const response = await fetch("http://localhost:8080/post/" , {
      method: "PUT",
      body: data,
      credentials: "include",
    });
    if (response.ok) {
      setRedirect(true);
    }

    console.log(data);
  }

  if (redirect) {
    return <Navigate to={"/post/" + id} />;
  }

  return (
    <div>
      <Heading />

      <form onSubmit={updatePost}>
        <input
          type="title"
          placeholder={"Title"}
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
        />
        <input
          type="summery"
          placeholder={"Summery"}
          value={summery}
          onChange={(ev) => setSummery(ev.target.value)}
        />
        

        <input type="file"  onChange={(ev) => setFiles(ev.target.files)} />
        <Editor onChange={setContent} value={content} />
        <button>updatePost </button>
      </form>
    </div>
  );
};

export default EditPost;
