import React from "react";

import Post from "./Post";
import ValorantButtonLink from "../UI/Buttons/ValorantButtonLink";

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
                <Post key={post._id} post={post}></Post>
              ))}
              </>
            )}

          </div>
          <div className="topic-page__topic-foot ">
            <ValorantButtonLink href={`/topics/delete/${topic._id}`}>Delete Topic</ValorantButtonLink>
            <ValorantButtonLink href={`/posts/create/${topic._id}`}>Post Reply</ValorantButtonLink>
          </div>

        </div>
    </div>
  );
}

export default TopicList;