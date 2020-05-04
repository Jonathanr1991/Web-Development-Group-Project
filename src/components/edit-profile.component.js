import React, { Component } from "react";
import axios from "axios";
import pic from "../img/user-profile-pic/default_profile.jpg";
export default class EditProfile extends Component {

  constructor(props) {
    super(props);


    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeVerifyPassword = this.onChangeVerifyPassword.bind(this);
    this.onChangeMajor = this.onChangeMajor.bind(this);
    this.onChangeBio = this.onChangeBio.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    //this.firstNameClick = this.firstNameClick.bind(this);

    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      major: "",
      bio: "",
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
  onChangeVerifyPassword(e) {
    this.setState({
      verifyPassword: e.target.value,
    });
  }
  onChangeFirstName(e) {
    this.setState({
      firstName: e.target.value,
    });
  }
  onChangeLastName(e) {
    this.setState({
      lastName: e.target.value,
    });
  }
  onChangeMajor(e) {
    this.setState({
      major: e.target.value,
    });
  }
  onChangeBio(e) {
    this.setState({
      bio: e.target.value,
    });
  }
  firstNameClick() {
    document.getElementById("firstName").value = this.state.firstName;
  }

  onSubmit(e) {
    e.preventDefault();
    
    this.setState({password: this.props.data.user.password})
    console.log(this.state);
    axios
      .post("/user/update/" + this.props.data.user._id, this.state)
      .then((res) => {
        console.log(res.data);
        alert(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    this.setState({});
  }
  render() {

    
    if (this.props.data.editProfile && this.props.data.loggedIn) {
      return (
        <div>
          <br />
          <br />
          <br />
          <div className="container mt-8 center col-6">
            <form onSubmit={this.onSubmit}>
              <div className=" form-inline form-group">
                <a>
                  <img
                    src={pic}
                    className="rounded-circle mx-auto d-block col-4"
                  ></img>
                </a>
                <br />
                <br />
                <br />
                <input
                  id="firstName"
                  type="text"
                  placeholder="Update First Name"
                  className="col form-control "
                  //value={this.props.data.user.firstName}
                  onChange={this.onChangeFirstName}
                  //onClick={this.firstNameClick}
                />

                <input
                  type="text"
                  placeholder="Update Last Name"
                  className="col ml-2 form-control move-right"
                 // value={this.props.data.user.lastName}
                  onChange={this.onChangeLastName}
                />
              </div>

              <input
                type="email"
                className="form-control form-group"
                placeholder="Update Email"
                //value={this.props.data.user.email}
                onChange={this.onChangeEmail}
              />

              <input
                type="text"
                className="form-control form-group"
                placeholder="Update Major"
               // value={this.props.data.user.major}
                onChange={this.onChangeMajor}
              />
              <textarea
                className="form-control form-group"
                placeholder="Update Bio"
                //value={this.props.data.user.bio}
                onChange={this.onChangeBio}
              />

              <div className="form-group">
                <button type="submit" className="btn  gold-color ">
                  Update Account
                </button>
              </div>

            </form>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

