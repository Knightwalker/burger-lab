import React from "react";
import { useParams } from "react-router-dom";

import MainLayout from "../../layouts/MainLayout";
import ValorantButton from "../../components/UI/Buttons/ValorantButton";
import "./PostCreatePage.css";

const PostCreatePage = () => {
  const { topic_id } = useParams();
  
  /**
   * using WebAPi, HTMLFormElement
   * @see: https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement
  */
  const fPostCreate = async (e) => {
    e.preventDefault();
    const formData = document.forms["post-create-page__form"].elements;
    const content = formData["post-create-page__form-content"].value;
    
    const data = {
      content: content
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

  }

  return (
    <MainLayout>
      <div className="PostCreatePage">
        <div className="main__head">Post a new reply</div>
              
        <form id="post-create-page__form">
          <div className="container-fluid">
            <div className="row pb-1">
              <div className="col-2 text-end">
                <label htmlFor="post-create-page__form-title">Post title</label>    
              </div>
              <div className="col">
                <input id="post-create-page__form-title" type="text"/>
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
    </MainLayout>
  );
}

export default PostCreatePage;