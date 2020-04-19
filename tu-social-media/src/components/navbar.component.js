import React, { Component } from 'react';
import axios from 'axios';






export default class NavBar extends Component {

    constructor(props) {
        super(props);
    
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
            email: '',
            password: '',
            
        }
      }
    onChangeEmail(e){
        this.setState({
            email: e.target.value
        })
    }
    onChangePassword(e){
        this.setState({
            password: e.target.value
        })
    }
    onSubmit(e){
        e.preventDefault();

        const user = {
            email: this.state.email,
            password: this.state.password,
         }
         axios.post('http://localhost:5000/user/login', user)
         .then(res => console.log(res.data));
    
        this.setState({
          
        })

    }

    render() {
        return (
           <div className="navbar tu-header">
           
            
            
            
                
                <div   className="nav-brand "> <h1>TU Social</h1>
                </div>
               


                    
                    <form onSubmit={this.onSubmit} >

                    <div className="row ">

                     <div className="h6 nav-item col">Towson Email
                        <input className="form-control" placeholder="Email" type="mail" name="name" value={this.state.email} onChange={this.onChangeEmail} />
                        <input type="checkbox"/>Stay logged in </div>
                   
                    <div  className="h6  nav-item col">Password 
                    <input className="form-control" placeholder="Password" type="password" name="password" value ={this.state.password} onChange={this.onChangePassword}/><br/>

                    <a className="h6">Forgot password?</a>
                    </div>
                    
                    <div className="col nav-item ">
                    <button  type="submit" className="btn black-color mt-3"> Login</button>
                    </div>
                    </div>

                    </form>

                    
                    
                </div>
                
           
           
            
                
           
        
        

        );
       
    }
}