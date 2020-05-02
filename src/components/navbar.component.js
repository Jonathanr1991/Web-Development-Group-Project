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

  onSubmit(e) {
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password,
    };
    axios
      .post("/user/login", user) //was http://localhost:5000/user/login, would need to be http://localhost:3000/user/login due to new express port(/proxy)
      .then((res) => {
        if (res.data == "User Logged in") {
          
          this.props.handleLogIn(true);
        }
        console.log(this.state.loggedIn);
      });
  }
  logout(e){
    this.props.handleLogOut(false);
  }
  render() {
    if (this.props.data.loggedIn) {
      return (
        <div className="navbar tu-header">
          <div className="nav-brand ">
            {" "}
            <h1>TU Social</h1>
          </div>
          <div className="h6 nav-item col">
            <a>Profile</a>
          </div>
          <div className="h6 nav-item col">
            <a>Messages</a>
          </div>
          <div className="h6 nav-item col">
            <input
              type="text"
              id="inputText"
              placeholder="Search for student, group or event"
            />
          </div>
          <div className="h6 col nav-item ">
          <form onSubmit={this.logout}>
            <button type="submit" className="btn black-color mt-3" > Sign Out</button>
          </form>
            
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
