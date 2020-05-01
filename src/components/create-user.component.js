import React, { Component } from "react";
import axios from "axios";
import Logo from "../img/Towson_logo.jpg";

export default class CreateUser extends Component {
    constructor(props) {
        super(props);

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeVerifyPassword = this.onChangeVerifyPassword.bind(this);
        this.onChangeMajor = this.onChangeMajor.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            email: "",
            password: "",
            verifyPassword: "",
            firstName: "",
            lastName: "",
            major: "",
            requireTowsonEmail: true, //externalizing this somewhere probably much better
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

    onSubmit(e) {
        e.preventDefault();

        if (
            this.state.requireTowsonEmail &&
            !/.*@(students.)?towson.edu/.test(this.state.email)
        ) {
            //if should match faculty or student emails
            alert("Must use Towson email");
            return;
        }
        if (this.state.password !== this.state.verifyPassword) {
            alert("Passwords must match");
            return;
        }

        const user = {
            email: this.state.email,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            major: this.state.major,
        };

        console.log(user);

        axios
            .post("/user/add", user)
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
        return (
            <div className="container">
                <div className="row  ">
                    <img
                        className="col-6 mt-5 center-block h-100"
                        alt="logo"
                        src={Logo}
                    />

                    <div className="col-6">
                        <h1 className=" mt-5 text-center">Sign Up!</h1>
                        <form onSubmit={this.onSubmit}>
                            <div className=" form-inline form-group">
                                <input
                                    placeholder="First Name"
                                    type="text"
                                    required
                                    className="col form-control "
                                    value={this.state.firstName}
                                    onChange={this.onChangeFirstName}
                                />

                                <input
                                    placeholder="Last Name"
                                    type="text"
                                    required
                                    className="col ml-2 form-control move-right"
                                    value={this.state.lastName}
                                    onChange={this.onChangeLastName}
                                />
                            </div>

                            <input
                                placeholder="Email"
                                type="email"
                                required
                                className="form-control form-group"
                                value={this.state.email}
                                onChange={this.onChangeEmail}
                            />

                            <input
                                placeholder="Password"
                                minLength="8"
                                type="password"
                                required
                                className="form-control form-group"
                                value={this.state.password}
                                onChange={this.onChangePassword}
                            />
                            <input
                                placeholder="Verify Password"
                                minLength="8"
                                type="password"
                                required
                                className="form-control form-group"
                                value={this.state.verifyPassword}
                                onChange={this.onChangeVerifyPassword}
                            />

                            <div className="form-group">
                                <button
                                    type="submit"
                                    className="btn  gold-color "
                                    disabled={
                                        (this.state.requireTowsonEmail &&
                                            !/.*@(students.)?towson.edu/.test(
                                                this.state.email
                                            )) ||
                                        (this.state.password.length >= 8 &&
                                            this.state.password !==
                                                this.state.verifyPassword)
                                    }
                                    title={
                                        //set button tooltip so users somewhat know why they can't register
                                        this.state.requireTowsonEmail &&
                                        !/.*@(students.)?towson.edu/.test(
                                            this.state.email
                                        )
                                            ? "Must use Towson email"
                                            : this.state.password.length < 8 ||
                                              this.state.password !==
                                                  this.state.verifyPassword
                                            ? "Passwords must match"
                                            : ""
                                    }
                                >
                                    Create an Account
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
