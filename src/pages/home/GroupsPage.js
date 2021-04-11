import React, { useEffect, useState } from "react";
import MainLayout from "../../layouts/MainLayout";

import * as userService from "../../services/userService";

const GroupsPage = () => {
  const [ groups, setGroups ] = useState([]);

  console.log(groups);

  useEffect(() => {
    userService.getAllGroups()
      .then(data => {
        setGroups(data);
      })
  }, []);

  return (
    <MainLayout>
      <div className="GroupsPage">
        <div className="container">
          <h1>All Groups</h1>
          { groups.map((group) => {
            let membersArr = Array.from(group.members); // strange bug if we remove this, despite that we have an array?
            return (
            <div className="UsersPage__user" key={group._id}>
              <div className="users-page__item1">{group.name}</div> 
              <div>{membersArr.join(" ")}</div>
            </div>
            )
          })}
        </div>
      </div>
    </MainLayout>
  );
}

export default GroupsPage;