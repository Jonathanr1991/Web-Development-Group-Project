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
import { render } from "@testing-library/react";

export default class App extends Component{
  constructor(props) {
    super(props);

    this.state = {
      user: "",
      loggedIn: false,
    };
  }
  handleLogIn(){
    this.setState({loggedIn: !this.state.loggedIn});
  }

  render(){

    return (
      <Router>
        <div className="container">
          <Navbar data={this.state} handleLogIn={this.handleLogIn.bind(this)}/>
          <CreateUser data={this.state}/>
          
          <Route path="/:userId" exact component={UserFeed} />
          <Route path="/:userId/profile" exact component={UserProfile} />
          <Route path="/:userId/profile/group" exact component={Group} />
          <Route path="/:userId/profile/event" exact component={Event} />
        </div>
      </Router>
    );
  }
  
}


