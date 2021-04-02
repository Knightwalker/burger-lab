import ValorantButton from "../../UI/Buttons/ValorantButton";
import "./TopicList.css";

const TopicList = (props) => {
  const topic = props.topic;

  return (
    <div className="forums">
        <div className="topic" key={topic._id}>
          <div className="topic__name">{topic.name}</div>
          <div className="topic__body">

            {topic.posts.map((post) => (
              <div className="post" key={post._id}>
                <div className="user-container">
                  <img loading="lazy" src={post.user.img_url} alt={post.user.username}></img>
                  <div>{post.user.username}</div>
                </div>
                <div className="post__main">
                  <div className="post__head">{post.created_on}</div>
                  <div className="post__body">{post.content}</div>
                </div>
              </div>
            ))}

          </div>
          <div className="topic__foot">
            <ValorantButton onClick={props.functions.fPostReply}>Post Reply</ValorantButton>
          </div>
        </div>
    </div>
  );
}

export default TopicList;