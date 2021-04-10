import React, { useEffect, useState, useContext } from "react";
import { NavLink, Switch, Route, useParams, useHistory } from "react-router-dom";
import { AuthenticationContext } from "../../contexts/AuthenticationContext";
import * as userService from "../../services/userService";

import MainLayout from "../../layouts/MainLayout";

const UserPage = () => {
  const authenticationContext = useContext(AuthenticationContext);
  const history = useHistory();
  const { user_id } = useParams();
  const [ userData, setUserData ] = useState({
    username: "",
    email: "",
    avatar_url: ""
  });


  useEffect(() => {
    userService.getOneById(user_id)
      .then((data) => {
        console.log(data);
        setUserData({
          username: data.username,
          email: data.email,
          avatar_url: data.img_url
        });
      });

  }, [user_id]);


  const onSubmitHandler = (field) => {
    const formData = document.forms["profile__form"].elements;
    const email = formData["email"].value;
    const password = formData["password"].value;
    const avatar = formData["avatar"].value;

    console.log(password);

    if (field === "email") {
      userService.editEmailById(user_id, email)
        .then(() => {
          setUserData((prevState) => {
            return { ...prevState, email: email }
          });
        })
    } else if (field === "password") {
      userService.editPasswordById(user_id, password)
        .then(() => {
          setUserData((prevState) => {
            return { ...prevState }
          });
        })
    } else if (field === "avatar") {
      userService.editAvatarById(user_id, avatar)
        .then(() => {
          setUserData((prevState) => {
            return { ...prevState, avatar_url: avatar }
          });
        })
    }

  }

  const fLogoutUser = () => {
    authenticationContext.fLogoutUser();
    history.push("/");
  }

  const fNoThanks = () => {
    history.goBack();
  }

  return (
    <MainLayout>
      <div className="UserPage">
        <div className="container d-flex">

          <div className="UserNavbar">
            <ul>
              <li><NavLink to={`/users/${user_id}/account_overview`}>Account Overview</NavLink></li>
              <li><NavLink to={`/users/${user_id}/logout`}>Logout</NavLink></li>
            </ul>
          </div>

          <Switch>
            <Route exact path="/users/:user_id/account_overview">
              <div className="UserPanel">
                <div className="user-panel_head">Account Overview</div>
                <div className="user-panel_body">
                  <div className="AccountOverview">

                    <div className="user-container">
                      <img className="user-container__avatar" loading="lazy" src={userData.avatar_url} alt={userData.username} />
                    </div>
                    <div>
                      <br />
                      <div>Username: {userData.username}</div>
                      <div>Email: {userData.email}</div>
                      <div>Avatar: {userData.avatar_url}</div>
                      <br />
                      <form id="profile__form">
                        <fieldset>
                          <legend>Modify:</legend>
                          <div className="d-flex" style={{ justifyContent: "space-between" }}>
                            <label style={{ width: "150px" }} htmlFor="email">Change Email:</label>
                            <input type="text" id="email" name="email" />
                            <button type="button" onClick={() => onSubmitHandler("email")}>change</button>
                          </div>
                          <br />
                          <div className="d-flex" style={{ justifyContent: "space-between" }}>
                            <label style={{ width: "150px" }} htmlFor="password">Change Password:</label>
                            <input type="password" id="password" name="password" />
                            <button type="button" onClick={() => onSubmitHandler("password")}>update</button>
                          </div>
                          <br />
                          <div className="d-flex" style={{ justifyContent: "space-between" }}>
                            <label style={{ width: "150px" }} htmlFor="avatar">Change Avatar:</label>
                            <input type="text" id="avatar" name="avatar" />
                            <button type="button" onClick={() => onSubmitHandler("avatar")}>upload</button>
                          </div>
                        </fieldset>
                      </form>
                    </div>
                  </div>

                </div>
              </div>
            </Route>
            <Route exact path="/users/:user_id/logout">
              <div className="UserPanel">
                <div className="user-panel_head">Logout Account</div>
                <div className="user-panel_body">
                  <div className="AccountOverview">

                    <div className="user-container">
                      <img className="user-container__avatar" loading="lazy" src={userData.avatar_url} alt={userData.username} />
                    </div>
                    <div>
                      <br />
                      <div>We cannot just let you out now, can we? We have to ask you ONE MORE TIME!</div>
                      <br />
                      <form id="profile__form">
                        <fieldset>
                          <legend>Are you sure you want to logout?</legend>
                            <button type="button" onClick={fLogoutUser}>yes please</button>
                          <br />
                            <button type="button" onClick={fNoThanks}>not thanks</button>
                          <br />
                        </fieldset>
                      </form>
                    </div>
                  </div>

                </div>
              </div>
            </Route>
          </Switch>

        </div>
      </div>
    </MainLayout>
  );
}

export default UserPage;