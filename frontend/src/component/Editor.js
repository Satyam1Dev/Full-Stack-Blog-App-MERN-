import React from 'react'
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";


const Editor = ({value, onChange}) => {
    const modules = {
        toolbar: [
          [{ header: [1, 2, false] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
          ],
          ["link", "image"],
          ["clean"],
        ],
      };
      
      const formats = [
        "header",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "list",
        "bullet",
        "indent",
        "link",
        "image",
      ];
  return (
    <div>
        <ReactQuill
            value={value}
            onChange={onChange}
              theme="snow"
              style={{ width: "100%", margin: "10px" }}
              modules={modules}
              formats={formats}
            />
    </div>
  )
}

export default Editor