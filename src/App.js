import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import CreateUser from "./components/create-user.component";
import Navbar from "./components/navbar.component";
import EditProfile from "./components/edit-profile.component";
import UserProfile from "./components/user-profile.component";
import Group from "./components/group-component";
import Event from "./components/event-component";
import NewsFeed from "./components/news-feed.component";
import Chat from "./components/Chat-component";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: "",
      loggedIn: false,
      newsfeed: false,
      chat: false,
      group: false,
      editProfile: false,
      event: false,
      profile: false,
    };
  }
  handleLogIn() {
    this.setState({
      loggedIn: true,
      newsfeed: true,
      chat: false,
      group: false,
      editProfile: false,
      event: false,
      profile: false,
    });
  }
  handleLogOut() {
    this.setState({ loggedIn: false });
  }
  handleUser(e) {
    this.setState({ user: e });
  }
  handleEditProfile() {
    this.setState({
      newsfeed: false,
      chat: false,
      group: false,
      editProfile: true,
      event: false,
      profile: false,
    });
  }
  handleChat() {
    this.setState({
      newsfeed: false,
      chat: true,
      group: false,
      editProfile: false,
      event: false,
      profile: false,
    });
  }
  handleProfile(){
    
      this.setState({
        newsfeed: false,
        chat: false,
        group: false,
        editProfile: false,
        event: false,
        profile: true,
      });
    
  }
  handleGroup(){
    
    this.setState({
      newsfeed: false,
      chat: false,
      group: true,
      editProfile: false,
      event: false,
      profile: false,
    });
  
}
handleEvent(){
    
  this.setState({
    newsfeed: false,
    chat: false,
    group: false,
    editProfile: false,
    event: true,
    profile: false,
  });

}

  render() {
    return (
      <Router>
        <div className="container">
          <Navbar
            data={this.state}
            handleLogIn={this.handleLogIn.bind(this)}
            handleLogOut={this.handleLogOut.bind(this)}
            handleUser={this.handleUser.bind(this)}
          />
          <CreateUser data={this.state} />
          <EditProfile data={this.state} />
          <UserProfile data={this.state} />
          <NewsFeed
            data={this.state}
            handleEditProfile={this.handleEditProfile.bind(this)}
            handleChat={this.handleChat.bind(this)}
            handleProfile={this.handleProfile.bind(this)}
            handleGroup={this.handleGroup.bind(this)}
            handleEvent={this.handleEvent.bind(this)}
          />
          <Chat data={this.state} />
          <Group data={this.state}/>
          <Event data={this.state}/>
        </div>
      </Router>
    );
  }
}
