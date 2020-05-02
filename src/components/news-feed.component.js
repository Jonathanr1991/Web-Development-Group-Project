import React, { Component } from "react";
import axios from "axios";
import pic from "../img/user-profile-pic/default_profile.jpg";

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
      comments: [],
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
    

    const post = {
      user: this.props.data.user._id,
      postText: this.state.postText,
      postImgPath: this.state.postImgPath,
      numberOfLikes: this.state.numberOfLikes,
      flag: this.state.flag,
      comments: this.state.comments,
    };

    axios
      .post("/post/add", post)
      .then((res) => {
        console.log(res.data);
        alert(res.data);
      })
      .catch((err) => {
        console.log(err);
      });


      this.setState({postText: ""});
  }
  getAllPost(){
    axios.get("/post")
    .then((res) =>{
      console.log(res.data);
    })
  }
  
  render() {
    this.getAllPost()
    if (this.props.data.loggedIn) {
      
      return (
        <div>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />
          <link rel="stylesheet" href="page.css" />
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
                          <a href="#"> Edit Profile</a>
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
                          <a href="#">Person Profile Pic</a>
                          <div className="text-muted"> Hace 1 Hora</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card my-3">
                  <div className="card-body p-2">
                    <div className="h6">Messages</div>
                    {/* */}
                    <div className="mb-3">
                      <div className="d-flex justify-content-start">
                        <div className="img-circle"></div>
                        <div className="h7 ml-2">
                          <a href="#"> Recent Chats</a>
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
                          <div className="text-muted"> Hace 1 Hora</div>
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
                          <div className="text-muted"> Hace 2 Hora</div>
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
                          <div className="text-muted"> Hace 2 Hora</div>
                        </div>
                      </div>
                    </div>
                    {/* */}
                  </div>
                </div>
                <div className="card my-3">
                  <div className="card-body p-2">
                    <div className="h6">Groups</div>
                    {/* */}
                    <div className="mb-3">
                      <div className="d-flex justify-content-start">
                        <div className="img-circle"></div>
                        <div className="h7 ml-2">
                          <a href="#"> Active Groups</a>
                          <div className="text-muted">
                            Comparte una foto , un video o haz un comentario
                          </div>
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
                          <div className="text-muted"> Hace 1 Hora</div>
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
                          <div className="text-muted"> Hace 2 Hora</div>
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
                          <div className="text-muted"> Hace 2 Hora</div>
                        </div>
                      </div>
                    </div>
                    {/* */}
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <form onSubmit= {this.onSubmit}>
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
                            src="https://picsum.photos/80/80/?random?image=4"
                          />
                        </div>
                        <div className="col">
                          <form action="#">
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
                          </form>
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
                            <a href="#">Revista Automóvil Panamericano</a>
                          </div>
                          <div className="text-muted h8">
                            Hace 2 min{" "}
                            <i className="fa fa-globe" aria-hidden="true" />
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
                        <div
                          className="dropdown-menu dropdown-menu-right"
                          aria-labelledby="dropdownMenuButton"
                        >
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body pt-0 pb-2">
                    Hola, necesito ayuda para clonar mi HDD a un SSD. Probé
                    Norton Ghost y easyup (nose que nota les dan) lo malo es que
                    estos software al iniciar desde el ssd me pide que repare el
                    sistema. Aiudaaaaa....
                  </div>
                  <img
                    className="card-img-top rounded-0"
                    src="https://picsum.photos/320/250/?random"
                    alt="Card image cap"
                  />
                  <div className="card-footer bg-white border-0 p-0">
                    <div className="d-flex justify-content-between align-items-center py-2 mx-3 border-bottom">
                      <div></div>
                      <div className="h7">
                        {" "}
                        3279 <a href="#"> comentarios</a> 44845 veces{" "}
                        <a href="#">compartido</a>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center my-1">
                      <div className="col">
                        <button
                          type="button"
                          className="btn btn-fbook btn-block btn-sm"
                        >
                          {" "}
                          <i
                            className="fa fa-thumbs-up"
                            aria-hidden="true"
                          />{" "}
                          Like
                        </button>
                      </div>
                      <div className="col">
                        <button
                          type="button"
                          className="btn btn-fbook btn-block btn-sm"
                        >
                          <i className="fa fa-comment" aria-hidden="true" />{" "}
                          Comment
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
