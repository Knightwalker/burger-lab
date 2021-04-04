import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "./pages/home/HomePage";
import UserPage from "./pages/home/UserPage";
import UsersPage from "./pages/home/UsersPage";
import GroupsPage from "./pages/home/GroupsPage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import ForumPage from "./pages/home/ForumPage";
import TopicPage from "./pages/general/TopicPage";

import PostCreatePage from "./pages/general/PostCreatePage";
import PostDeletePage from "./pages/general/PostDeletePage";

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" ><HomePage /></Route>
          <Route exact path="/users" ><UsersPage /></Route>
          <Route exact path="/users/:id" ><UserPage /></Route>
          <Route exact path="/groups" ><GroupsPage /></Route>
          <Route exact path="/login" ><LoginPage /></Route>
          <Route exact path="/register" ><RegisterPage /></Route>
          <Route exact path="/forum/:slug" ><ForumPage /></Route>
          <Route exact path="/topic/:slug" ><TopicPage /></Route>

          <Route exact path="/posts/create/:topic_id" ><PostCreatePage /></Route>
          <Route exact path="/posts/delete/:post_id" ><PostDeletePage /></Route>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;