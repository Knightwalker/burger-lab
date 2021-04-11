import React from "react";
import { useParams, useHistory } from "react-router-dom";

import MainLayout from "../../layouts/MainLayout";
import "./PostPage.css";

const TopicDeletePage = () => {
  const { topic_id } = useParams();
  const history = useHistory();

  /**
   * using WebAPi, HTMLFormElement
   * @see: https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement
  */
  const fDeleteTopic = async (e) => {
    e.preventDefault();

    try {
      const result = await fetch(`http://localhost:5000/api/v1/topics/delete/${topic_id}`, {
        method: "DELETE"
      });
      const response = await result.json();
      console.log(response);
    } catch (error) {
      console.log(error);
    }

    history.push("/");

  }

  const fGoBack = async () => {
    history.goBack();
  }

  return (
    <MainLayout>
      <div className="PostDeletePage">
        <div className="container">

          <div className="main__head">Delete Topic</div>
          <div style={{backgroundColor: "#ece8e1", padding: "10px"}}>
            <p>Are you sure you want to delete this topic?</p>
            <p>Warning: All posts will also be deleted!</p>
            <button onClick={fDeleteTopic}>Yes</button>
            <button onClick={fGoBack}>No</button>
          </div>

        </div>
      </div>
    </MainLayout>
  );
}

export default TopicDeletePage;