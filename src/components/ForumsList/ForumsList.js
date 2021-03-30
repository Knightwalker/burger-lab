import { Link } from "react-router-dom";
import "./ForumsList.css";

const ForumsList = (props) => {
  const forumsData = props.forums;

  return (
    <div className="forums">
      {forumsData.map((parent) => ( 
        <div className={`${parent.type} container-parent`} key={parent._id}>
          <div className="container-parent__name">{parent.name}</div>
          <div className="container-parent__body">
          
            {parent.forums.map((child) => (
              <div className={`${child.type} container-child`} key={child._id}>
                <div>
                  <img src="https://i.servimg.com/u/f39/13/74/09/43/old10.png" alt=""></img>
                </div>
                <div>
                  <img className="forum__img" src={child.img_url} alt=""></img>
                </div>
                <div className="forum__item3">
                  <Link to={`/forum/${child.slug}`}><div className={child.type + "__name"}>{child.name}</div></Link>
                  <div className={child.type + "__description"}>{child.description}</div>
                </div>
              </div>
            ))}

          </div>
        </div>
      ))}
    </div>
  );
}

export default ForumsList;