const ForumList = (props) => {
  const forums = props.forums;

  return (
    <div>
      {forums.map((forum) => ( 
        <div key={forum._id}>
          <div>{forum.name}</div>
          <button onClick={() => props.fDeleteForum(forum._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default ForumList;