import React, { useState, useEffect } from "react";
import MainLayout from "../../layouts/MainLayout";
import ForumsList from "../../components/ForumsList/ForumsList.js";
import "./HomePage.css";

const HomePage = () => {
  const [forums, setForums] = useState(null);
  const [isLoadingForums, setIsLoadingForums] = useState(true);
  const [hasErrorsLoadingForums, setHasErrorsLoadingForums] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/test")
      .then((res) => {
        if (!res.ok) {
          throw Error({ message: "Count not GET data for that resource." });
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setForums(data);
        setIsLoadingForums(false);
      })
      .catch((err) => {
        setHasErrorsLoadingForums(err);
        setIsLoadingForums(false);
      });
  }, []);

  return (
    <MainLayout>
      <div className="HomePage">
        <div className="container">
          {isLoadingForums ? <div>Loading...</div> : null}
          {hasErrorsLoadingForums ? <div>ERROR: {hasErrorsLoadingForums.message} </div> : null}
          {(isLoadingForums === false && !forums) ? <div>There are no forums</div> : null}
          {(isLoadingForums === false && forums) ? <ForumsList forums={forums}></ForumsList> : null}
        </div>
      </div>
    </MainLayout>
  );
}

export default HomePage;