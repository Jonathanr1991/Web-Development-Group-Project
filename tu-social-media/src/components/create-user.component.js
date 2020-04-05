import React, {component, Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class CreateUser extends Component {

  

      constructor(props) {
        super(props);
    
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeMajor = this.onChangeMajor.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            major: '',
        }
      }
    
      onChangeEmail(e) {
        this.setState({
          email: e.target.value
        })
      }
      onChangePassword(e) {
        this.setState({
          password: e.target.value
        })
      }
      onChangeFirstName(e) {
        this.setState({
          firstName: e.target.value
        })
      }
      onChangeLastName(e) {
        this.setState({
          lastName: e.target.value
        })
      }
      onChangeMajor(e) {
        this.setState({
          major: e.target.value
        })
      }
    
      onSubmit(e) {
        e.preventDefault();
    
        const user = {
            email: this.state.email,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            major: this.state.major,
        }
    
        console.log(user);
    
       axios.post('http://localhost:5000/user/add', user)
         .then(res => console.log(res.data));
    
        this.setState({
          
        })
      }

    render() {
        return(
            <div>
               <form onSubmit={this.onSubmit}>
                 <div className="form-group"> 
                     <label>First Name: </label>
                     <input  type="text" required className="form-control" value={this.state.firstName} onChange={this.onChangeFirstName} />
                     <label>Last Name: </label>
                     <input  type="text" required className="form-control" value={this.state.lastName} onChange={this.onChangeLastName} />
                     <label>Email: </label>
                     <input  type="text" required className="form-control" value={this.state.email} onChange={this.onChangeEmail} />
                     <label>Password: </label>
                     <input  type="text" required className="form-control" value={this.state.password} onChange={this.onChangePassword} />
                    
                     <label> Major</label>
                     <input  type="text" required className="form-control" value={this.state.major} onChange={this.onChangeMajor} />
          </div>
          <div className="form-group">
            <input type="submit" value="Create User" className="btn btn-primary" />
          </div>
        </form>
            </div>
        );
        
    }
}