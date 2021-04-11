import React, { useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { AuthenticationContext } from "../../contexts/AuthenticationContext";

import MainLayout from "../../layouts/MainLayout";
import ValorantButton from "../../components/UI/Buttons/ValorantButton";
import "./PostPage.css";

const PostCreatePage = () => {
  const { topic_id } = useParams();
  const history = useHistory();
  const authenticationContext = useContext(AuthenticationContext);
  const { bUserIsAuthenticated, user_id, username } = authenticationContext.objUser;

  /**
   * using WebAPi, HTMLFormElement
   * @see: https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement
  */
  const fPostCreate = async (e) => {
    // Stage 1. Guards
    e.preventDefault();
    if (!bUserIsAuthenticated) { return; }

    const formData = document.forms["post-create-page__form"].elements;
    const title = formData["post-create-page__form-title"].value || "";
    const content = formData["post-create-page__form-content"].value || "";

    const data = {
      user_id: user_id,
      title: title,
      content: content,
      username: username
    }

    try {
      const result = await fetch(`http://localhost:5000/api/v1/posts/create/${topic_id}`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const response = await result.json();
      console.log(response);
    } catch (error) {
      console.log(error);
    }

    history.goBack();

  }

  return (
    <MainLayout>
      <div className="PostCreatePage">
        <div className="container">
          <div className="main__head">New Post</div>

          <form id="post-create-page__form">
            <div className="container-fluid">
              <div className="row pb-1">
                <div className="col-2 text-end">
                  <label htmlFor="post-create-page__form-title">Post title</label>
                </div>
                <div className="col">
                  <input id="post-create-page__form-title" type="text" />
                </div>
              </div>

              <div className="row">
                <div className="col-2 text-end">
                  <label htmlFor="post-create-page__form-content">Message</label>
                </div>
                <div className="col">
                  <textarea id="post-create-page__form-content" className="post-create-page__form-content"></textarea>
                </div>
              </div>

              <div className="row">
                <div className="col-2 text-end">
                  <p>Information</p>
                </div>
                <div className="col">
                  <p>HTML is ON</p>
                  <p>BBCode is ON</p>
                  <p>Smiles are OFF</p>
                  <ValorantButton onClick={fPostCreate}>Send</ValorantButton>
                </div>
              </div>
            </div>
          </form>

        </div>
      </div>
    </MainLayout>
  );
}

export default PostCreatePage;