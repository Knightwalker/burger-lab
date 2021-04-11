import React, { useContext } from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { AuthenticationContext } from "./contexts/AuthenticationContext";

import HomePage from "./pages/home/HomePage";
import UserPage from "./pages/home/UserPage";
import UsersPage from "./pages/home/UsersPage";
import GroupsPage from "./pages/home/GroupsPage";
import ForumPage from "./pages/home/ForumPage";
import TopicPage from "./pages/general/TopicPage";

import TopicCreatePage from "./pages/general/TopicCreatePage";
import TopicDeletePage from "./pages/general/TopicDeletePage";

import PostCreatePage from "./pages/general/PostCreatePage";
import PostEditPage from "./pages/general/PostEditPage";
import PostDeletePage from "./pages/general/PostDeletePage";

import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";

import NotFoundPage from "./pages/errors/NotFoundPage";

const App = () => {
  const authenticationContext = useContext(AuthenticationContext);
  const bUserIsAuthenticated = authenticationContext.objUser.bUserIsAuthenticated;

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" ><HomePage /></Route>
          <Route exact path="/users" ><UsersPage /></Route>
          <Route       path="/users/:user_id" ><UserPage /></Route>
          <Route exact path="/groups" ><GroupsPage /></Route>
          <Route exact path="/forum/:slug" ><ForumPage /></Route>
          <Route exact path="/topic/:slug" ><TopicPage /></Route>

          <Route exact path="/topics/create/:forum_id">{ bUserIsAuthenticated ? (<TopicCreatePage />) : (<Redirect to="/auth/login" />)}</Route>
          <Route exact path="/topics/delete/:topic_id">{ bUserIsAuthenticated ? (<TopicDeletePage />) : (<Redirect to="/auth/login" />)}</Route>

          <Route exact path="/posts/create/:topic_id">{ bUserIsAuthenticated ? (<PostCreatePage />) : (<Redirect to="/auth/login" />)}</Route>
          <Route exact path="/posts/edit/:post_id" >{ bUserIsAuthenticated ? (<PostEditPage />) : (<Redirect to="/auth/login" />)}</Route>
          <Route exact path="/posts/delete/:post_id" >{ bUserIsAuthenticated ? (<PostDeletePage />) : (<Redirect to="/auth/login" />)}</Route>

          <Route exact path="/auth/login" ><LoginPage /></Route>
          <Route exact path="/auth/register" ><RegisterPage /></Route>

          <Route path="/"><NotFoundPage /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;