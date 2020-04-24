import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";

//require("dotenv").config();
const host = process.env.host || process.env.HOST;
//var hostname = "https://thawing-escarpment-97776.herokuapp.com"; //TODO expose this in a config file somewhere else, instead of hardcoded -cd
export default class NavBar extends Component {
    constructor(props) {
        super(props);

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            email: "",
            password: "",
            id: "",
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
        axios.post(`${host}/user/login`, user).then((res) => {
            console.log(res.data);
            this.state.id = res.data.id;
        });

        this.setState({});
    }

    render() {
        return (
            <div className="navbar tu-header">
                <div className="nav-brand ">
                    {" "}
                    <h1>TU Social</h1>
                </div>

                <form onSubmit={this.onSubmit} action="/{this.state.id}">
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
                            <input type="checkbox" />
                            Stay logged in{" "}
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
                            <button
                                type="submit"
                                className="btn black-color mt-3"
                            >
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
