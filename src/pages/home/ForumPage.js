import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import MainLayout from "../../layouts/MainLayout";
import ForumList from "../../components/ForumList/ForumList.js";
import "./ForumPage.css";

const ForumPage = () => {
  const { slug } = useParams();

  const [forum, setForum] = useState(null);
  const [isLoadingForum, setIsLoadingForum] = useState(true);
  const [hasErrorsLoadingForum, setHasErrorsLoadingForum] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/forums/${slug}`)
      .then((res) => {
        if (!res.ok) {
          throw Error("Count not GET data for that resource.");
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
  }, [slug]);

  return (
    <MainLayout>
      <div className="ForumPage">
        <div className="container">
          {isLoadingForum ? <div>Loading...</div> : null}
          {hasErrorsLoadingForum ? <div>ERROR: {hasErrorsLoadingForum.message} </div> : null}
          {(isLoadingForum === false && !forum) ? <div>There is no forum</div> : null}
          {(isLoadingForum === false && forum) ? <ForumList forum={forum}></ForumList> : null}
        </div>
      </div>
    </MainLayout>
  );
}

export default ForumPage;