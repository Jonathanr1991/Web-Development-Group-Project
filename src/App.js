import React, {Component}from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import CreateUser from "./components/create-user.component";
import Navbar from "./components/navbar.component";
import UserFeed from "./components/user-feed.component";
import UserProfile from "./components/user-profile.component";
import Group from "./components/group-component";
import Event from "./components/event-component";

export default class App extends Component{

  render(){
    return (
      <Router>
        <div className="container">
          <Navbar />
          <Route path="/" exact component={CreateUser} />
          <Route path="/:userId" exact component={UserFeed} />
          <Route path="/:userId/profile" exact component={UserProfile} />
          <Route path="/:userId/profile/group" exact component={Group} />
          <Route path="/:userId/profile/event" exact component={Event} />
        </div>
      </Router>
    );
  }
  
}


