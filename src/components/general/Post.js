import React from "react";
import { Link } from "react-router-dom";

const Post = (props) => {
  const post = props.post;
  const created_at = new Intl.DateTimeFormat("en-US", { dateStyle: "medium", timeStyle: "short" })
    .format(new Date(post.created_at));

  return (             
    <div className="topic-page__post">
      <div className="topic-page__post-row">
        <div className="user-container">
          <img loading="lazy" src={post.user.img_url} alt={post.user.username}></img>
          <div>{post.user.username}</div>
        </div>
        <div className="post__main">
          <div className="post__head">
            <div>
              <p>{post.title}</p>
              <p>by {post.user.username} on {created_at}</p>
            </div>
          </div>
          <div className="post__body">{post.content}</div>
        </div>
      </div>
      <div className="topic-page__post-foot">
        <Link to={`/posts/edit/${post._id}`}><img src="/assets/btn_edit.png" alt="edit"></img></Link>
        <Link to={`/posts/delete/${post._id}`}><img src="/assets/btn_delete.png" alt="delete"></img></Link>
      </div>
    </div>
  );
}

export default Post;