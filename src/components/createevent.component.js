import React, { Component } from "react";
import "../page.css";

// need to update navigation under <ul>
// user profile
export default class Create extends Component {
  render() {
    return (
        <div>
        <h1>hello</h1>
        <div className="container contact">    
        <h2>Create Event</h2>
        <form>
          <p id="field"> Please enter info:</p>
          <label> Name: </label><input type="text" required /> 
          <br />
          <label> Bio: </label><input type="text" required />
          <br />
          <label>Hosted By: </label><input type="text" required />
          <br />
          <label>Picture: </label><input type="file" className="custom-file-input" id="customFile" required /> 
          <br />
          <label>Location: </label><input type="text" required />
          <br />
          <label>Time: </label><input type="time" required />
          <br />
          <label>Affiliated With Group: </label><input type="checkbox" />
          <br />
          <label>Group Name/NA</label><input type="text" />
        </form>
      </div>
      </div>
    )
  }
};