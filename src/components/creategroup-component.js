import React, {Component} from 'react';
import logo from "../src/Towson_logo.jpg"
import "../page.css";

export default class CreateGroup extends Component{
    render() {
      return (
          <div>
          <h1>hello</h1>
          <div>
        <link rel="stylesheet" type="“text/css”" href="orderup.css" />
        <h2>Create Group</h2>
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
          <label>Type</label>
          <select>
            <option>
              Academic
            </option>
            <option>
              Club
            </option>
            <option>
              Fraternity
            </option>
            <option>
              Other
            </option>
            <option>
              Sorority
            </option>
          </select>
        </form>
      </div>
      </div>
      )
    }
};