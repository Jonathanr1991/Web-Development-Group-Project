import React, { Component } from "react";
import axios from "axios";

export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      email: "",
      password: "",
    };
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  async onSubmit(e) {
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password,
    };
    await axios
      .post("/user/login", user) //was http://localhost:5000/user/login, would need to be http://localhost:3000/user/login due to new express port(/proxy)
      .then((res) => {
        if (res.data.Message === "User Logged in") {
          this.props.handleLogIn();
          this.props.handleUser(res.data.user);

          //get all post after User Logs in
         axios.get("/post").then((resp) => {
            const formattedPost = [];

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
            });

            this.props.handleGetPost(formattedPost);
          });
        }
      });

      axios.get("/event")
      .then( (res) => this.props.handleEvents(res.data))

    this.setState({ password: "" });
  }
  render() {
    if (this.props.data.loggedIn) {
      return (
        <div className="navbar tu-header">
          <div className="nav-brand ">
            {" "}
            <a onClick={this.props.handleLogIn}>
              <h1>TU Social</h1>
            </a>
          </div>

          <div className="nav-item mr-auto ml-5 col-6">
            <input
              className="form-control"
              type="text"
              id="inputText"
              placeholder="Search for student, group or event"
            />
            <button className="btn black-color mt-1 ">Search</button>
          </div>

          <div className="h6 col nav-item ">
            <button
              type="submit"
              onClick={this.props.handleLogOut}
              className="btn black-color mt-3"
            >
              {" "}
              Sign Out
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="navbar tu-header">
          <div className="nav-brand ">
            {" "}
            <h1>TU Social</h1>
          </div>

          <form onSubmit={this.onSubmit}>
            <div className="row ">
              <div className="h6 nav-item col">
                Towson Email
                <input
                  className="form-control"
                  placeholder="Email"
                  type="mail"
                  name="name"
                  value={this.state.email}
                  onChange={this.onChangeEmail}
                />
              </div>

              <div className="h6  nav-item col">
                Password
                <input
                  className="form-control"
                  placeholder="Password"
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.onChangePassword}
                />
                <br />
                <a className="h6">Forgot password?</a>
              </div>

              <div className="col nav-item ">
                <button type="submit" className="btn black-color mt-3">
                  {" "}
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      );
    }
  }
}
