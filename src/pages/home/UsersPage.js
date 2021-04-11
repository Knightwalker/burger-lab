import React, { useEffect, useState } from "react";
import MainLayout from "../../layouts/MainLayout";

import * as userService from "../../services/userService";

const UsersPage = () => {
  const [ users, setUsers ] = useState([]);

  console.log(users);

  useEffect(() => {
    userService.getAll()
      .then(data => {
        setUsers(data);
      })
  }, []);

  return (
    <MainLayout>
      <div className="UsersPage">
        <div className="container">
          <h1>All Users</h1>
          { users.map((user) => (
            <div className="UsersPage__user" key={user._id}>
              <div className="users-page__item1">{user.username}</div> 
              <div>{user.email}</div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}

export default UsersPage;