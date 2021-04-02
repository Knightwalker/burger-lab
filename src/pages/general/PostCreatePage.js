import React from "react";
import { useParams } from "react-router-dom";

import MainLayout from "../../layouts/MainLayout";

const PostCreatePage = () => {
  const { post_id } = useParams();

  return (
    <MainLayout>
      <div className="PostCreatePage">
        test
      </div>
    </MainLayout>
  );
}

export default PostCreatePage;