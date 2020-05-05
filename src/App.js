import React, { Component } from "react";
import "./App.css";
import "./css/editProfile.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import "./css/bootstrap3.min.css";
import CreateUser from "./components/create-user.component";
import Navbar from "./components/navbar.component";
import EditProfile from "./components/edit-profile.component";
import UserProfile from "./components/user-profile.component";
import Group from "./components/group-component";
import Event from "./components/event-component";
import NewsFeed from "./components/news-feed.component";
import Chat from "./components/Chat-component";
import axios from "axios";

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
      posts: [],
      personalPosts: [],
      events: [],
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

  handleGetPost(e) {
    this.setState({ posts: e });
  }
  handleEvents(e) {
    this.setState({ events: e });
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
  handleProfile(e) {
    e.preventDefault();
    this.setState({
      newsfeed: false,
      chat: false,
      group: false,
      editProfile: false,
      event: false,
      profile: true,
    });
    const formattedPost = [];
  console.log(this.state.user._id);
    axios
      .get("/post/userPost/"+this.state.user._id)
      .then((resp) => {
        resp.data.forEach((post) => {
          
          axios.get("/user/" + post.user).then((res) => {
           var months = [
             "January",
             "February",
             "March",
             "April",
             "May",
             "June",
             "July",
             "August",
             "September",
             "October",
             "November",
             "December",
           ];
           const newPost = {
             _id: post._id,
             user: res.data.firstName + " " + res.data.lastName,
             postText: post.postText,
             time:
               months[new Date(post.time).getMonth()] +
               " " +
               new Date(post.time).getDate() +
               ", " +
               new Date(post.time).getFullYear() +
               " " +
               new Date(post.time).getHours() +
               ":" +
               new Date(post.time).getMinutes(),

             numberOfLikes: post.numberOfLikes,
           };

           formattedPost.push(newPost);
         });
         console.log(formattedPost);
         this.setState({personalPosts: formattedPost});
       });

       
     });
      
      
  }
  handleGroup() {
    this.setState({
      newsfeed: false,
      chat: false,
      group: true,
      editProfile: false,
      event: false,
      profile: false,
    });
  }
  handleEvent() {
    this.setState({
      newsfeed: false,
      chat: false,
      group: false,
      editProfile: false,
      event: true,
      profile: false,
    });
  }
  handleNewPost(e) {
    this.state.posts.push(e);
  }
  handleNewPersonalPost(e) {
    this.state.personalPosts.push(e);
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
            handleGetPost={this.handleGetPost.bind(this)}
            handleEvents={this.handleEvents.bind(this)}
          />
          <CreateUser data={this.state} />
          <EditProfile
            data={this.state}
            handleUser={this.handleUser.bind(this)}
          />
          <UserProfile
            data={this.state}
            handleEditProfile={this.handleEditProfile.bind(this)}
            handleNewPersonalPost = {this.handleNewPersonalPost.bind(this)}
            handleNewPost={this.handleNewPost.bind(this)}
          />

          <NewsFeed
            data={this.state}
            handleEditProfile={this.handleEditProfile.bind(this)}
            handleChat={this.handleChat.bind(this)}
            handleProfile={this.handleProfile.bind(this)}
            handleGroup={this.handleGroup.bind(this)}
            handleEvent={this.handleEvent.bind(this)}
            handleNewPost={this.handleNewPost.bind(this)}
          />
          <Chat data={this.state} />
          <Group data={this.state} />
          <Event data={this.state} />
        </div>
      </Router>
    );
  }
}
