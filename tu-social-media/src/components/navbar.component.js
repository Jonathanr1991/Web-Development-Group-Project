import React, {component, Component } from 'react';
import {Link} from 'react-router-dom';

// need to fix why the login button gray 




export default class NavBar extends Component {
    render() {
        return (
           <div className="navbar tu-header">
           
            
            
            
                
                <div   className="nav-brand "> <h1>TU Social</h1>
                </div>
               


                    <div className="row ">
                     <div className="h6 nav-item col">Towson Email
                    <input className="form-control"placeholder="Email" type="mail" name="name" />
                    <input type="checkbox"/>Stay logged in </div>
                   
                    <div  className="h6  nav-item col">Password 
                    <input className="form-control"placeholder="Password" type="password" name="password" /><br/>

                    <a className="h6">Forgot password?</a>
                    </div>
                    
                    <div className="col nav-item ">
                    <buttton type="submit" className="btn btn-large form-control mt-3"> Login</buttton>
                    </div>

                    </div>
                    
                </div>
                
           
           
            
                
           
        
        

        );
       
    }
}