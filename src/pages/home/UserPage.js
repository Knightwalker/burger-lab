import React from "react";
import { useParams } from "react-router-dom";

import MainLayout from "../../layouts/MainLayout";

const UserPage = () => {
  const { id } = useParams();

  return (
    <MainLayout>
      <div className="UserPage">
        <div className="container">
          <h1>User - {id}</h1>
        </div>
      </div>
    </MainLayout>
  );
}

export default UserPage;