import React, { useState, useEffect } from "react";
import MainLayout from "../../layouts/MainLayout";
import ForumsList from "../../components/ForumsList/ForumsList.js";

const ForumPage = () => {
  const [forum, setForum] = useState(null);
  const [isLoadingForum, setIsLoadingForum] = useState(true);
  const [hasErrorsLoadingForum, setHasErrorsLoadingForum] = useState(null);
  
  useEffect(() => {
    fetch("http://localhost:5000/api/test")
      .then((res) => {
        if (!res.ok) {
          throw Error ({message: "Count not GET data for that resource."});
        }
        return res.json();
      })
      .then((data) => {
        setForum(data);
        console.log(data);
        setIsLoadingForum(false);
      })
      .catch((err) => {
        setHasErrorsLoadingForum(err);
        setIsLoadingForum(false);
      });
  }, []);

  return (
    <MainLayout>
      <div className="ForumPage">
      { isLoadingForum ? <div>Loading...</div> : null }
      { hasErrorsLoadingForum ? <div>ERROR: { hasErrorsLoadingForum.message } </div> : null}
      { (isLoadingForum === false && !forum) ? <div>There is no forum</div> : null }
      { (isLoadingForum === false && forum) ? <ForumsList forum={forum}></ForumsList> : null }
      </div>
    </MainLayout>
  );
}

export default ForumPage;