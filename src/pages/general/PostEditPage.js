import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

import MainLayout from "../../layouts/MainLayout";
import ValorantButton from "../../components/UI/Buttons/ValorantButton";
import "./PostPage.css";

const PostEditPage = () => {
  const { post_id } = useParams();
  const history = useHistory();

  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/posts/${post_id}`)
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not GET data for that resource.");
        }
        return res.json();
      })
      .then((data) => {
        setPost(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [post_id]);

  /**
   * using WebAPi, HTMLFormElement
   * @see: https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement
  */
  const fPostEdit = async (e) => {
    e.preventDefault();
    const formData = document.forms["post-create-page__form"].elements;
    const title = formData["post-create-page__form-title"].value || "";
    const content = formData["post-create-page__form-content"].value || "";

    const data = {
      title: title,
      content: content
    }

    // TODO - server implementation
    try {
      const result = await fetch(`http://localhost:5000/api/v1/posts/edit/${post_id}`, {
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
      <div className="PostEditPage">
        <div className="container">

          <div className="main__head">Edit Post</div>

          {post ? (
            <form id="post-create-page__form">
              <div className="container-fluid">
                <div className="row pb-1">
                  <div className="col-2 text-end">
                    <label htmlFor="post-create-page__form-title">Post title</label>
                  </div>
                  <div className="col">
                    <input id="post-create-page__form-title" type="text" defaultValue={post.title} />
                  </div>
                </div>

                <div className="row">
                  <div className="col-2 text-end">
                    <label htmlFor="post-create-page__form-content">Message</label>
                  </div>
                  <div className="col">
                    <textarea id="post-create-page__form-content" className="post-create-page__form-content" defaultValue={post.content}></textarea>
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
                    <ValorantButton onClick={fPostEdit}>Send</ValorantButton>
                  </div>
                </div>
              </div>
            </form>
          ) : (
            <div>Loading...</div>
          )}

        </div>
      </div>
    </MainLayout>
  );
}

export default PostEditPage;