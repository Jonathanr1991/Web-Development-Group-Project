import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import CreateUser from "./components/create-user.component";
import Navbar from "./components/navbar.component";

import UserProfile from "./components/user-profile.component";
import Group from "./components/group-component";
import Event from "./components/event-component";
import { render } from "@testing-library/react";
import NewsFeed from "./components/news-feed.component";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: "",
      loggedIn: false,
    };
  }
  handleLogIn(e) {
    this.setState({ loggedIn: e });
  }
  handleLogOut(e) {
    
    this.setState({ loggedIn: e });
  }
  handleUser(e){
    
    this.setState({user: e})
  }

  render() {
    return (
      <Router>
        <div className="container">
          <Navbar
            data={this.state}
            handleLogIn={this.handleLogIn.bind(this)}
            handleLogOut={this.handleLogOut.bind(this)}
            handleUser= {this.handleUser.bind(this)}
          />
          <CreateUser data={this.state} />

          <NewsFeed data={this.state} />
          <Route path="/:userId/profile" exact component={UserProfile} />
          <Route path="/:userId/profile/group" exact component={Group} />
          <Route path="/:userId/profile/event" exact component={Event} />
        </div>
      </Router>
    );
  }
}
