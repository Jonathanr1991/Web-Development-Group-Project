import React, {Component} from 'react';
import logo from "../img/Towson_logo.jpg"
import "../editProfile.css"; // maybe only 1 period? same folder? test tmr 

export default class EditProfile extends Component {
    render(){
      return(
        <center> 
        <div>
        <div className="panel panel-default" />
          <div className="panel-heading" />
            <div className="form-group"/> 
          <h4 className="col-md-3"><center>Edit Profile</center></h4>
        </div>
        </center> // why does this make the code unreachable?
          <div className="row" />
          <div className="panel panel-default" />
            <div className="panel-heading" />
              <div className="form-group" />
                  <div className="col-md-3" />
                      <label for="State">State</label>
                      <select name="state"/>
                          <option value="AL">AL</option>
                          <option value="AK">AK</option>
                          <option value="AZ">AZ</option>
                          <option value="AR">AR</option>
                          <option value="CA">CA</option>
                          <option value="CO">CO</option>
                          <option value="CT">CT</option>
                          <option value="DE">DE</option>
                          <option value="FL">FL</option>
                          <option value="GA">GA</option>
                          <option value="HI">HI</option>
                          <option value="ID">ID</option>
                          <option value="IL">IL</option>
                          <option value="IN">IN</option>
                          <option value="IA">IA</option>
                          <option value="KS">KS</option>
                          <option value="KY">KY</option>
                          <option value="LA">LA</option>
                          <option value="ME">ME</option>
                          <option value="MD">MD</option>
                          <option value="MA">MA</option>
                          <option value="MI">MI</option>
                          <option value="MN">MN</option>
                          <option value="MS">MS</option>
                          <option value="MO">MO</option>
                          <option value="MT">MT</option>
                          <option value="NE">NE</option>
                          <option value="NV">NV</option>
                          <option value="NH">NH</option>
                          <option value="NJ">NJ</option>
                          <option value="NM">NM</option>
                          <option value="NY">NY</option>
                          <option value="NC">NC</option>
                          <option value="ND">ND</option>
                          <option value="OH">OH</option>
                          <option value="OK">OK</option>
                          <option value="OR">OR</option>
                          <option value="PA">PA</option>
                          <option value="RI">RI</option>
                          <option value="SC">SC</option>
                          <option value="SD">SD</option>
                          <option value="TN">TN</option>
                          <option value="TX">TX</option>
                          <option value="UT">UT</option>
                          <option value="VT">VT</option>
                          <option value="VA">VA</option>
                          <option value="WA">WA</option>
                          <option value="WV">WV</option>
                          <option value="WI">WI</option>
                          <option value="WY">WY</option>
                     // </select>
                 // </div>
               // </div> // more unreachable code? see how the component reacts after 
        
            <div className="form-group"/>
              <label className="col-md-3">Bio</label>
              <div className="col-sm-6"/>
                <textarea rows="3" className="form-control"></textarea>
             // </div>
           //  </div> // oh wait i think its cuz i already closed the div tag in the same line lol 
            <div className="panel-body"/>
            <div className="form-group" />
              <label className="col-md-3">Birthdate</label>
              <div class = "col-sm-2"/>
                <input type="text" className="form-control"/> //??
              // </div>
            // </div>
          // </div>
        // </div>
        <br> </br>


        <center> 
        <div>
          <div className="panel panel-default"/>
          <div className="panel-heading"/>
          <div className="form-group"/>
          <h4 className="col-md-3"> <center>Contact info</center></h4>
        </div> // now sure why i cant comment this 
        </center>
        <div>
          <div className="panel-body"/>
            <div className="form-group"/>
              <label className="col-md-3">Work number</label>
              <div className="col-sm-2"/>
                <input type="tel" className="form-control"/> // maybe no?
               </div>
            // </div>
            <div>
            <div className="form-group"/>
              <label className="col-md-3">Mobile number</label>
               <div className="col-sm-2"/>   
                <input type="tel" className="form-control"/>
               </div>
            // </div>
            <div className="form-group">
              <label className="col-md-3">E-mail address</label>
              <div className="col-sm-4">
                <input type="email" className="form-control"/>
               </div>
             </div>
            <div className="form-group">
              <label className="col-md-3">Work address</label>
              <div className="col-sm-6">
                <textarea rows="3" className="form-control"></textarea>
               </div>
             </div>
          // </div>
        // </div>
     // </br> </br> // messes up spaces?
  

        <center>  
        <div>
          <div className="panel panel-default"/>
          <div className="panel-heading"/>
          <h4 className="col-md-3"><center>Security</center></h4>
        </div>
        </center>
         <div>
            <div className="form-group"/>
              <label className="col-md-3">Current password</label>
              <div className="col-sm-4"/>
                <input type="password" className="form-control"/>
              </div>
           // </div>
           <div>
            <div className="form-group"/>
              <label className="col-md-3">New password</label>
              <div className="col-sm-4"/>
                <input type="password" className="form-control"/>
               </div>
            // </div>
         // </br> </br>
         <div>
            <div className="form-group"/>
              <div className="col-md-3 col-sm-offset-2"/>
                <div className="checkbox"/>
                  <input type="checkbox" id="checkbox_1"/>
                  <label for="checkbox_1">Make this account public</label>
                </div>
              // </div>
            // </div>
            <div className="form-group"/>
              <div className="col-md-3 col-sm-offset-2"/>
                <button type="submit" className="btn btn-primary">Submit</button>
                <button type="reset" className="btn btn-default">Cancel</button>
              // </div>
            // </div>
          // </div>
        // </div>
    //  </form>
    // </div>
  // </div>
  // </div>
); // not sure how to fix this error, after this i think component might be almost complete
// still need to test this in my local host
}
}