import React from "react";
import { Link } from "react-router-dom";

import ValorantButtonLink from "../../UI/Buttons/ValorantButtonLink";
import "./TopicList.css";

const TopicList = (props) => {
  const topic = props.topic;

  return (
    <div className="forums">
        <div className="topic" key={topic._id}>
          <div className="topic-page__topic-head">{topic.name}</div>
          <div className="topic-page__topic-body">

            {(topic.stats.posts_count <= 0) ? (
              <p>There are no posts in this topic.</p>
            ) : (
              <>
              {topic.posts.map((post) => (
                <div className="topic-page__post" key={post._id}>
                  <div className="topic-page__post-row">
                    <div className="user-container">
                      <img loading="lazy" src={post.user.img_url} alt={post.user.username}></img>
                      <div>{post.user.username}</div>
                    </div>
                    <div className="post__main">
                      <div className="post__head">{post.created_at}</div>
                      <div className="post__body">{post.content}</div>
                    </div>
                  </div>
                  <div className="topic-page__post-foot">
                    <Link to={`/posts/edit/${post._id}`}><img src="/assets/btn_edit.png" alt="edit"></img></Link>
                    <Link to={`/posts/delete/${post._id}`}><img src="/assets/btn_delete.png" alt="delete"></img></Link>
                  </div>
                </div>
              ))}
              </>
            )}

          </div>
          <div className="topic-page__topic-foot ">
            <ValorantButtonLink href={`/posts/create/${topic._id}`}>Post Reply</ValorantButtonLink>
          </div>
          
        </div>
    </div>
  );
}

export default TopicList;