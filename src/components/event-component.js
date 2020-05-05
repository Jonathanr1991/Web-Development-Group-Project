import React, { Component } from "react";
import pic from "../img/event-pics/Towson_logo.jpg";
import Axios from "axios";

//Event layout page
//need to update navigation under <ul>
export default class Event extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isCreateEvent: false,
      currentEvent: "",
    };
  }

  handleCurrentEvent(e) {
    console.log(e);
    Axios.get("/event/" + e).then((res) => {
      this.setState({ currentEvent: res.data });
      console.log(res.data);
    });
  }

  renderCreateEvent(e) {
    e.preventDefault();
    this.setState({ isCreateEvent: !this.state.isCreateEvent });
  }
  render() {
    if (this.props.data.loggedIn && this.props.data.event) {
      const eventItems = this.props.data.events.map((event) => (
        <div className="card my-3">
          <div className="card-body p-2">
            <a
              onClick={() => this.handleCurrentEvent(event._id)}
              href="#"
              value={event._id}
            >
              <h3>{event.eventName}</h3>
            </a>

            {/* */}
            <div className="mb-3">
              <div className="d-flex justify-content-start">
                <div className="img-circle"></div>
                <div className="h7 ml-2">
                  <h5> {event.eventDate}</h5>
                </div>
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
                    <a href="#" onClick={this.props.handleEvent}>
                      <h3>Events</h3>
                    </a>
                    <div className="h6 col nav-item ">
                      <button
                        type="submit"
                        onClick={this.renderCreateEvent}
                        className="btn black-color "
                      >
                        {" "}
                        Create Event
                      </button>
                    </div>
                  </div>
                </div>

                {eventItems}
              </div>
              <div className="col-lg-8">
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
                            <a href="#">{this.state.currentEvent.eventName}</a>
                          </div>
                          <div className="text-muted h8">
                            {this.state.currentEvent.eventDate}{" "}
                            {this.state.currentEvent.eventTime}{" "}
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
                      </div>
                    </div>
                  </div>
                  <div className="card-body pt-0 pb-2">
                    {this.state.currentEvent.eventDescription}
                  </div>
                  <img src={pic} className="img-thumbnail"/>
                  <div className="card-footer bg-white border-0 p-0">
                    <div className="d-flex justify-content-between align-items-center py-2 mx-3 border-bottom">
                      <div></div>
                      <div className="h7">
                        <a href="#">Likes</a>
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
                            src="https://picsum.photos/80/80/?random?image=4"
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
              </div>
              <div>{/* ITEM */}</div>
            </div>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}
