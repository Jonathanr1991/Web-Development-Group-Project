import React, {component, Component } from 'react';
import axios from 'axios';
import Logo from "../img/Towson_logo.jpg"

 
//need to verify passwords match

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
         .then(res => {
            console.log(res.data)
            alert(res.data)
            
         } );
         
    
        this.setState({
          
        })
      }

     

    render() {
        return(
            <div className="container">
            <div className="row  ">
            
            <img className="col-6 mt-5 center-block h-100 " src={Logo}/>
           
            
            <div className="col-6">
            <h1 className=" mt-5 text-center">Sign Up!</h1>
            <form onSubmit={this.onSubmit}>
                 
                 <div className=" form-inline form-group">
                 <input placeholder="First Name" type="text" required className="col form-control " value={this.state.firstName} onChange={this.onChangeFirstName} />
                     
                     <input  placeholder="Last Name" type="text" required className="col ml-2 form-control move-right"   value={this.state.lastName} onChange={this.onChangeLastName} />
                     
                     
                 </div>
                     
                     
                     <input  placeholder="Email"type="email" required className="form-control form-group" value={this.state.email} onChange={this.onChangeEmail} />
                     
                     <input  placeholder="Password" minlength="8" type="password" required className="form-control form-group" value={this.state.password} onChange={this.onChangePassword} />
                     <input  placeholder="Verify Password" minlength="8" type="password" required className="form-control form-group"  />
                     
            
            <div className="form-group">
              <button type="submit"   className="btn  gold-color " >Create an Account</button>
            </div>
                </form>
            
                
            </div>
              
            </div>
            </div>
            

        );
        
    }
}