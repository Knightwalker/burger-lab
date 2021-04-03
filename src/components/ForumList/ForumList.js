import { Link } from "react-router-dom";

const ForumList = (props) => {
  const forum = props.forum;

  return (
    <div className="forums">
      {forum.map((parent) => (
        <div className={`${parent.type} container-parent`} key={parent._id}>
          <div className="container-parent__name">{parent.name}</div>
          <div className="container-parent__body">

            {parent.topics.map((child) => (
              <div className="topic container-child" key={child._id}>
                <div>
                  <img src="https://i.servimg.com/u/f39/13/74/09/43/old10.png" alt=""></img>
                </div>
                <div className="forum__item3">
                  <Link to={`/topic/${child.slug}`}><div>{child.name}</div></Link>
                  <div className="topic__author">Started by {child.created_by}</div>
                </div>
                <div className="forum__topic-stats">
                  <p>{child.stats.posts_count} Replies</p>
                  <p>{child.stats.topic_views} Views</p>
                </div>
                <div>Last User Posted - WIP</div>
              </div>
            ))}

          </div>
        </div>
      ))}
    </div>
  );
}

export default ForumList;