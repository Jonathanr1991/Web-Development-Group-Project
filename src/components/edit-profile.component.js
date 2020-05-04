import React, {Component} from 'react';

export default class EditProfile extends Component {
    render() {
      if(this.props.data.editProfile && this.props.data.loggedIn ){

        return ( 
          <div>
            
            <center> 
              <div className="panel panel-default" >
                <div className="panel-heading" >
                  <div className="form-group" />
                  <h4 className="col-md-3"><center>Edit Profile</center></h4>
                </div>
              </div></center>

            <div className="panel panel-default">
              <div className="panel-heading">
                <div className="form-group">

                  </div>
                </div>
                <div className="form-group">
                  <label className="col-md-3">Bio</label>
                  <div className="col-sm-6">
                    <textarea rows={3} className="form-control" defaultValue={""} />
                  </div>
                </div>
                <div className="panel-body">
                  <div className="form-group">
                    <label className="col-md-3">Major</label>
                    <div className="col-sm-2">
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
              </div>
              <br /> <br />
              
                <div className="form-group">
                  <label className="col-md-3">E-mail Address</label>
                  <div className="col-sm-2">   
                    <input type="tel" className="form-control" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-md-3">First Name</label>
                  <div className="col-sm-4">
                    <input type="email" className="form-control" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-md-3">Last Name</label>
                  <div className="col-sm-6">
                    <textarea rows={3} className="form-control" defaultValue={""} />
                  </div>
                </div>
              </div>

            <br /> <br />
            <center> 
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="col-md-3"><center>Security</center></h4>
                </div>
              </div></center>
            <div className="form-group">
              <label className="col-md-3">Current password</label>
              <div className="col-sm-4">
                <input type="password" className="form-control" />
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-3">New password</label>
              <div className="col-sm-4">
                <input type="password" className="form-control" />
              </div>
            </div>
            <br /> <br />
            <div className="form-group">
              <div className="col-md-3 col-sm-offset-2">
                <div className="checkbox">
                  <input type="checkbox" id="checkbox_1" />
                  <label htmlFor="checkbox_1">Make this account public</label>
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="col-md-3 col-sm-offset-2">
                <button type="submit" className="btn btn-primary">Submit</button>
                <button type="reset" className="btn btn-default">Cancel</button>
              </div>
            </div>
        );
          
     // }else {
       // return(
         // <div></div>
        //)
      }
    };