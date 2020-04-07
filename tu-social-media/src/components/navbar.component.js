import React, {component, Component } from 'react';
import {Link} from 'react-router-dom';

// stil the to fix issue with very small screen email and password text boxes overlap but works for med and large screens


export default class NavBar extends Component {
    render() {
        return (
           <div className=" tu-header">
           
            <div className="container ">
            <div  className="row ">
                
                <div   className=" mt-2 center-block col-6"> <h1 id="siteheading">TU Social</h1>
                </div>
                <div className="col-6">


                    <div className="row">
                     <div className="h6 mt-2 col">Towson Email
                    <input placeholder="Email" type="mail" name="name" /><br/>
                    <input type="checkbox"/>Stay logged in </div>
                   
                    <div  className="h6 mt-2 col">Password 
                    <input placeholder="Password" type="password" name="password" /><br/>

                    <a className="h6">Forgot password?</a>
                    </div>
                    <div className="col">
                    <buttton type="submit" className="btn btn-default mt-4"> Login</buttton>
                    </div>
                    

                    </div>
                </div>

            </div>
            </div>
                
           </div>
        
        

        );
       
    }
}