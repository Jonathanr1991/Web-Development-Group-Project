import React, { Component } from "react";
import axios from "axios";
import pic from "../img/user-profile-pic/default_profile.jpg";
//import { get } from "mongoose";

export default class NewsFeed extends Component {
  constructor(props) {
    super(props);
    this.onChangeNumberOfLikes = this.onChangeNumberOfLikes.bind(this);
    this.onChangePostText = this.onChangePostText.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      user: "",
      postText: "",
      postImgPath: "",
      numberOfLikes: 0,
      flag: false,
      formattedPost: [],
    };
  }

  onChangePostText(e) {
    this.setState({
      postText: e.target.value,
    });
  }

  onChangeNumberOfLikes(e) {
    this.setState({
      numberOfLikes: e.target.value,
    });
  }
  onSubmit(e) {
    e.preventDefault();
    const post = {
      user: this.props.data.user._id,
      postText: this.state.postText,
      postImgPath: this.state.postImgPath,
      numberOfLikes: this.state.numberOfLikes,
      flag: this.state.flag,
      comments: this.state.comments,
      time: Date.now(),
    };

    axios
      .post("/post/add", post)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    this.setState({ postText: "" });
    this.props.handleNewPost(post);
  }

  render() {
    if (this.props.data.loggedIn && this.props.data.newsfeed) {
      const postItems = this.props.data.posts.reverse().map((post) => (
        <div className="card my-3">
          <div className="card-header bg-white border-0 py-2">
            <div className="d-flex justify-content-between">
              <div className="d-flex justify-content-between">
                <a href="#">
                  <img
                    className="rounded-circle"
                    src="https://picsum.photos/80/80/?random"
                    width={45}
                    alt=""
                  />
                </a>
                <div className="ml-3">
                  <div className="h6 m-0">
                    <a href="#">{post.user}</a>
                  </div>
                  <div className="text-muted h8">
                    {post.time} <i className="fa fa-globe" aria-hidden="true" />
                  </div>
                </div>
              </div>
              <div className="dropdown">
                <button
                  className="btn btn-link dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                />
              </div>
            </div>
          </div>
          <div className="card-body pt-0 pb-2">{post.postText}</div>

          <div className="card-footer bg-white border-0 p-0">
            <div className="d-flex justify-content-between align-items-center py-2 mx-3 border-bottom">
              <div></div>
              <div className="h7">
                {post.numberOfLikes} <a href="#">Likes</a>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center my-1">
              <div className="col">
                <button
                  type="button"
                  className="btn btn-fbook btn-block btn-sm"
                >
                  {" "}
                  <i className="fa fa-thumbs-up" aria-hidden="true" /> Like
                </button>
              </div>
              <div className="col">
                <button
                  type="button"
                  className="btn btn-fbook btn-block btn-sm"
                >
                  <i className="fa fa-comment" aria-hidden="true" /> Comment
                </button>
              </div>
              <div className="col">
                <button
                  type="button"
                  className="btn btn-fbook btn-block btn-sm"
                >
                  <i className="fa fa-share" aria-hidden="true" /> Share
                </button>
              </div>
            </div>
          </div>
        </div>
      ));

      return (
        <div>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />

          <header>
            <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-fbook">
              <div className="container c-navbar">
                <a className="navbar-brand" href="#"></a>
              </div>
            </nav>
          </header>

          <div className="col ">
            <div className="row">
              <div className="col">
                <div className="card my-3">
                  <div className="card-body p-2">
                    <div className="h3">
                      {this.props.data.user.firstName}{" "}
                      {this.props.data.user.lastName}
                    </div>
                    {/* */}
                    <div className="mb-3">
                      <div className="d-flex justify-content-start">
                        <div className="img-circle"></div>
                        <div className="h7 ml-2">
                          <a href="#" onClick={this.props.handleEditProfile}>
                            {" "}
                            Edit Profile
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* */}
                    {/* */}
                    <div className="mb-3">
                      <div className="d-flex justify-content-start">
                        <div>
                          <img
                            className="rounded-circle"
                            width={45}
                            src={pic}
                            alt=""
                          />
                        </div>
                        <div className="h7 ml-2">
                          <a href="#" onClick={this.props.handleProfile}>
                            My Profile
                          </a>
                          <div className="text-muted"> 1 hour ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card my-3">
                  <div className="card-body p-2">
                    <a href="#" onClick={this.props.handleChat}>
                      <h3>Messages</h3>
                    </a>
                    {/* */}
                    <div className="mb-3">
                      <div className="d-flex justify-content-start">
                        <div className="img-circle"></div>
                        <div className="h7 ml-2">
                          <h5> Recent Messages</h5>
                        </div>
                      </div>
                    </div>
                    {/* */}
                    {/* */}
                    <div className="mb-3">
                      <div className="d-flex justify-content-start">
                        <div>
                          <img
                            className="rounded-circle"
                            width={45}
                            src="https://picsum.photos/80/80/?random?image=5"
                            alt=""
                          />
                        </div>
                        <div className="h7 ml-2">
                          <a href="#">John Smith</a>
                          <div className="text-muted"> 1 Hour Ago</div>
                        </div>
                      </div>
                    </div>

                    <div className="mb-3">
                      <div className="d-flex justify-content-start">
                        <div>
                          <img
                            className="rounded-circle"
                            width={45}
                            src="https://picsum.photos/80/80/?random?image=4"
                            alt=""
                          />
                        </div>
                        <div className="h7 ml-2">
                          <a href="#"> Bobby Hill</a>
                          <div className="text-muted"> 2 Hours Ago</div>
                        </div>
                      </div>
                    </div>
                    {/* */}
                    {/* */}
                    <div className="mb-3">
                      <div className="d-flex justify-content-start">
                        <div>
                          <img
                            className="rounded-circle"
                            width={45}
                            src="https://picsum.photos/80/80/?random?image=2"
                            alt=""
                          />
                        </div>
                        <div className="h7 ml-2">
                          <a href="#"> Peter Griffin</a>
                          <div className="text-muted"> 2 Hours Ago</div>
                        </div>
                      </div>
                    </div>
                    {/* */}
                  </div>
                </div>
                {/* start of event card*/}
                <div className="card my-3">
                  <div className="card-body p-2">
                    <a href="#" onClick={this.props.handleEvent}>
                      <h3>Events</h3>
                    </a>
                    <div className="h6 col nav-item ">
                      <button
                        type="submit"
                        //onClick={}
                        className="btn black-color "
                      >
                        {" "}
                        Create Event
                      </button>
                    </div>
                    {/* */}
                    <div className="mb-3">
                      <div className="d-flex justify-content-start">
                        <div className="img-circle"></div>
                        <div className="h7 ml-2">
                          <h5> Upcoming Events</h5>
                        </div>
                      </div>
                    </div>
                    {/* */}
                    {/* */}
                    <div className="mb-3">
                      <div className="d-flex justify-content-start">
                        <div>
                          <img
                            className="rounded-circle"
                            width={45}
                            src="https://picsum.photos/80/80/?random?image=5"
                            alt=""
                          />
                        </div>
                        <div className="h7 ml-2">
                          <a href="#">John Smith</a>
                          <div className="text-muted"> 1 Hour Ago</div>
                        </div>
                      </div>
                    </div>

                    <div className="mb-3">
                      <div className="d-flex justify-content-start">
                        <div>
                          <img
                            className="rounded-circle"
                            width={45}
                            src="https://picsum.photos/80/80/?random?image=4"
                            alt=""
                          />
                        </div>
                        <div className="h7 ml-2">
                          <a href="#"> Bobby Hill</a>
                          <div className="text-muted"> 2 Hours Ago</div>
                        </div>
                      </div>
                    </div>
                    {/* */}
                    {/* */}
                    <div className="mb-3">
                      <div className="d-flex justify-content-start">
                        <div>
                          <img
                            className="rounded-circle"
                            width={45}
                            src="https://picsum.photos/80/80/?random?image=2"
                            alt=""
                          />
                        </div>
                        <div className="h7 ml-2">
                          <a href="#"> Peter Griffin</a>
                          <div className="text-muted"> 2 Hours Ago</div>
                        </div>
                      </div>
                    </div>
                    {/* */}
                  </div>
                </div>
                {/*end of Event Card*/}
                <div className="card my-3">
                  <div className="card-body p-2">
                    <a href="#" onClick={this.props.handleGroup}>
                      <h3>Groups</h3>
                    </a>
                    <div className="h6 col nav-item ">
                      <button
                        type="submit"
                        //onClick={}
                        className="btn black-color "
                      >
                        {" "}
                        Create Group
                      </button>
                    </div>
                    {/* */}
                    <div className="mb-3">
                      <div className="d-flex justify-content-start">
                        <div className="img-circle"></div>
                        <div className="h7 ml-2">
                          <h5> My Groups</h5>
                        </div>
                      </div>
                    </div>
                    {/* */}
                    {/* */}
                    <div className="mb-3">
                      <div className="d-flex justify-content-start">
                        <div>
                          <img
                            className="rounded-circle"
                            width={45}
                            src="https://picsum.photos/80/80/?random?image=5"
                            alt=""
                          />
                        </div>
                        <div className="h7 ml-2">
                          <a href="#">Fraternities</a>
                          <div className="text-muted"> 1 Hour Ago</div>
                        </div>
                      </div>
                    </div>

                    <div className="mb-3">
                      <div className="d-flex justify-content-start">
                        <div>
                          <img
                            className="rounded-circle"
                            width={45}
                            src="https://picsum.photos/80/80/?random?image=4"
                            alt=""
                          />
                        </div>
                        <div className="h7 ml-2">
                          <a href="#"> Security club</a>
                          <div className="text-muted"> 2 Hours Ago</div>
                        </div>
                      </div>
                    </div>
                    {/* */}
                    {/* */}
                    <div className="mb-3">
                      <div className="d-flex justify-content-start">
                        <div>
                          <img
                            className="rounded-circle"
                            width={45}
                            src="https://picsum.photos/80/80/?random?image=2"
                            alt=""
                          />
                        </div>
                        <div className="h7 ml-2">
                          <a href="#"> Career Center</a>
                          <div className="text-muted"> 2 Hours Ago</div>
                        </div>
                      </div>
                    </div>
                    {/* */}
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <form onSubmit={this.onSubmit}>
                  <div className="card my-3">
                    <div className="card-header">
                      <ul className="nav nav-tabs card-header-tabs nav-fill">
                        <li className="nav-item">
                          <a className="nav-link active" href="#">
                            Create Post
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Upload Photo
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="card-body py-2">
                      <div className="d-flex">
                        <div>
                          <img
                            className="rounded-circle"
                            width={50}
                            src={pic}
                          />
                        </div>
                        <div className="col">
                          <div className="form-group mb-0">
                            <label
                              className="sr-only"
                              htmlFor="exampleFormControlTextarea1"
                            >
                              Example textarea
                            </label>
                            <textarea
                              className="form-control border-0"
                              id="exampleFormControlTextarea1"
                              rows={2}
                              placeholder="What are you thinking?"
                              defaultValue={""}
                              onChange={this.onChangePostText}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer p-2">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="col">
                          <button
                            type="button"
                            className="btn btn-fposts btn-block btn-sm"
                          >
                            {" "}
                            <i className="fa fa-list" aria-hidden="true" />{" "}
                            Documents
                          </button>
                        </div>
                        <div className="col">
                          <button
                            type="button"
                            className="btn btn-fposts btn-block btn-sm"
                          >
                            <i className="fa fa-picture-o" aria-hidden="true" />{" "}
                            Photos
                          </button>
                        </div>
                        <div className="col">
                          <button
                            type="submit"
                            className="btn btn-fposts btn-block btn-sm"
                          >
                            Post
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>

                {/* ITEM */}
                {postItems}
                {/* ITEM */}
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}
