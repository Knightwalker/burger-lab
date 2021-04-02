import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import MainLayout from "../../layouts/MainLayout";
import TopicList from "../../components/general/TopicList/TopicList.js";

const TopicPage = () => {
  const { slug } = useParams();

  const [topic, setTopic] = useState(null);
  const [isLoadingTopic, setIsLoadingTopic] = useState(true);
  const [hasErrorsLoadingTopic, setHasErrorsLoadingTopic] = useState(null);
  
  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/topics/${slug}`)
      .then((res) => {
        if (!res.ok) {
          // console.log('err');
          throw new Error({message: "Count not GET data for that resource."});
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setTopic(data);
        setIsLoadingTopic(false);
      })
      .catch((err) => {
        // console.log(err);
        setHasErrorsLoadingTopic(err);
        setIsLoadingTopic(false);
      });
      console.log("cycle")
  }, [slug]);

  const fPostReply = () => {
    console.log("kru");
  }

  return (
    <MainLayout>
      <div className="TopicPage">
      { isLoadingTopic ? <div>Loading...</div> : null }
      { hasErrorsLoadingTopic ? <div>ERROR: { hasErrorsLoadingTopic.message } </div> : null}
      { (isLoadingTopic === false && !topic) ? <div>There are no forums</div> : null }
      { (isLoadingTopic === false && topic) ? <TopicList topic={topic} functions={{fPostReply}}></TopicList> : null }
      </div>
    </MainLayout>
  );
}

export default TopicPage;