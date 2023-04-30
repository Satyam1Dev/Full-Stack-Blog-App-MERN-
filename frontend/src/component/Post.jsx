import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

function Post({ _id, title, summery, content,cover, createdAt, author }) {
  return (
    <div>
      <div className="post">
        <div className="image">
          <Link to={`/post/${_id}`}>
            <img src={'http://localhost:8080/'+cover} alt="" width={300} height={200} />
          </Link>
        </div>
        <div className="content">
        <Link to={`/post/${_id}`}>
          <h2>{title}</h2>
          </Link>
          <p className="summery">{summery}</p>
          <p className="info">
            <Link className="author">  {author?.username} </Link>
            <time>{format(new Date(createdAt), 'MMM d, yyyy HH:mm')}</time>
          </p>

        

        </div>
      </div>
    </div>
  );
}

export default Post;
