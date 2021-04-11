import { Link } from "react-router-dom";

const ForumList = (props) => {
  const forum = props.forum;
  console.log(forum);

  return (
    <div className="forums">
      {forum.map((parent) => (
        <div className="container-forum" key={parent._id}>
          <div className="container-forum__head">{parent.name}</div>
          <div className="container-forum__body">

            {parent.topics.map((child) => (
              <div className="container-topic" key={child._id}>
                <div>
                  <img src="https://i.servimg.com/u/f39/13/74/09/43/old10.png" alt=""></img>
                </div>
                <div className="container-topic__item2">
                  <Link to={`/topic/${child.slug}`}><div>{child.name}</div></Link>
                  <div className="topic__author">Started by {child.created_by}</div>
                </div>
                <div className="container-topic__item3">
                  <p>{child.stats.posts_count} Replies</p>
                  <p>{child.stats.topic_views} Views</p>
                </div>
                <div>Last User Posted: {child.last_post_user}</div>
              </div>
            ))}

          </div>
          <div className="container-forum__foot">
            <Link to={`/topics/create/${parent._id}`}><img src="/assets/btn_new-topic.png" alt="new-topic"></img></Link>
          </div>

        </div>
      ))}
    </div>
  );
}

export default ForumList;